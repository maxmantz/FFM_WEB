import { getSquad } from "../../../components/api/Requests";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Squad = ({ squadArray }: any) => {
  console.log(squadArray);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{background: "lightgray"}}>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Nationality</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {squadArray && squadArray.map((squad: any) => JSON.parse(squad).response.map((s: any) => (
              <TableRow
                key={s.player.id}
              >
                <TableCell>
                  <Image src={s.player.photo} width="50" height="50"/>
                </TableCell>
                <TableCell>{s.player.name}</TableCell>
                <TableCell>{s.player.birth.date}</TableCell>
                <TableCell>{s.statistics[0].games.position}</TableCell>
                <TableCell>{s.player.nationality}</TableCell>
                <TableCell>
                  <Link href="/player/[id]" as={`/player/${s.statistics[0].league.id}-${s.statistics[0].league.season}-${s.statistics[0].team.id}-${s.player.id}`}>
                    <Button size="small">Statistics</Button>
                  </Link>
                </TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )
}

export default Squad;

export async function getServerSideProps(context: any) {
  const league = context.params.id.split("-")[0];
  const season = context.params.id.split("-")[1];
  const team = context.params.id.split("-")[2];

  const squadArray = await getSquad(league, season, team);

  return {
    props: {
      squadArray
    }
  }
}