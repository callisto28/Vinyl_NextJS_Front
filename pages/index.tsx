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
      <div className="flex justify-center">
        <Link href="/accueil"><h1 className='[text-shadow:0_4px_1px_#B625E4]'><a className="text-white cursor-pointer font-chelsea lg:text-7xl sm:text-5xl hover:text-purple-600 hover:[text-shadow:0_4px_2px_#FFFFFF] transition-color duration-500 delay-200 "> Bienvenue sur VinylTouch!</a></h1></Link>
      </div>
    </>
  )
}

export default Home
