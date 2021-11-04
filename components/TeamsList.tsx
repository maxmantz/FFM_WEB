import Container from "@mui/material/Container"
import Image from "next/dist/client/image";
import Grid from "@mui/material/Grid"
import TeamCard from "./TeamCard"

export default function TeamsList(teamsVenues: any) {
    console.log(teamsVenues);
    return (
        <Container>
            <Grid container 
                spacing={5}
            >
                {teamsVenues.teamsVenues[0].map((tv: any) => (
                    <Grid item 
                        xs={12} sm={6} md={4}
                        key={tv.id}
                    >
                        <TeamCard team={tv.team}></TeamCard>
                    </Grid> 
                ))}
            </Grid>
        </Container>
    )
}