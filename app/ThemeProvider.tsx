"use client"

import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { theme } from '../app/theme/theme'

export const ThemeProvider = ({ children }: any) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )
}