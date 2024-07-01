import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/reducers/cartSlice";
import ProductCardCart from "../components/product/ProductCardCart";
import config from "../components/Config";

export default function CartPage() {
    const cart = useSelector(selectCart);
    const total = cart
        .reduce((acc, item) => acc + item.productInstance.price, 0)
        .toFixed(2);
    const shipping = config.shipping_cost;

    return (
        <Grid container justifyContent={"center"} rowGap={4}>
            <Grid item xs={12}>
                <Box
                    height={60}
                    display={"flex"}
                    px={4}
                    alignItems={"center"}
                    borderBottom={"1px solid lightgray"}
                    borderTop={"1px solid lightgray"}
                >
                    <Typography>Your Cart</Typography>
                </Box>
            </Grid>
            {cart.map((item) => (
                <Grid item xs={12} md={9}>
                    <ProductCardCart
                        key={item.productInstance.id}
                        productInstance={{
                            ...item.productInstance,
                        }}
                        count={item.count}
                    />
                </Grid>
            ))}
            <Grid item xs={12} md={3}>
                <Card>
                    <Typography variant="h4" component={"h1"}>
                        {total + shipping}
                    </Typography>

                    <Typography variant="h6" component={"h2"}>
                        Items: {total}
                    </Typography>
                    <Typography variant="h6" component={"h3"}>
                        Shipping: {shipping}
                    </Typography>
                </Card>
            </Grid>
        </Grid>
    );
}
