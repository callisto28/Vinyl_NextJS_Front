import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className="back bg-background bg-cover bg-center bg-no-repeat opacity-0.2 flex flex-col justify-between h-screen">
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </div>
  )

}
export default MyApp
