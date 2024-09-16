import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@mui/material/Button";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import config from "../Config";

import React from "react";
import { Product } from "../Interfaces";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addProduct, removeReduce } from "../../redux/reducers/cartSlice";
import QuantityTracker from "../QuantityTracker";
import ConditionalLink from "../ConditionalLink";
import SkeletonAnimation from "../SkeletonAnimation";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        smplus: true;
    }
}

export interface ProductCardProps {
    productInstance: Product;
    count?: number;
}

export default function ProductCard({
    productInstance,
    count,
}: ProductCardProps) {
    const [loaded, setLoaded] = React.useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();
    const {
        id,
        name,
        price,
        description,
        image,
        type,
        stock,
        productInfo,
        onDiscount,
        discountPrice,
    } = productInstance;

    return (
        <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={3}
            flexDirection={
                type === "cart" || type === "cart-page" ? "row" : "column"
            }
            justifySelf={"center"}
            sx={{ position: "relative" }}
            flexShrink={0}
        >
            <ConditionalLink
                condition={type !== "cart" && type !== "cart-page" && loaded}
                to={`/product/${id}`}
            >
                <Card
                    sx={{
                        height:
                            type === "cart" || type === "cart-page"
                                ? 130
                                : "auto",
                        width: type === "cart" ? 300 : "auto",
                        bgcolor: "white",
                        border: "1px solid lightgray",
                    }}
                >
                    <CardContent
                        sx={{
                            display:
                                type === "cart" || type === "cart-page"
                                    ? "flex"
                                    : "static",
                            gap: type === "cart" ? 1 : 2,
                            height: "100%",
                            padding: 2,
                            width: type === "cart" ? "200" : "auto",
                        }}
                    >
                        {
                            <SkeletonAnimation
                                variant={"rectangular"}
                                height={"130px"}
                                willBeLoadedLast
                                callback={() => setLoaded(true)}
                                loaded={loaded}
                            >
                                <CardMedia
                                    component="img"
                                    image={
                                        image || "https://placehold.co/720x600"
                                    }
                                    alt="product"
                                    height={type === "cart" ? 100 : "auto"}
                                    width={type === "cart" ? 100 : "100%"}
                                />
                            </SkeletonAnimation>
                        }

                        <Box
                            display={"flex"}
                            flexDirection={type === "cart" ? "column" : "row"}
                            width={type === "cart" ? "70%" : "100%"}
                        >
                            <SkeletonAnimation
                                variant={"text"}
                                width="100px"
                                height={type !== "cart" ? "20px" : "auto"}
                                loaded={loaded}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textAlign: "center",
                                        fontSize: type === "cart" ? 16 : 13,
                                        height: type !== "cart" ? 40 : "auto",
                                        width: "100%",
                                        fontWeight: "bold",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",

                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 2,
                                    }}
                                >
                                    <abbr title={name}>{name}</abbr>
                                </Typography>
                            </SkeletonAnimation>

                            {type === "cart" && (
                                <Box
                                    display={"flex"}
                                    justifyContent={"flex-end"}
                                >
                                    <Typography
                                        sx={{
                                            justifySelf: "flex-start",
                                            color: "gray",
                                            fontSize: 14,
                                            flexGrow: 1,
                                        }}
                                    >
                                        Quantity:
                                    </Typography>
                                    <QuantityTracker
                                        type="cart"
                                        product={
                                            {
                                                id,
                                                name,
                                                price,
                                                description,
                                                image,
                                                type,
                                                stock,
                                                productInfo,
                                                onDiscount,
                                                discountPrice,
                                                category: "",
                                                specialFilterProps: {},
                                                date: "",
                                            }!
                                        }
                                        count={count!}
                                        removeReduce={() =>
                                            dispatch(removeReduce(id))
                                        }
                                        addProduct={() => {
                                            dispatch(addProduct(id));
                                        }}
                                    />
                                </Box>
                            )}
                            {type === "cart" && (
                                <Typography>
                                    Subtotal:
                                    {(price * (count || 0)).toFixed(2) +
                                        " " +
                                        config.currency_symbol}
                                </Typography>
                            )}
                        </Box>

                        <SkeletonAnimation variant={"text"} loaded={loaded}>
                            <Box
                                display={type === "cart" ? "none" : "flex"}
                                alignItems={"center"}
                            >
                                <Typography
                                    component={"h1"}
                                    sx={{
                                        textDecorationLine: onDiscount
                                            ? "line-through"
                                            : "none",
                                        color: onDiscount ? "red" : "black",
                                        fontSize: { xs: 16, md: 18 },
                                        marginRight: 0.5,
                                    }}
                                >
                                    {price + "" + config.currency_symbol}
                                </Typography>

                                {onDiscount && (
                                    <Typography
                                        component={"h2"}
                                        sx={{
                                            fontSize: { xs: 16, md: 18 },
                                        }}
                                    >
                                        {discountPrice +
                                            "" +
                                            config.currency_symbol}
                                    </Typography>
                                )}

                                <Box
                                    sx={{
                                        marginLeft: "auto",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Icon
                                        icon="octicon:info-16"
                                        fontSize={26}
                                    />
                                </Box>
                            </Box>
                        </SkeletonAnimation>

                        {onDiscount && type !== "preview" && (
                            <SkeletonAnimation
                                variant={"text"}
                                height="20px"
                                width="50px"
                                loaded={loaded}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        px: 1,
                                        bgcolor: "green",
                                        color: "white",
                                        borderTopLeftRadius: 1,
                                        borderBottomRightRadius: 1,
                                        borderTopRightRadius: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 12,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {Math.round(
                                            ((price - discountPrice!) / price) *
                                                100
                                        ) + "% off"}
                                    </Typography>
                                </Box>
                            </SkeletonAnimation>
                        )}

                        {type === "preview" && (
                            <CardActions
                                sx={{
                                    padding: 0,
                                    mt: 1,
                                }}
                            >
                                <Button
                                    sx={{ mt: "auto" }}
                                    fullWidth
                                    variant="contained"
                                    onClick={(e) => {}}
                                >
                                    Add To Cart
                                </Button>
                            </CardActions>
                        )}
                    </CardContent>
                </Card>
            </ConditionalLink>
        </Grid>
    );
}
