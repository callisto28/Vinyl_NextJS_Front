import { Lexer } from 'graphql'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VinylTouch</title>
        <meta name="description" content="Toute l'actualité du vinyle" />
        <link rel="icon" href="/callisto.png" />
      </Head>

      <div className="">


        <Link href="/accueil"><h1><a className="text-white font-chelsea text-7xl hover:text-yellow-300"> Welcome to VinylTouch!</a></h1></Link>

      </div>
    </>
  )
}

export default Home
