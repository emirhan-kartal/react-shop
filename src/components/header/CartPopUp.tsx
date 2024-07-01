import {
    Tooltip,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Box,
    Typography,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import config from "../Config";
import ProductCard from "../product/ProductCard";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/reducers/cartSlice";

export default function CartPopUp() {
    const cart = useSelector(selectCart);
    const [anchorElCart, setAnchorElCart] = React.useState<null | Element>(null);
    const handleOpenCartMenu = (event:React.MouseEvent) => {
        setAnchorElCart(event.currentTarget);
    };
    const handleCloseCartMenu = () => {
        setAnchorElCart(null);
    };

    return (
        <>
            <Tooltip title="Open cart">
                <Box
                    sx={{
                        display: "flex",
                        border: { xs: "none", md: "1px solid lightblue" },
                        borderRadius: "10%",
                        padding: 0.7,
                        width: { xs: "28px", md: "100px" },
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    onClick={handleOpenCartMenu}
                >
                    <IconButton
                        sx={{
                            mr: 1,
                            cursor: "pointer",
                            color: "white",
                        }}
                    >
                        <Icon icon="mdi:cart" />
                    </IconButton>
                    <Typography sx={{ display: { xs: "none", md: "block" } }}>
                        Cart
                    </Typography>
                </Box>
            </Tooltip>

            <Menu
                id="menu-appbar"
                anchorEl={anchorElCart}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElCart)}
                onClose={handleCloseCartMenu}
            >
                {cart.length === 0 || !cart ? (
                    <MenuItem>Card is Empty</MenuItem>
                ) : (
                    cart.map((product) => (
                        <MenuItem
                            key={product.productInstance.id}
                            disableRipple
                            sx={{ cursor: "default" }}
                        >
                            <ProductCard
                                productInstance={{...product.productInstance,type:"cart"}}
                                count={product.count}
                            />
                        </MenuItem>
                    ))
                )}
                <MenuItem
                    disableRipple
                    sx={{
                        display: cart.length !== 0 || !cart ? "static" : "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                    }}
                >
                    <MenuItem>
                        Shipping:{" "}
                        {config.shipping_cost + " " + config.currency_symbol}
                    </MenuItem>
                    <MenuItem>
                        Total:{" "}
                        {cart &&
                            cart
                                .reduce(
                                    (total, product) =>
                                        total +
                                        product.productInstance.price *
                                            (product.count || 0),
                                    0
                                )
                                .toFixed(1) +
                                config.shipping_cost +
                                " " +
                                config.currency_symbol}
                    </MenuItem>
                    <MenuItem sx={{ width: "100%" }}>
                        <Button variant="contained" fullWidth>
                            Checkout
                        </Button>
                    </MenuItem>
                </MenuItem>
            </Menu>
        </>
    );
}
