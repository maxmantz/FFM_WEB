import React, { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from "@mui/material/Grid";
import { getSquad } from "../../components/api/Requests";
import PlayersList from "../../components/players/PlayersList";

interface Player {
    id: number,
    firstName: string,
    lastName: string,
    name: string,
    birth: {
        date: string,
        country: string,
        place: string
    },
    age: number,
    nationality: string,
    height: string,
    weight: string,
    injured: boolean,
    photo: string
}

const teamIds: any = {
    "2020": {
        "78": [ "157", "159", "160", "161", "162", "163", "164", "165", "167", "168", "169", "170", "172", "173", "174", "182", "188", "192" ],
        "61": [ "80" ],
        "39": [ "33" ]
    },
    "2021": {
        "78": [ "157" ],
        "61": [ "80" ],
        "39": [ "39" ]
    }
}

const teamSelection = () => {
    const [ league, setLeague ] = useState("");
    const [ season, setSeason ] = useState("");
    const [ players, setPlayers ] = useState<Array<Player>>([]);
 
    const handleSetLeague = (event: any) => {
        setLeague(event.target.value);
    }

    const handleSetSeason = (event: any) => {
        setSeason(event.target.value);
    }

    useEffect(() => {
        let players: any = [];

        if (league != "" && season != ""){

            teamIds[season][league].map((team: any) => {

                getSquad(league, season, team).then(result => {
                    result.map((squad: any) => {

                        JSON.parse(squad).response.map((player: any) => {
                            players.push(player.player);
                        })
                        setPlayers(players);
                    });
                })
            })
        }

        
    }, [ league, season ]);

    console.log(players); 

    return (
        <div>
            <Grid container
                spacing={25}
            >
                <Grid item>
                    <Box
                        sx={{
                            border: "2px solid darkslategrey",
                            width: 220,
                            height: 200,
                            textAlign: "center",
                            paddingTop: 2
                        }}
                    >
                        <FormControl component="fieldset">
                            <FormLabel component="legend">League</FormLabel>
                            <RadioGroup
                                aria-label="League"
                                // defaultValue="     "
                                name="league-buttons"
                                value={league}
                                onChange={handleSetLeague}
                            >
                                <FormControlLabel value="78" control={<Radio/>} label="1. Bundesliga"/>
                                <FormControlLabel value="61" control={<Radio/>} label="Ligue 1"/>
                                <FormControlLabel value="39" control={<Radio/>} label="Premier League"/>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            border: "2px solid darkslategrey",
                            width: 220,
                            height: 200,
                            textAlign: "center",
                            paddingTop: 2
                        }}
                    >
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Season</FormLabel>
                            <RadioGroup
                                aria-label="Season"
                                // defaultValue="     "
                                name="season-buttons"
                                value={season}
                                onChange={handleSetSeason}
                            >
                                <FormControlLabel value="2020" control={<Radio/>} label="2020/21"/>
                                <FormControlLabel value="2021" control={<Radio/>} label="2021/22"/>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            {players && players.map(player => (
               <h1>{player.name}</h1> 
            ))}
        </div>
    )
}

export default teamSelection;