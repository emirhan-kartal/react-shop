import { AppBar, Dialog, IconButton, Slide, Typography } from "@mui/material";
import React, { useState } from "react";
import FilteringOption from "./FilteringOption";
import { TransitionProps } from "@mui/material/transitions";
import { Icon } from "@iconify/react/dist/iconify.js";
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function MenuFiltering({ setOpen, open }) {
    const [expandedAccordion, setExpandedAccordion] = useState<number>(-1);

    const filterOptions = ["Advantages","Color", "Size", "Price", "Brand"];

    return (
        <Dialog fullScreen open={open} TransitionComponent={Transition}>
            <AppBar
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: 0,
                    height: 50,
                }}
            >
                <IconButton
                    sx={{
                        fontSize: 80,
                        width: 48,
                        height: 48,
                        color: "white",
                        fontWeight: "bold",
                    }}
                    onClick={() => setOpen(-1)}
                >
                    <Icon icon="ic:round-close" />
                </IconButton>
                <Typography
                    sx={{
                        ml: 0,
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "center",
                        flexGrow: 1,
                    }}
                >
                    Filter
                </Typography>
                <div style={{ width: 48, padding: 0 }} />
            </AppBar>

            <Typography></Typography>

            {filterOptions.map((option, index) => (
                <FilteringOption
                    filterName={option}
                    optionsMarked={0}
                    expandedAccordion={expandedAccordion}
                    value={index}
                    key={index}
                    onClick={() => {
                        if (expandedAccordion === index) {
                            setExpandedAccordion(-1);
                            return;
                        }
                        setExpandedAccordion(index);
                    }}
                />
            ))}
        </Dialog>
    );
}
