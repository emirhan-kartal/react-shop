import React, { useState } from "react";
import FilteringOption from "./FilteringOption";
import { Box } from "@mui/material";

export default function FilteringDesktop() {
    const filterOptions = ["Advantages","Color", "Size", "Price", "Brand"];
    const [closedAccordions, setClosedAccordions] = useState<number[]>([]);
    return (
        <Box>

            {filterOptions.map((option, index) => (
                <FilteringOption
                    filterName={option}
                    optionsMarked={0}
                    expandedAccordion={999}
                    value={index}
                    key={index}
                    onClick={() => {
                        if (closedAccordions.includes(index)) {
                            setClosedAccordions((prev) =>
                                prev.filter((val) => val !== index)
                            );
                            return;
                        }
                        setClosedAccordions((prev) => [...prev, index]);
                    }}
                />
            ))}
        </Box>
    );
}
