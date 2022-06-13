import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Navbar />

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer />
    </Layout>

  )

}
export default MyApp
