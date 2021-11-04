import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";

export default function TeamCard({team}: any){
    const league = 78;
    const season = 2020;

    return (
        <Paper 
            elevation={12}
            sx={{
                width: 250,
                height: "auto"
            }}
        >
            <Card 
                sx={{
                    textAlign: "center",
                }}
            >
                <CardHeader 
                    title={team.name}
                    subheader={team.id}
                />
                <CardContent>
                    <Image src={team.logo} width="100" height="100"/>
                </CardContent>
                <CardActions>
                    <Link href="/squad/[id]" as={`/squad/${league}-${season}-${team.id}`}>
                        <Button size="small">View Squad</Button>
                    </Link>
                </CardActions>
            </Card>
        </Paper>
    )
}
