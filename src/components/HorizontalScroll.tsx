import { Box } from "@mui/material";
import React from "react";

export default function HorizontalScroll({ children }) {
    return (
        <Box
            sx={{
                display: "flex",
                overflowX: "scroll",
                gap: 3,
                py:3,
                px:{xs:4,md:2},
                "&::-webkit-scrollbar": {
                    display: "none",
                },
                "-ms-overflow-style": "none",
                scrollbarWidth: "none",
                boxShadow: "inset 0 -5px 0 0 #d9d9d9",
                width: "90%",
            }}
        >
            {children}
        </Box>
    );
}
