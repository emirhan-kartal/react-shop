import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { MenuList } from "@mui/material";
import useOutsideClick from "../hooks/useOutsideClick";

interface MenuOrderingProps {
    setOpen: React.Dispatch<React.SetStateAction<number>>;
    open: boolean;
    setOrdering: React.Dispatch<React.SetStateAction<number>>;
    ordering: number;
}

export default function MenuOrdering({
    setOpen,
    open,
    setOrdering,
    ordering,
}: MenuOrderingProps) {
    const ref = useOutsideClick(() => setOpen(-1), open);

    /*     function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`,
        };
    } */
    const menuItemTexts = ["Lowest Price", "Highest Price", "Newest", "Oldest"];

    return open ? (
        <MenuList
            component={"div"}
            ref={ref}
            sx={{
                width: "100%",
                bottom: 0,
                position: "absolute",
                bgcolor: "white",
            }}
            onClick={() => console.log("test")}
        >
            {menuItemTexts.map((text, index) => (
                <MenuItem
                    onClick={() => {
                        if (ordering === index + 1) {
                            setOrdering(0);
                        } else setOrdering(index + 1);
                        setOpen(-1);
                    }}
                    sx={{
                        bgcolor:
                            ordering === index + 1 ? "primary.light" : "white",
                        "&:hover": {
                            bgcolor:
                                ordering === index + 1 ? "primary.light" : "",
                        },
                    }}
                >
                    <ListItemText>{text}</ListItemText>
                    {ordering === index + 1 && (
                        <Typography
                            sx={{
                                color: "lightgray",
                                fontWeight: "bold",
                            }}
                        >
                            ✓
                        </Typography>
                    )}
                </MenuItem>
            ))}
        </MenuList>
    ) : null;
}
