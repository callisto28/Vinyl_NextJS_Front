import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>

  )

}
export default MyApp
