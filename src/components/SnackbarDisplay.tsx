import { Snackbar, SnackbarContent } from "@mui/material";
import React from "react";

interface SnackbarDisplayProps {
    options: { open: boolean; message: string; color: string };
    setOpen: (open: boolean) => void;
}

const colors:{[key:string]:string} = { error: "red", success: "green", warning: "yellow" };

export default function SnackbarDisplay({
    options,
    setOpen,
}: SnackbarDisplayProps) {
    const { message, open, color } = options;

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                open={open}
                onClose={(_, reason) => {
                    if (reason === "clickaway") return;
                    setOpen(false);
                }}
                autoHideDuration={3000}
            >
                <SnackbarContent
                    style={{ backgroundColor: colors[color] }}
                    message={message}
                ></SnackbarContent>
            </Snackbar>
        </div>
    );
}
