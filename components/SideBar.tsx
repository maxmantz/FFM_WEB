import { Drawer, Box, Link, List, ListItem, ListItemText } from "@mui/material"
import Logo from "./Logo";

export const drawerWidth = 170;
const options = [{ name: "Teams", route: "/teams"}, { name: "Pick a Team", route: "/teamSelection"}, { name: "Option 3", route: "/teams"}];

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
                <Logo/>
                <List>
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