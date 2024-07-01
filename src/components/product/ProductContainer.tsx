import { Grid } from "@mui/material";
import React from "react";

export default function ProductContainer({ children }: { children:React.ReactNode}) {

    return (
        <Grid
            container
            sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                px: {xs:2, sm: 10, md: 14,lg:3 },
                py: 4,
                overflowX: "auto",
            }}
            spacing={{ xs: 2, md: 3, lg: 4, xl: 5 }}
        >
            {children}
        </Grid>
    );
}
