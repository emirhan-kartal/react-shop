import {
    Tooltip,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Typography,
    Box,
    Card,
} from "@mui/material";
import React, { useState } from "react";

export default function UserMenu() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const settings = ["Profile", "Account", "Dashboard", "Logout"];

    return (
        <>
            {" "}
            <Tooltip title="Open Settings">
                <Box
                    sx={{
                        display: "flex",
                        border: { xs: "none", md: "1px solid lightblue" },
                        borderRadius: "10%",
                        px: { xs: 0, md: 1 },
                        width: { xs: "28px", md: "100px" },
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    onClick={handleOpenUserMenu}
                >
                    <IconButton>
                        <Avatar
                            alt="Remy Sharp"
                            sx={{ width: 28, height: 28 }}
                            src="/static/images/avatar/2.jpg"
                        />
                    </IconButton>
                    <Typography sx={{ display: { xs: "none", md: "block" } }}>
                        User
                    </Typography>
                </Box>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
