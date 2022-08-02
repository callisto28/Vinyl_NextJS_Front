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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:image" content="https://unsplash.com/photos/zKT64MtVKQ0" />
        <meta property="og:url" content="https://vinyl-next-js-front.vercel.app/bonplan" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="vinylTouch" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
      </Head>
     
        <Layout>         
          <Navbar />
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
           {/* eslint-disable-next-line react/no-unescaped-entities */}
          
          
          <Footer />
        </Layout>
     
    </div>


  )

}
export default MyApp
