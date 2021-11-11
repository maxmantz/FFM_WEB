import { Button, Box, Grid, InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import { useState } from "react";
import { getTeamsVenues } from "../../components/api/Requests";
import TeamsList from "../../components/teams/TeamsList";

const Teams = () => {
    const [ league, setLeague ] = useState("");
    const [ season, setSeason ] = useState("");
    const [ teamsVenues, setTeamsVenues ] = useState(null);

    const handleSetLeague = (event: any) => {
        setLeague(event.target.value);
    }

    const handleSetSeason = (event: any) => {
        setSeason(event.target.value);
    }

    async function handleShowTeams(){
        if (league != "" && season != ""){
            getTeamsVenues(league, season).then(result => {
                setTeamsVenues(result);
              });
        }
    }

    return (
        <div>
            <Grid container
                spacing={5}
            >
                <Grid item>
                    <Box sx={{ minWidth: 150 }}>
                        <FormControl fullWidth>
                            <InputLabel id="league-select-label">League</InputLabel>
                            <Select
                                labelId="league-select-label"
                                id="league-select"
                                value={league}
                                label="League"
                                onChange={handleSetLeague}
                            >
                                <MenuItem value={"78"}>1.Bundesliga</MenuItem>
                                <MenuItem value={"61"}>Ligue 1</MenuItem>
                                <MenuItem value={"39"}>Premier League</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item> 
                    <Box sx={{ minWidth: 150 }}>
                        <FormControl fullWidth>
                            <InputLabel id="season-select-label">Season</InputLabel>
                            <Select
                                labelId="season-select-label"
                                id="season-select"
                                value={season}
                                label="Season"
                                onChange={handleSetSeason}
                            >
                                <MenuItem value={"2021"}>2021/22</MenuItem>
                                <MenuItem value={"2020"}>2020/21</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>       
                </Grid>
                <Grid item>
                    <Button
                        onClick={handleShowTeams}
                    >
                        Show Teams
                    </Button>
                </Grid>
            </Grid>
            {teamsVenues && (
                <TeamsList teamsVenues={teamsVenues} league={league} season={season}/>
            )}
        </div>
    )
}

export default Teams;

// alle Props functions funktionieren nur auf pages !!!!!!
// export async function getStaticProps() {
//     return getTeamsVenuesAsProps("78", "2020");
// }

// teamsVenues aufspliten, eventuell später hilfreich
/*
    const teams = teamsVenues[0].map((tv: any) => tv.team);
    const venues = teamsVenues[0].map((tv: any) => tv.venue);
*/