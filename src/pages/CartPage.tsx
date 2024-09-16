import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/reducers/cartSlice";
import ProductCardCart from "../components/product/ProductCardCart";
import config from "../components/Config";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
    const cart = useSelector(selectCart);
    const total = cart
        .reduce((acc, item) => acc + item.productInstance.price, 0)
        .toFixed(2);
    const shipping = config.shipping_cost;
    const navigate = useNavigate();

    return (
        <Grid container justifyContent={"center"} rowGap={4} columnGap={1}>
            <Grid item xs={12}>
                <Box
                    height={60}
                    display={"flex"}
                    px={4}
                    alignItems={"center"}
                    borderBottom={"1px solid lightgray"}
                    borderTop={"1px solid lightgray"}
                >
                    <Typography sx={{ fontWeight: "bold" }}>
                        Your Cart
                    </Typography>
                    <Typography color={"lightgray"}>
                        ({cart.length} items)
                    </Typography>
                </Box>
            </Grid>
            {cart.map((item) => (
                <Grid item xs={12} md={8}>
                    <ProductCardCart
                        key={item.productInstance.id}
                        productInstance={{
                            ...item.productInstance,
                        }}
                        count={item.count || 1}
                    />
                </Grid>
            ))}
            <Grid item xs={12} md={2}>
                <Card>
                    <Typography
                        variant="h4"
                        component={"h1"}
                        fontWeight={"bold"}
                    >
                        {total + shipping}
                    </Typography>

                    <Typography component={"h2"} fontSize={14}>
                        Items: {total}
                    </Typography>
                    <Typography component={"h3"} fontSize={14}>
                        Shipping: {shipping}
                    </Typography>
                    <Button variant={"contained"} fullWidth
                    onClick={() => {
                         navigate("/cart/address");
                    }}>Proceed</Button>
                </Card>
            </Grid>
        </Grid>
    );
}
