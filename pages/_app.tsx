import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Head>
        <title>VinylTouch</title>
        <meta name="description" content="Toute l'actualité du vinyle" />
        <link rel="icon" href="/callisto.png" />
      </Head>
      <Layout>
        <Navbar />

        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
        <Footer />
      </Layout>
    </div>


  )

}
export default MyApp
