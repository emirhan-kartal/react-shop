import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useState } from "react";

import React from "react";

import { Outlet } from "react-router-dom";
import NavMenu from "./header/NavMenu";
import CartPopUp from "./header/CartPopUp";
import UserMenu from "./header/UserMenu";

const pages: String[] = ["Products", "Pricing", "Blog"];

function ResponsiveHeader() {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            REACT
                        </Typography>
                        <NavMenu />
                        <Typography //this is for the mobile view
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".2rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            REACT
                        </Typography>

                        <Box sx={{ display: "flex",gap:1}}>
                            <CartPopUp />

                            <UserMenu />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    );
}
export default ResponsiveHeader;
