import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Box } from "@mui/material";

interface ReactIconProps {
    actionToCall: (e: React.MouseEvent) => void;
    iconName: string;
    sx?: object;
}

export function ReactIcon({ actionToCall, iconName, sx }: ReactIconProps) {
    return (
        <Box
            sx={{
                cursor: "pointer",
                mx: "auto",
                padding: 0.1,
                ...sx,
            }}
            onClick={actionToCall}
        >
            <Icon icon={iconName} fontSize={16} />
        </Box>
    );
}
