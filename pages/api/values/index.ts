import { getAccessToken, withApiAuthRequired} from "@auth0/nextjs-auth0"
import ValueClient from "../../../clients/ValueClient"

export default withApiAuthRequired(async function(req, res) {
    try {
        const { accessToken } = await getAccessToken(req, res);

        const client = new ValueClient(accessToken);

        const values = await client.getValues();

        res.status(200).json(values);
    }
    catch (error: any){
        console.error(error);

        res.status(error.status || 500).end(error.message)
    }
})