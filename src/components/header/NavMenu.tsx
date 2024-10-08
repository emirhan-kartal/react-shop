import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
    const pages: { [key: string]: string } = {
        Men: "/products/men",
        Women: "/products/women",
        Kids: "/products/kids",
        Accessories: "/products/accessories",
        Sale: "/products/sale",
        New: "/products/new",
        Blog: "/blog",
    };
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pageLinks: any = {
        men: "/products/men",
        home: "/",
        about: "/about",
        services: "/services",
        contact: "/contact",
    };

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <Icon icon="material-symbols:menu" />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: "block", md: "none" },
                    }}
                >
                    {Object.keys(pages).map((page, index) => (
                        <MenuItem key={index} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                {pages[page]}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "flex-end",
                }}
            >
                {Object.keys(pages).map((page, index) => {

                    return (
                        <Link to={pages[page]}>
                            <Button
                                key={index}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                {page}
                            </Button>
                        </Link>
                    );
                })}
            </Box>
        </>
    );
}
