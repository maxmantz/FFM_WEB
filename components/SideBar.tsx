import { Drawer, Box, Link, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import Logo from "./Logo";
import { navBarHeight } from "./NavBar";

export const drawerWidth = 170;
const options = [{ name: "Teams", route: "/teams"}, { name: "Option 2", route: "/teams"}, { name: "Option 3", route: "/teams"}];

export default function SideBar() {
    return (
        <Box
            sx={{ 
                display: "flex",
            }}
        >
            <Drawer
                sx={{ 
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box"
                    }
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    <Logo/>
                    <Divider/>
                    {options.map(o => (
                        <ListItem 
                            button
                            component={Link} href={o.route}
                            key={o.name}
                        >
                            <ListItemText primary={o.name}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}