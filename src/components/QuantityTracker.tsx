import React from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactIcon } from "./ReactIcon";
import SnackbarDisplay from "./SnackbarDisplay";
import { Product } from "./Interfaces";

//////////////////////////////////////////////////
// You inject the count, addProduct, and removeReduce props into the QuantityTracker component.
// I made this component to reuse it in the ProductPreview and ProductCard components.
// When you increase the quantity in the cart, it will update the card but not the same in the ProductPreview
//////////////////////////////////////////////////
interface QuantityTrackerProps {
    count: number;
    addProduct: (event) => void;
    removeReduce: () => void;
    height?: number;
    width?: number | string;
    sx?: object;
    type: string;
    product: Product;
}

export default function QuantityTracker({
    product,
    count,
    addProduct,
    removeReduce,
    height,
    width,
    type,
    sx,
}: QuantityTrackerProps) {
    const [snackbar, setSnackbar] = React.useState({
        message: "",
        open: false,
        color: "",
    });
    return (
        <Box display={"flex"}>
            <SnackbarDisplay
                options={snackbar}
                setOpen={(val: boolean) =>
                    setSnackbar((snackbar) => {
                        return { ...snackbar, open: val };
                    })
                }
            />
            <TextField
                value={count}
                maxRows={1}
                variant="outlined"
                inputProps={{ style: { textAlign: "center" } }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <ReactIcon
                                actionToCall={() => {
                                    if (type !== "cart" && count - 1 === 0) {
                                        return;
                                    } else if (
                                        type === "preview" &&
                                        count - 1 === 0
                                    )
                                        return;
                                    removeReduce();
                                }}
                                iconName={
                                    count === 1 && !height
                                        ? "mdi:trash"
                                        : "mdi:minus"
                                }
                                
                                sx={{ padding: type === "cart" ? 1 : 2 }}
                            />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <ReactIcon
                                actionToCall={(event) => {
                                    if (count + 1 > product.stock) {
                                        setSnackbar({
                                            message:
                                                "Cannot add more than available stock!",
                                            open: true,
                                            color: "error",
                                        });
                                        return;
                                    } else {
                                        addProduct(event);
                                    }
                                }}
                                iconName="mdi:plus"
                                sx={{ padding: type === "cart" ? 1 : 2 }}
                            />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    "& .MuiInputBase-root": {
                        height: height || 22,
                        width: width || "100%",

                        padding: "3px 0",
                        fontSize: "0.8rem",
                    },
                    flexGrow: { xs: 5 },

                    ...sx,
                }}
                size="small"
            />
        </Box>
    );
}
