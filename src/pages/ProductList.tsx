import { Grid, ThemeProvider, createTheme } from "@mui/material";
import config from "../components/Config";
import ProductCard from "../components/product/ProductCard";
import React from "react";
import CategoryContainer from "../components/CategoryTabs";
import ProductContainer from "../components/product/ProductContainer";
export default function ProductList() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 640,
                smplus: 768,
                md: 1024,
                lg: 1200,
                xl: 1920,
            },
        },
    });
    const [category, setCategory] = React.useState("all");

    const toReturn = config.products
        .filter((product) => {
            if (category === "all") {
                return true;
            }
            return product.category === category;
        })
        .map((product) => {
            return (
                <ProductCard
                    productInstance={product}
                    key={product.id}
                    count={0}
                />
            );
        });

    return (
        <ThemeProvider theme={theme}>
            <CategoryContainer category={category} setCategory={setCategory} />
            <ProductContainer>{toReturn}</ProductContainer>
        </ThemeProvider>
    );
}
