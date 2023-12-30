import { Mail, NotificationsActive } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Typography } from "@mui/material"
import { CustomToolBar, IconsContainer } from "../mui-components/NavbarStyles"

export const Navbar = () => {
    return (
        <>
            <AppBar position='sticky'>
                <CustomToolBar>

                    {/* brand name */}
                    <Typography variant='h5'>Real Time Chat App...</Typography>


                    {/* icons */}
                    <IconsContainer >
                        <Badge badgeContent={1} color='error'>
                            <Mail />
                        </Badge>

                        <Badge badgeContent={4} color='error'>
                            <NotificationsActive />
                        </Badge>

                        <Avatar
                            sx={{
                                width: 35,
                                height: 35,
                            }}
                            src=''
                        />
                    </IconsContainer>

                </CustomToolBar>
            </AppBar>
        </>
    )
}