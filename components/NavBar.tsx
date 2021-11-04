import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useUser } from "@auth0/nextjs-auth0"
import { drawerWidth } from './SideBar';

export const navBarHeight = 65; 

export const NavBar = () => {
    const { user } = useUser();

    return (
        <Box> 
            <AppBar 
                position="static"
                sx={{ 
                    height: navBarHeight,
                    width: "auto",
                    marginLeft: `${drawerWidth}px`  
                }}
            >
                <Toolbar>
                    <Typography 
                        sx={{
                            flexGrow: 1
                        }}
                    >
                        <Button 
                            color="inherit"
                            href="/"
                        >
                            Home
                        </Button>
                    </Typography>
                    <Typography>
                        {!user && (
                            <Button 
                                color="inherit"
                                href="api/auth/login"
                            >
                                Login
                            </Button>
                        )}
                        
                        {user && (
                            <>
                                <Button
                                    color="inherit"
                                    href="user"
                                >
                                    Profile
                                </Button>
                                <Button 
                                    color="inherit"
                                    href="api/auth/logout"
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}




