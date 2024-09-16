import { FormHelperText, TextField } from "@mui/material";
import React from "react";

export default function TextFieldWithHelperText({ error,...props }: any) {
    return (
        <>
            <TextField {...props} />
            {error && (
                <FormHelperText error>This field is required</FormHelperText>
            )}
        </>
    );
}
