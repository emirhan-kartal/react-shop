import React from "react";
import useScrollOffset from "./hooks/useScrollOffset";
import { Box } from "@mui/material";

export default function BackToTop() {
    const shown = useScrollOffset();
    console.log(shown + "back to top");
    return (
        <Box
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            sx={{
                position: "fixed",
                bottom: 20,
                right: 20,
                backgroundColor: "#f50057",
                color: "white",
                borderRadius: "50%",
                width: 50,
                height: 50,
                display: "flex",
                visibility: shown ? "visible" : "hidden",
                scale: shown ? 1 : 0,
                transition: "all 0.5s",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
            }}
        >
            <span>↑</span>
        </Box>
    );
}
