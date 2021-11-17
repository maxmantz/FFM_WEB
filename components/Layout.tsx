import { NavBar } from "./NavBar"
import Head from "next/head"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import SideBar from "./SideBar"
import { drawerWidth } from './SideBar';

export default function Layout({ children }: any) {
    return (
        <div>
            <Head>
                <title>FFM-WEB</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <NavBar/>
            <Container>
                <SideBar/>
                <Grid container 
                    sx={{
                        width: "auto",
                        marginLeft: `${drawerWidth}px` 
                    }}
                    spacing={10}
                >
                    <Grid item xs={12} sm={12} md={12}
                        sx={{
                            marginTop: 10
                        }}
                    >
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}