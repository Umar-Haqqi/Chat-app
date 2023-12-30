"use client"

import { Box, Toolbar } from "@mui/material";
import {styled} from "@mui/system";

const CustomToolBar = styled(Toolbar)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
}))

const IconsContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
})


export { CustomToolBar, IconsContainer }