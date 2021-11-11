process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"; // ignoriert "self-signed-certificate" error
const baseUrl = "https://localhost:44327/api/";

export async function getTeamsVenues(league: string, season: string) { 
  const response = await fetch(`${baseUrl}teams?league=${league}&season=${season}`);

  const data = await response.json()

  return data;
}

export async function getSquad(league: string, season: string, team: string) {
  let squadArray: any = [];

  let response = await fetch(`${baseUrl}players?league=${league}&season=${season}&team=${team}&page=1`);

  let data = await response.json();

  squadArray.push(data);

  const pageTotal = JSON.parse(data).paging.total;

  for (let page = 2; page <= pageTotal; page++){
    response = await fetch(`${baseUrl}players?league=${league}&season=${season}&team=${team}&page=${page}`);

    data = await response.json();

    squadArray.push(data);
  }

  console.log(squadArray)

  return squadArray;
}

