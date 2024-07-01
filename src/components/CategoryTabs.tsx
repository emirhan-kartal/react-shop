import { Box, Tab, Tabs } from "@mui/material";
import config from "./Config";
import React from "react";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
interface CategoryContainerProps {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategoryContainer({
    category,
    setCategory,
}: CategoryContainerProps) {
    const handleChange = (
        event: React.FormEvent,
        newValue: string
    ) => {
        setCategory(newValue);
    };
    return (
        <Box
            display={"flex"}
            justifyContent={"space-around"}
            sx={{
                borderBottom: 1,
                borderColor: "divider",
                width: "100%",
                overflowX: "auto",
            }}
        >
            <Tabs
                value={category}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{ overflowX: "auto", display: "flex" }}
                scrollButtons={true}
                variant="scrollable"
                allowScrollButtonsMobile
            >
                <Tab
                    label="All"
                    value="all"
                    {...a11yProps(0)}
                    onClick={() => setCategory("all")}
                />
                {config.categories.map((category, index) => {
                    return (
                        <Tab
                            label={category}
                            value={category}
                            sx={{
                                fontSize: 10,
                                padding: 0,
                                margin: 0,
                            }}
                            {...a11yProps(index + 1)}
                            onClick={() => setCategory(category)}
                        />
                    );
                })}
            </Tabs>
        </Box>
    );
}
