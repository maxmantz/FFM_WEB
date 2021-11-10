import { promises as fs } from "fs"
import path from "path";

const baseUrl = "https://v3.football.api-sports.io/";

const headers = {
    "x-apisports-key": "a3a80245cddcf074947be5c6ac43484f" // in ".env.local" auslagern -- funktioniert nicht
}

export async function getTeamsVenuesAsProps(league: string, season: string) { 
  const teamsDirectory = path.join(process.cwd(), "public/JsonFiles/TeamsVenues");
  const fileNames = await fs.readdir(teamsDirectory);

  const teamsVenues = fileNames.filter(file => file.includes(`L${league}`)).filter(file => file.includes(`S${season}`)).map(async (fileName) => {
    const filePath = path.join(teamsDirectory, fileName);
    const fileContents = await fs.readFile(filePath, "utf8");

    const data = JSON.parse(fileContents);

    return data.response;
  });

  return {
    props: {
      teamsVenues: await Promise.all(teamsVenues)
    }
  }
}

export async function getSquadAsProps(league: string, season: string, team: string) {
    const playersDirectory = path.join(process.cwd(), "public/JsonFiles/Players");
    const fileNames = await fs.readdir(playersDirectory);

    const squad = fileNames.filter(file => file.includes(`S${season}`)).filter(file => file.includes(`T${team}`)).map(async (fileName) => {
        const filePath = path.join(playersDirectory, fileName);
        const fileContents = await fs.readFile(filePath, "utf8");

        const data = JSON.parse(fileContents);

        return data.response;
    });

  return {
      squad: await Promise.all(squad)
  }
  
}

