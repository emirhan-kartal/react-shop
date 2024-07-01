import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Product } from "components/Interfaces";

interface BasicSelectProps {
    product:Product;
    size:string;
    setSize:React.Dispatch<React.SetStateAction<string>>;
}

export default function BasicSelect({ product, size, setSize }: BasicSelectProps) {
    const handleChange = (event: SelectChangeEvent) => {
        setSize(event.target.value as string);
    };

    return (
        <Box>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={size}
                label="Age"
                onChange={handleChange}
                fullWidth
                required
            >
                {product.specialFilterProps.size !== undefined && (
                    <MenuItem value={0}>
                        {product.specialFilterProps.size}
                    </MenuItem>
                )}

{/*                 { this is the actual one
                    product.specialFilterProps.sizes !== undefined &&
                    product.specialFilterProps.sizes.map((size, index) => (
                        <MenuItem value={index} key={index}>
                            {size}
                        </MenuItem>
                    ))
                } */}
            </Select>
        </Box>
    );
}
