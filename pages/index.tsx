import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">VinylTouch!</a>
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <Card link={"/articles"} texteCard={"Retrouvez toute l'actualité du moment."} titleCard={`De l'actu`} />
          <Card link={"/bonplan"} texteCard={"Retrouvez les bons plans des disquaires!"} titleCard={`Des Bons plans`} />
          <Card link={"/frenchTouch"} texteCard={"Retrouvez nos Youtubeurs Français."} titleCard={`La FrenchTouch`} />
          <Card link={"/"} texteCard={"Ce morceaux me dit quelque chose!"} titleCard={`Musique`} />
        </div>
      </div>
    </div>
  )
}

export default Home
