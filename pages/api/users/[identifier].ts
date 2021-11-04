import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiHandler } from "next";
import UserClient, { User } from "../../../clients/UserClient"

export default withApiAuthRequired(async function (req,  res) {
    try {
        const { accessToken } = await getAccessToken(req, res);
        const { identifier } = req.query;

        const client = new UserClient(accessToken);
        const values = await client.getUserByIdentifier(identifier as string);
        res.status(200).json(values);
    } catch (error: any){
        res.status(error.status || 500).end(error.message);
    }
}) as NextApiHandler<User>;