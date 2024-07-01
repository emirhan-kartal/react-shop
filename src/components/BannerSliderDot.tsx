import { Box } from "@mui/material";
import React from "react";

interface BannerSliderDotProps {
    length: number;
    index: number;
    onClick: (index: number) => void;
}

export default function BannerSliderDot({
    length,
    index,
    onClick,
}: BannerSliderDotProps) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                bottom: 0,
                justifyContent: "center",
                left: "50%",
                transform: "translateX(-50%)",
            }}
        >
            {[...Array(length)].map((_, i) => (
                <Box
                    component="span"
                    onClick={() => onClick(i)}
                    sx={{
                        position: "relative",
                        width: 12,
                        height: 12,
                        borderRadius: "100%",
                        opacity: i === index ? 1 : 0.5,
                        backgroundColor: "darkgray",
                        boxShadow: 10,
                        bottom: "0.5rem",
                        mx: 0.5,
                        transition: "opacity 0.5s",

                        "&:hover": {
                            cursor: "pointer",
                            opacity: 1,
                        },
                    }}
                />
            ))}
        </Box>
    );
}
