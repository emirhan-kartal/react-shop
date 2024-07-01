import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import QuantityTracker from "../QuantityTracker";
import { useDispatch } from "react-redux";
import { removeReduce, addProduct } from "../../redux/reducers/cartSlice";

export default function ProductCardCart({ productInstance, count }) {
    const dispatch = useDispatch();
    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                ml: "auto",
                border: "2px solid lightgray",
            }}
        >
            <CardMedia
                component={"img"}
                image={productInstance.image}
                title={productInstance.name}
                alt={productInstance.name}
                sx={{
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                    borderRadius: 3,
                }}
            />
            <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center" ,gap:1}}>
                <Box sx={{ p: 0}} textAlign={"center"} width={"50%"} >
                    <Typography variant="h5">{productInstance.name}</Typography>
                </Box>
                <QuantityTracker
                    type="cart"
                    product={productInstance}
                    count={count!}
                    sx={{
                        justifySelf: "flex-end",
                        "& .MuiInputBase-root": {
                            width: "50%",
                            height: "22px",
                        },
                    }}
                    removeReduce={() =>
                        dispatch(removeReduce(productInstance.id))
                    }
                    addProduct={() => {
                        dispatch(addProduct(productInstance.id));
                    }}
                />
            </Box>
        </Card>
    );
}
