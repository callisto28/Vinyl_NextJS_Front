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

      <div className="flex lg:flex-row lg:justify-evenly sm:flex-col sm:items-center sm:content-evenly">


        <Link href="/accueil"><h1><a className="text-white font-chelsea lg:text-7xl sm:text-5xl hover:text-yellow-300"> Welcome to VinylTouch!</a></h1></Link>

      </div>
    </>
  )
}

export default Home
