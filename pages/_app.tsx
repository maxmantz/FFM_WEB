import '../styles/globals.css'
import "@mui/material"
import { UserProvider } from '@auth0/nextjs-auth0'
import Layout from "../components/layout/Layout"
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  ) 
}
export default MyApp
