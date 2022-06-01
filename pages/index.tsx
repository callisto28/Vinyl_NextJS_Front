import { Lexer } from 'graphql'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} >
      <Head>
        <title>VinylTouch</title>
        <meta name="description" content="Toute l'actualité du vinyle" />
        <link rel="icon" href="/callisto.png" />
      </Head>

      <div className=" flex flex-1 lg:flex-col sm:flex-wrap lg:content-center sm:content-around">
        <Link href="/accueil"><h1><a className="text-white font-chelsea text-7xl hover:text-yellow-300"> Welcome to VinylTouch!</a></h1></Link>
      </div>
    </div>
  )
}

export default Home
