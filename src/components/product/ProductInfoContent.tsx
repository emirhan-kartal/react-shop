import { Box, Typography } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";

interface ProductInfoContentProps {
    index: number;
    value: number;
    markdownContent?: string;
    reviewElements?: JSX.Element[];
}

export default function ProductInfoContent({
    markdownContent,
    index,
    value,
    reviewElements,
}: ProductInfoContentProps) {
    if (value === index || value === -1) {
        return (
            <Box
                sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    whiteSpace: "pre-wrap",
                }}
            >
                <Typography variant="h5" gutterBottom>
                    {`Tab ${index + 1}`}
                </Typography>
                <Typography variant="body1">
                    {`Tab ${index + 1} content`}
                </Typography>
                {reviewElements}
                <ReactMarkdown
                    children={markdownContent}
                    components={{
                        img: ({ node, ...props }) => (
                            <>
                                <br /> {/* Add a line break after each image */}
                            </>
                        ),
                    }}
                />{" "}
            </Box>
        );
    } else return null;
}
