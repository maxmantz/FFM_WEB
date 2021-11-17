import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import TeamCard from "./TeamCard"

export default function TeamsList({ teamsVenues, league, season }: any ) {
    return (
        <Container>
            <Grid container 
                spacing={5}
            >
                {JSON.parse(teamsVenues).response.map((tv: any) => (
                    <Grid item 
                        xs={12} sm={6} md={4}
                        key={tv.id}
                    >
                        <TeamCard team={tv.team} venue={tv.venue} league={league} season={season}></TeamCard>
                    </Grid> 
                ))}
            </Grid>
        </Container>
    )
}