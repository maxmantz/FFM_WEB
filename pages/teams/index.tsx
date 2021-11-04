import { getTeamsVenuesAsProps } from "../../components/api/Requests";
import TeamsList from "../../components/TeamsList";

const Teams = ({teamsVenues}: any) => {
    //teamsVenues aufspliten, eventuell später hilfreich
    /*
    const teams = teamsVenues[0].map((tv: any) => tv.team);
    const venues = teamsVenues[0].map((tv: any) => tv.venue);

    console.log(teams)
    console.log(venues)
    */
    return (
        <div>
            <TeamsList teamsVenues={teamsVenues}/>
        </div>
    )
}

export default Teams;

// alle Props functions funktionieren nur auf pages !!!!!!
export async function getStaticProps() {
    return getTeamsVenuesAsProps(78, 2020);
}