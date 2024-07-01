import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Checkbox,
    List,
    ListItem,
    Slider,
    Typography,
    styled,
} from "@mui/material";
import React, {  useEffect, useState } from "react";
import config from "../Config";
import { useParams, useSearchParams } from "react-router-dom";

interface FilteringOptionProps {
    filterName: string;
    optionsMarked: number;
    value: number;
    expandedAccordion: number; //999 = ALL
    onClick: (e) => void;
}

export default function FilteringOption({
    filterName,
    optionsMarked,
    value,
    expandedAccordion,
    onClick,
}: FilteringOptionProps) {
    const [param, setParam] = useSearchParams();

    const [price, setPrice] = useState<number[] | null>(null);

    const StyledListItem = styled(ListItem)({ p: 0, m: 0 });
    const StyledCheckBox = styled(Checkbox)({ p: 0, m: 0 });
    const routerParams = useParams();

    const filterNameOptions = (filterName) => {
        const options: string[] = [];
        config.products
            .filter(
                (product) =>
                    routerParams.category ===
                    product.category.toLocaleLowerCase()
            )
            .forEach((product) => {
                if (
                    product.specialFilterProps.hasOwnProperty(filterName) &&
                    !options.includes(product.specialFilterProps[filterName])
                ) {
                    options.push(product.specialFilterProps[filterName]);
                }
            });
        return options;
    };
    const filterDiscountOptions = () => {
        const options: string[] = [];
        config.products
            .filter(
                (product) =>
                    routerParams.category ===
                    product.category.toLocaleLowerCase()
            )
            .forEach((product) => {
                if (product.onDiscount) {
                    options.push("On Discount");
                    return options;
                }
            });
        return options;
    };

    const handleCheckboxChange = (e, option: string) => {
        for (let key of param.keys()) {
            console.log(key + ":" + param.get(key));
        }
        const filterNameLowCase = filterName.toLocaleLowerCase();
        const optionParamLength = param.getAll(filterNameLowCase).length;
        const optionParamString = param
            .getAll(filterNameLowCase)
            .map((temp, index) => {
                if (index === 0) {
                    return temp;
                } else {
                    return "," + temp;
                }
            });

        let dataToModify = param.get(filterNameLowCase);

        if (e.target.checked) {
            setParam((prev) => {
                console.log(
                    "?" +
                        filterNameLowCase +
                        "=" +
                        (optionParamLength === 0
                            ? option
                            : optionParamString + "," + option)
                );

                let seperatedDatas = dataToModify?.split(",");

                if (seperatedDatas === undefined) {
                    param.set(filterNameLowCase, option);
                } else {
                    param.set(filterNameLowCase, dataToModify + "," + option);
                }
                return param;
            });
        } else {
            setParam(() => {
                console.log(dataToModify);
                let dataSplitted: string[] | undefined =
                    dataToModify?.split(",");
                console.log(dataSplitted);
                let finalData = dataToModify
                    ?.replace("," + option, "")
                    .replace(option, "");
                console.log(finalData);

                if (finalData !== "") param.set(filterNameLowCase, finalData!);
                else param.delete(filterNameLowCase);

                return param;
            });

            /* setFilter((prev) => ({
                ...prev,
                [filterNameLowCase]: prev[filterNameLowCase].filter(
                    (el) => el !== option
                ),
            })); */
        }
    };

    const [min, max]: number[] = (() => {
        //gets the min and max price of the products, adjusts the slider according to it
        let min = Infinity;
        let max = 0;
        config.products.forEach((product) => {
            if (product.price < min) {
                min = product.price;
            }
            if (product.price > max) {
                max = product.price;
            }
        });
        return [min, max];
    })();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (price !== null) {
                if (price[0] === min && price[1] === max) {
                    param.delete("price");
                } else param.set("price", `${price[0]},${price[1]}`);
            }
            setParam(param);
        }, 100);

        return () => clearTimeout(timeout);
    }, [price]);

    return (
        <>
            <Accordion
                expanded={
                    expandedAccordion === value || expandedAccordion === 999
                }
                onClick={onClick}
                disableGutters
                sx={{ overflowY: { lg: "scroll" }, maxHeight: "60vh" }}
            >
                <AccordionSummary
                    id={"filter-" + filterName}
                    aria-controls={"filter-" + filterName}
                    expandIcon={
                        <Box
                            sx={{ color: "black", fontSize: 28 }}
                            component="div"
                        >
                            <Icon icon="gridicons:dropdown" />
                        </Box>
                    }
                >
                    <Typography>{filterName}</Typography>
                    <Typography>
                        {optionsMarked > 0 && filterName !== "Price"
                            ? `(${optionsMarked})`
                            : ""}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ p: 0 }}>
                        {param.get(filterName.toLocaleLowerCase()) !==
                            undefined &&
                        param.get(filterName.toLocaleLowerCase()) !== null ? (
                            <Typography
                                color={"orange"}
                                sx={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                    textAlign: "start",
                                }}
                                onClick={() => {
                                    param.delete(
                                        filterName.toLocaleLowerCase()
                                    );
                                    if (filterName === "Price") setPrice(null);
                                    console.log(filterName);
                                    setParam(param);
                                }}
                            >
                                Clear All
                            </Typography>
                        ) : (
                            ""
                        )}
                        <List disablePadding>
                            {filterName === "Price" ? (
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Slider
                                        defaultValue={[0, max]}
                                        valueLabelDisplay="on"
                                        max={max}
                                        min={min}
                                        sx={{ width: "80%", m: 2 }}
                                        value={
                                            price === null ? [min, max] : price
                                        }
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                        onChange={(e, value) => {
                                            setPrice(value as number[]);
                                        }}
                                    />
                                    <Typography>
                                        {price
                                            ? "Price: " +
                                              price[0] +
                                              "$ - " +
                                              price[1] +
                                              "$"
                                            : "Price: " +
                                              min +
                                              "$ - " +
                                              max +
                                              "$"}
                                    </Typography>
                                </Box>
                            ) : (
                                (filterName === "Advantages"
                                    ? filterDiscountOptions()
                                    : filterNameOptions(
                                          filterName.toLocaleLowerCase()
                                      )
                                ).map((option, index) => (
                                    <StyledListItem
                                        disableGutters
                                        disablePadding
                                        key={index}
                                    >
                                        <StyledCheckBox
                                            onChange={(e) =>
                                                handleCheckboxChange(e, option)
                                            }
                                            onClick={(e) => e.stopPropagation()}
                                            checked={
                                                param.get(
                                                    filterName.toLocaleLowerCase()
                                                ) !== undefined &&
                                                param
                                                    .get(
                                                        filterName.toLocaleLowerCase()
                                                    )
                                                    ?.includes(option)
                                                    ? true
                                                    : false
                                            }
                                        />

                                        <Typography>{option}</Typography>
                                    </StyledListItem>
                                ))
                            )}
                        </List>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
