import React, { useEffect, useRef, useState } from "react";
import config from "../Config";
import ProductCard from "./ProductCard";
import ProductContainer from "./ProductContainer";
import {
    Backdrop,
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuFiltering from "./MenuFiltering";
import MenuOrdering from "./MenuOrdering";
import { useParams, useSearchParams } from "react-router-dom";
import FilteringDesktop from "./FilteringDesktop";

export default function FilterProducts() {
    
    const [open, setOpen] = useState<number>(-1);
    const routerParams = useParams();
    const [urlParams] = useSearchParams();
    const [ordering, setOrdering] = useState<number>(0);
    const productIDs = useRef<string[]>([]); //to make the productlists unsorted

    const [filteredProducts, setFilteredProducts] = useState<JSX.Element[]>(
        filteringProducts()
    );
    function filteringProducts() {
        let filteredProducts;
        if (urlParams.size === 0) {
            filteredProducts = config.products
                .filter(
                    (product) =>
                        product.category.toLocaleLowerCase() ===
                        routerParams.category
                )
                .map((product) => {
                    if (!productIDs.current.includes(product.id)) {
                        productIDs.current.push(product.id);
                    }
                    return (
                        <ProductCard
                            productInstance={product}
                            count={0}
                            key={product.id}
                        />
                    );
                });
        } else {
            filteredProducts = config.products
                .filter((product) => {
                    const conditionArray: boolean[] = [];
                    const productFilterProps = product.specialFilterProps;
                    conditionArray.push(
                        routerParams.category ===
                            product.category.toLocaleLowerCase()
                    );
                    for (const key of urlParams.keys()) {
                        if (key === "price") {
                            const prices: string[] = urlParams
                                .get(key)!
                                .split(",");
                            if (prices === null || prices === undefined) {
                                continue;
                            }

                            const priceOfProduct = product.onDiscount
                                ? product.discountPrice!
                                : product.price;

                            conditionArray.push(
                                priceOfProduct >= parseInt(prices[0]) &&
                                    priceOfProduct <= parseInt(prices[1])
                            );
                            continue;
                        } else if (key === "advantages") {
                            conditionArray.push(product.onDiscount ? true : false)
                        } 
                        
                        else {
                            conditionArray.push(
                                urlParams
                                    .get(key)
                                    ?.includes(productFilterProps[key] || '')
                                    ? true
                                    : false
                            );
                        }
                    }
                    return conditionArray.every((condition) => condition);
                })
                .map((product) => {
                    if (!productIDs.current.includes(product.id)) {
                        productIDs.current.push(product.id);
                    }

                    return (
                        <ProductCard
                            productInstance={product}
                            count={0}
                            key={product.id}
                        />
                    );
                });
        }
        return filteredProducts;
    }

    useEffect(() => {
        const handleScroll = () => {
            window.scrollTo(window.scrollX, 0);
        };
        if (open !== -1) {
            window.addEventListener("scroll", handleScroll);
        } else {
            window.removeEventListener("scroll", handleScroll);
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [open]);
    useEffect(() => {   
        console.log("ordering changed")
        let filteredProductsClone = [...filteredProducts];
        if (ordering === 1) {
            filteredProductsClone.sort((a, b) => {
                const priceA = a.props.productInstance.onDiscount
                    ? a.props.productInstance.discountPrice!
                    : a.props.productInstance.price;
                const priceB = b.props.productInstance.onDiscount
                    ? b.props.productInstance.discountPrice!
                    : b.props.productInstance.price;
                return priceA - priceB;
            });
        } else if (ordering === 2) {
            filteredProductsClone.sort((a, b) => {
                const priceA = a.props.productInstance.onDiscount
                    ? a.props.productInstance.discountPrice!
                    : a.props.productInstance.price;
                const priceB = b.props.productInstance.onDiscount
                    ? b.props.productInstance.discountPrice!
                    : b.props.productInstance.price;
                return priceB - priceA;
            });
        } else if (ordering === 3) {
            filteredProductsClone.sort((a, b) => {
                const dateA = new Date(a.props.productInstance.date);
                const dateB = new Date(b.props.productInstance.date);
                return dateB.getTime() - dateA.getTime();
            });
        } else if (ordering === 4) {
            filteredProductsClone.sort((a, b) => {
                const dateA = new Date(a.props.productInstance.date);
                const dateB = new Date(b.props.productInstance.date);
                return dateA.getTime() - dateB.getTime();
            });
        } else if (ordering === 0) {
            let unsortedProducts: JSX.Element[] = [];
            productIDs.current.forEach((id) => {
                const product = filteredProducts.find(
                    (product) => product.props.productInstance.id === id
                );
                if (product !== undefined) {
                    unsortedProducts.push(product);
                }
            });
            filteredProductsClone = unsortedProducts;
        }
        setFilteredProducts(filteredProductsClone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ordering]);
    useEffect(() => {
        setFilteredProducts(filteringProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[urlParams])
    return (
        <>
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    width: "100%",
                    overflowX: "hidden",
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        textAlign: "center",
                        width: "100%",
                        py: 2,
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(0);
                    }}
                >
                    <Icon icon="akar-icons:descending" />
                    {"  "}
                    Order
                </Button>
                <Button
                    variant="contained"
                    sx={{ textAlign: "center", width: "100%", py: 2 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(1);
                    }}
                >
                    Filtering
                </Button>
            </Box>
            <Grid container flexDirection={"row"} padding={{ lg: 3 }}>
                <Grid
                    item
                    sx={{
                        width: "20%",
                        display: { xs: "none", lg: "flex" },
                        flexDirection: "column",
                    }}
                >
                    <FilteringDesktop />
                </Grid>

                <Grid item width={{ xs: "100%", lg: "80%" }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: {
                                xs: "center",
                                md: "space-between",
                            },
                            px: { xs: 2, sm: 10, md: 14, lg: 3 },
                            py: { xs: 2, md: 0 },
                        }}
                    >
                        <Typography
                            fontWeight={"bold"}
                            sx={{ textAlign: "start", height: 40 }}
                        >
                            {filteredProducts.length > 10
                                ? Math.floor(filteredProducts.length / 10) + "+"
                                : filteredProducts.length}{" "}
                            products listed
                        </Typography>
                        <FormControl>
                            <InputLabel htmlFor="ordering">Order By</InputLabel>
                            <Select
                                labelId="ordering"
                                defaultValue={0}
                                sx={{
                                    display: {
                                        xs: "none",
                                        md: "inline-flex",
                                        flexDirection: "flex-end",
                                    },
                                    height: 40,
                                    minWidth: 200,
                                }}
                                label="Order By"
                                onChange={(e) => {
                                    setOrdering(e.target.value as number);
                                }}
                            >
                                <MenuItem value={1}>Lowest to Highest</MenuItem>
                                <MenuItem value={2}>Highest to Lowest</MenuItem>
                                <MenuItem value={3}>Newest</MenuItem>
                                <MenuItem value={4}>Oldest</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <ProductContainer>{filteredProducts}</ProductContainer>
                </Grid>
            </Grid>
            <Backdrop open={open === 0 || open === 1}>
                <MenuOrdering
                    open={open === 0}
                    setOpen={setOpen}
                    setOrdering={setOrdering}
                    ordering={ordering}
                />
                <MenuFiltering open={open === 1} setOpen={setOpen} />
            </Backdrop>
        </>
    );
}
