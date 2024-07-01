import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SkeletonAnimation from "./SkeletonAnimation";

interface CategoryCardProps {
    src: string;
    text: string;
    redirect: string;

}

export default function CategoryCard({ src, text, redirect }: CategoryCardProps) {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    return (
        <Grid item xs={12} sm={6} sx={{ cursor: "pointer" }} height={"100%"}>
            <Box
                component={Link}
                height={"100%"}
                position={"relative"}
                to={redirect}
            >
                {!loaded && (
                    <Box height={600} bgcolor={""}>
                        {" "}
                        <Skeleton
                            animation="wave"
                            variant="rectangular"
                            width={"full"}
                            height={600}
                        />
                    </Box>
                )}
                <SkeletonAnimation loaded={loaded} willBeLoadedLast callback={() => setLoaded(true)}>
                    <Box
                        component={"img"}
                        alt={text}
                        sx={{
                            objectFit: "cover",
                            width: "100%",
                            height: "auto",
                            borderRadius: 1,
                            display: loaded ? "block" : "none",
                        }}
                        src={src === "mock" ? "https://placehold.co/600" : src}
                    ></Box>
                </SkeletonAnimation>
                <Typography
                    sx={{
                        position: "absolute",
                        top: "90%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: {
                            xs: "28px",
                            sm: "32px",
                            md: "38px",
                            lg: "44px",
                        },
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        display: loaded ? "block" : "none",
                    }}
                >
                    {text}
                </Typography>
            </Box>
        </Grid>
    );
}
