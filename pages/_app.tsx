import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ApolloProvider client={client}>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
          <Footer />
        </div>
      </ApolloProvider>
    </>
  )

}
export default MyApp
