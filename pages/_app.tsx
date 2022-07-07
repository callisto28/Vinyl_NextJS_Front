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
        <meta property="og:image" content="https://unsplash.com/photos/zKT64MtVKQ0" />
        <meta property="og:url" content="https://vinyl-next-js-front.vercel.app/bonplan" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="vinylTouch" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
      </Head>
      <AuthProvider>
        <Layout>
          {/* <div className='lg:z-50 sm:z-50 text-center'> */}
          <Navbar />
          {/* </div> */}

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
