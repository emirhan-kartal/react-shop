import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import { Product, Review } from "../Interfaces";
import ProductInfoContent from "./ProductInfoContent";
import ReviewDisplay from "./ReviewDisplay";

interface ProductDetailProps {
    product: Product;
    isMdUp: boolean;
}

export default function ProductDetail({ product, isMdUp }: ProductDetailProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (isMdUp) {
            setValue(0);
            console.log("test");
        }
    }, [isMdUp]);

    if (!product) {
        return null; // Explicitly return null if product is not defined
    }

    const productInfoContent = (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: 0,
                margin: 0,
            }}
        >
            {Object.keys(product.productInfo).map((key, index) => {
                if (key === "reviews") {
                    const reviews: Review[] = product.productInfo[key];
                    const reviewElements = reviews.map(
                        (review: Review, index: number) => (
                            <ReviewDisplay key={index} review={review} />
                        )
                    );
                    return (
                        <ProductInfoContent
                            key={index}
                            index={index}
                            value={value}
                            reviewElements={reviewElements}
                        />
                    );
                } else
                    return (
                        <ProductInfoContent
                            key={index}
                            index={index}
                            value={value}
                            markdownContent={product.productInfo[key] as string}
                        />
                    );
            })}
        </Box>
    );

    if (!isMdUp) {
        if (value === 0) {
            setValue(-1);
        } else {
            return productInfoContent;
        }
    }

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "background.paper",
                display: { xs: "none", md: "block" },
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                centered
            >
                <Tab label="Details" />
                <Tab label="Reviews" />
                <Tab label="Shipping" />
                <Tab label="Returns" />
            </Tabs>
            {productInfoContent}
        </Box>
    );
}
