import { useUser } from "@auth0/nextjs-auth0"
import Image from "next/image"
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

const User = () => {
    const { user, isLoading } = useUser();

    if (isLoading) return <h1>L O A D I N G...</h1>

    if (user && !isLoading){
        
        return (
            <Card>
                <CardHeader
                    title={user.name}
                />
                <CardContent>
                    <Image src={user.picture || ""} width="100" height="100"></Image>
                </CardContent>
            </Card>    
        )
    }
}

export default User;