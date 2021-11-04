import type { NextPage } from 'next'
import { useUser } from "@auth0/nextjs-auth0"

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  
  if (isLoading) return (<h1>L O A D I N G</h1>);

  if (!user) return (<h1>Bitte Loggen Sie sich ein</h1>);

  return (
    <div>
      <h1>Willkommen bei FFM-WEB!</h1>
      <p>Was möchten Sie tun, {user.name}</p>
    </div>
  );
}

export default Home;