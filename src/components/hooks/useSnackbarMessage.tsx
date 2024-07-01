import { Snackbar } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function useSnackbarMessage(
    message = "",
    bgcolor = "#f50057",
    autoHideDuration = 2000
) {
    const [properties, setProperties] = useState({
        message: message,
        bgcolor: bgcolor,
        autoHideDuration: autoHideDuration,
    });

    const [open, setOpen] = useState(false);

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    const activate = (msg, newBgColor, autoHideDuration = 2000) => {
        setProperties({ message: msg, bgcolor: newBgColor, autoHideDuration });
        setOpen(true);
    };

    return {
        SnackbarMessage: () => (
            <Snackbar
                open={open}
                ContentProps={{ sx: { bgcolor: properties.bgcolor } }}
                autoHideDuration={autoHideDuration}
                onClose={handleSnackbarClose}
                message={properties.message}
            />
        ),
        activate,
    };
}
