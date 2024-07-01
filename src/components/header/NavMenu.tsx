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
    const pages = ["Men ", "Women", "Kids", "Accessories", "Sale", "New", "Blog"];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pageLinks:{[key:string]:string} = {
        Home: "/",
        About: "/about",
        Services: "/services",
        Contact: "/contact",
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
                    {pages.map((page, index) => (
                        <MenuItem key={index} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
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
                {pages.map((page, index) => (
                    <Link to={pageLinks[page]}>
                        <Button
                            key={index}
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                color: "white",
                                display: "block",
                            }}
                        >
                            {page}
                        </Button>
                    </Link>
                ))}
            </Box>
        </>
    );
}
