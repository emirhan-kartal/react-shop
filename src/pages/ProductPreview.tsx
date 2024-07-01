import {
    Box,
    Button,
    CardContent,
    CardMedia,
    FormControl,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import QuantityTracker from "../components/QuantityTracker";
import BasicSelect from "../components/product/ProductSizeSelect";
import config from "../components/Config";
import { Product } from "../components/Interfaces";
import ProductDetail from "../components/product/ProductDetail";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { addProduct } from "../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import useSnackbarMessage from "../components/hooks/useSnackbarMessage";

export default function ProductPreview() {
    const { productID } = useParams();
    const [quantity, setQuantity] = React.useState<number>(1);
/*     const [open, setOpen] = React.useState<boolean>(false);
 */
    const [product] = React.useState<Product>(
        config.products.filter((product) => product.id === productID)[0]
    );
    const [size, setSize] = React.useState<string>("");
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    const dispatch = useDispatch<AppDispatch>();


    const {SnackbarMessage,activate} = useSnackbarMessage("", "#f50057", 2000);
    window.scrollTo(0, 0);
    return (
        <Box>
            <SnackbarMessage/>
            <Box
                sx={{
                    mt: { xs: 0, md: 4, lg: 6 },
                    py: { xs: 0, md: 2 },
                    border: "1px solid lightgray",
                }}
            >
                <IconButton
                    sx={{
                        position: "absolute",
                        left: 0,
                        fontSize: 32,
                        borderRadius: "100%",
                        bgcolor: "gray",
                        margin: "1rem 2px 0 2px",
                        color: "white",
                        border: "1px solid lightgray",
                    }}
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    <Icon icon="mdi:arrow-left" />
                </IconButton>
                <Grid
                    container
                    sx={{
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        px: { xs: 0, md: 6, lg: 10 },

                        mx: "auto",
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            height={500}
                            image={
                                product.image || "https://placehold.co/720x600"
                            }
                            component="img"
                            alt="product"
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        sx={{
                            flexDirection: "column",
                            width: "90%",
                        }}
                        xs={12}
                        md={6}
                    >
                        <CardContent
                            sx={{
                                py: 0,
                                px: { xs: 0 },
                            }}
                        >
                            <Grid item>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: { xs: 1, md: 2 },
                                        margin: 0,
                                        height: "100%",
                                        textAlign: { xs: "center", md: "left" },
                                        mx: { xs: 0, md: 1, lg: 2 },
                                    }}
                                >
                                    <Typography
                                        fontSize={18}
                                        fontWeight={700}
                                        sx={{
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        fontSize={{ xs: 18, md: 20, lg: 24 }}
                                        color={"black"}
                                    >
                                        {product.price} $
                                        <Typography
                                            fontSize={12}
                                            color={"gray"}
                                        >
                                            VAT included
                                        </Typography>
                                    </Typography>
                                    <FormControl fullWidth required>
                                        <BasicSelect
                                            size={size}
                                            setSize={setSize}
                                            product={product}
                                        />
                                        <Typography paragraph>
                                            {product.description}
                                        </Typography>
                                    </FormControl>

                                    <div>
                                        <Typography color={"green"}>
                                            In stock: {product.stock}
                                        </Typography>
                                        <Typography paragraph fontWeight={800}>
                                            Free Shipping!
                                        </Typography>
                                    </div>
                                    <QuantityTracker
                                        count={quantity}
                                        height={52}
                                        type="preview"
                                        product={product}
                                        removeReduce={() => {
                                            setQuantity(quantity - 1);
                                        }}
                                        addProduct={() => {
                                            setQuantity(quantity + 1);
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                width: "100%",
                                                height: "3rem",
                                                my: "auto",
                                            }}
                                            onClick={(e) => {
                                                if (size === "") {
                                                    alert(
                                                        "Please select a size"
                                                    );
                                                    return;
                                                }
                                                e.stopPropagation();
                                                activate("Product added to cart!","green");

                                                dispatch(
                                                    addProduct(product.id)
                                                );
                                            }}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <ProductDetail product={product} isMdUp={isMdUp} />
                </Grid>
            </Box>
        </Box>
    );
}
