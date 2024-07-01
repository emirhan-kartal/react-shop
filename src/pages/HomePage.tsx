import React from "react";
import config from "../components/Config";
import ProductCard from "../components/product/ProductCard";
import ProductContainer from "../components/product/ProductContainer";
import { Grid, Typography } from "@mui/material";
import HorizontalScroll from "../components/HorizontalScroll";
import CategoryCard from "../components/CategoryCard";

export default function HomePage() {
    const discountedProducts = config.products
        .filter((product) => product.onDiscount)
        .map((product) => {
            return (
                <ProductCard
                    productInstance={{ ...product, type: "horizontal-scroll" }}
                    key={product.id}
                />
            );
        });
    console.log(discountedProducts);

    return (
        <>
            <Grid container spacing={1} padding={1}>
                <CategoryCard
                    src="/assets/man.jpeg"
                    text="Men"
                    redirect={"/products/men"}
                />
                <CategoryCard
                    src="/assets/woman.jpeg"
                    text="Women"
                    redirect={"/products/women"}
                />
                <CategoryCard
                    src="/assets/kids.jpeg"
                    text="Kids"
                    redirect={"/products/kids"}
                />
                <CategoryCard
                    src="/assets/accessories.jpeg"
                    text="Accessories"
                    redirect={"/products/accessories"}
                />
            </Grid>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "start",

                        px: { xs: 2, sm: 16, md: 17, lg: 22, xl: 25 },
                        pt: 4,
                    }}
                >
                    On Sale
                </Typography>
            <ProductContainer>
                <HorizontalScroll>{discountedProducts}</HorizontalScroll>
            </ProductContainer>

            {/*             <ProductContainer>
                <HorizontalScroll>{featuredProducts}</HorizontalScroll>
            </ProductContainer> */}
        </>
    );
}
