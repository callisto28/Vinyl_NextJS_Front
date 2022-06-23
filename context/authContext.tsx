import { createContext, useContext, useEffect, useState } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client'

const authContext = createContext<any>({})

export function AuthProvider({ children }) {
    const auth = useProvideAuth()
    return (
        <authContext.Provider value={auth}>
            <ApolloProvider client={auth.createApolloClient()}>
                {children}
            </ApolloProvider>
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext)

}
function useProvideAuth() {
    const [authToken, setAuthToken] = useState(null)

    const isSignedIn = () => {
        if (authToken) {
            return true
        } else {
            return false
        }
    }

    const getAuthHeaders = () => {
        if (!authToken) return null

        return {
            authorization: `Bearer ${authToken}`,
        }
    }
    const createApolloClient = () => {
        const link = new HttpLink({
            uri: 'http://nestvinyl.herokuapp.com/graphql',
            headers: getAuthHeaders(),
        })

        return new ApolloClient({
            link,
            cache: new InMemoryCache(),
        })
    }

    const signIn = async ({ body }) => {
        const client = createApolloClient()
        const LoginMutation = gql`
         mutation Login($body: LoginUserInput!) {
  login(body: $body) {
    access_token
  }
}
        `

        const result = await client.mutate({
            mutation: LoginMutation,
            variables: {
                body: {
                    email: "",
                    password: "",
                }
            },
        })

        console.log(result)

        if (result?.data?.login?.access_token) {
            setAuthToken(result.data.login.access_token)
        }
    }

    const signOut = () => {
        setAuthToken(null)
    }

    return {
        setAuthToken,
        isSignedIn,
        signIn,
        signOut,
        createApolloClient,
    }
}




