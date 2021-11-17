import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: "auto",
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function TeamCard({ team, venue, league, season }: any ){
    const [ expanded, setExpanded ] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Paper 
            elevation={12}
            sx={{
                width: 280,
                height: "auto"
            }}
        >
            <Card 
                sx={{
                    width: 280,
                    height: "auto"
                }}
            >
                <CardHeader
                    avatar={
                        <Image src={team.logo} width="70" height="70"/>
                    }
                    title={
                        <Typography fontSize="1.3rem">
                            {team.name}
                        </Typography>
                    }
                    subheader={team.id}
                />
                <CardContent>
                    <Typography 
                        textAlign="center"
                        fontSize="1rem"
                    >
                        Founded: {team.founded}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Link href="/squad/[id]" as={`/squad/${league}-${season}-${team.id}`}>
                        <Button size="small">View Squad</Button>
                    </Link>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show venue"
                    >
                        <ExpandMoreIcon/>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography 
                            textAlign="center"
                            fontSize="1rem"
                        >
                            {venue.name} <br/>
                            {venue.city} <br/>
                        </Typography>
                        <Divider/>
                        <Box
                           sx={{
                               width: "auto",
                               height: 140,
                               textAlign: "center",
                               paddingTop: 1,
                               border: "2px dashed black"
                           }} 
                        >
                            <Image src={venue.image} width="120" height="120"/>
                        </Box>
                        <Divider/>
                        <Typography
                            textAlign="center"
                            fontSize="1.3rem"
                        >
                            Zuschauer: <br/>
                            {venue.capacity}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Paper>
    )
}
