import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'
import { AuthProvider } from '../context/authContext'




function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Head>
        <title>VinylTouch</title>
        <meta name="description" content="Toute l'actualité du vinyle" />
        <link rel="icon" href="/callisto.png" />
      </Head>
      <AuthProvider>
        <Layout>
          <div className='lg:z-50 sm:z-50'>
            <Navbar />
          </div>

          <ApolloProvider client={client}>

            <Component {...pageProps} />

          </ApolloProvider>
          <Footer />
        </Layout>
      </AuthProvider>
    </div>


  )

}
export default MyApp
