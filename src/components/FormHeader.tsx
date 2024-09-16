import { Grid, Typography } from "@mui/material";
import React from "react";
import ConversionStepper from "./ConversionStepper";

export default function FormHeader({
    activeStep,
    title,
}: {
    activeStep: number;
    title: string;
}) {
    return (
        <Grid
            container
            minHeight={60}
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            borderBottom={"1px solid lightgray"}
            borderTop={"1px solid lightgray"}
        >
            <Grid item xs={12} md={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Typography
                    variant="h5"
                    padding={0}
                    width={"object-fit"}
                    display={{xs:"none", md:"inline-block"}}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
                <ConversionStepper activeStep={activeStep} />
            </Grid>
        </Grid>
    );
}
