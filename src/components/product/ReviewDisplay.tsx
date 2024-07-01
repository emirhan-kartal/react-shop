import { Box, Rating } from "@mui/material";
import { Review } from "../Interfaces";
import React from "react";

export default function ReviewDisplay({ review }: { review: Review }) {
    return (
        <Box display={"flex"} sx={{ flexDirection: "column" ,alignItems:"center",width:"100%",border:"1px solid darkgray", bgcolor:"lightgray",borderRadius:"10px"}}>
            <h4>{review.name}</h4>
            <p>{review.comment}</p>

            <Rating value={review.rating} readOnly />
        </Box>
    );
}
