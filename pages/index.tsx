import { Lexer } from 'graphql'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>VinylTouch</title>
        <meta name="description" content="Toute l'actualité du vinyle" />
        <link rel="icon" href="/callisto.png" />
      </Head>

      <div className="container mx-auto px-10 mb-8 flex flex-1 lg:flex-col sm:flex-wrap lg:content-center sm:content-around sm:text-center">


        <Link href="/accueil"><h1><a className="text-white font-chelsea text-7xl hover:text-yellow-300"> Welcome to VinylTouch!</a></h1></Link>

      </div>
    </div>
  )
}

export default Home
