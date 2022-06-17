import { gql } from '@apollo/client'
import { Lexer } from 'graphql'
import type { NextPage } from 'next'
import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'
import client from '../apollo-client'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import WidgetArt from '../components/WidgetArt'
import { WidgetPostVinyl, WidgetPostDesk, WidgetPostMaterial } from '../components/WidgetPost'


const Home: NextPage = ({ articleRec, plansRec, materialsRec, desksRec }: any) => {

  const lastArticles = articleRec.slice(0, 3);
  const lastPlan = plansRec.slice(0, 3);
  console.log(lastPlan, 'lastPlan');
  const lastMaterial = materialsRec.slice(0, 3);
  const lastDesk = desksRec.slice(0, 3);
  return (

    <div className='mx-auto'>

      <Head>
        <title>VinylTouch</title>
        <meta name="description" content="Toute l'actualité du vinyle" />
        <link rel="icon" href="/callisto.png" />
      </Head>

      {/* <Layout pages="Acceuil Vinyl"> */}
      <div className="grid overflow-hidden grid-cols-2 grid-rows-3 lg:gap-2">
        <div className="box row-start-1 row-span-5 col-start-1 col-span-1 mt-48 mx-48 ">
          <h1 className=' mx-28 text-left text-3xl font-extrabold font-philosopher text-black'>Toute l’actualité du vinyle, en quelques clics, des articles,
            <span> les sorties vinyles et bien plus encore...</span>
          </h1>
          <h2 className='mt-2 mx-36 text-left text-3xl font-extrabold font-philosopher text-black'>
            Sans oublier notre section spécialement destinée à nos youtubeurs Français.
          </h2>
        </div>


        <div className='boxb lg:row-start-3 lg:row-span-3 lg:col-start-1 lg:col-span-2 z-10 mb-48 '>
          <div className='flex flex-row justify-evenly'>
            <div className='w-auto'>
              <WidgetArt articles1={lastArticles} />
            </div>
            <div>
              <WidgetPostVinyl vinyls={lastPlan} />
            </div>
            <div>
              <WidgetPostMaterial material1={lastMaterial} />
            </div>
            <div>
              <WidgetPostDesk desk1={lastDesk} />
            </div>
          </div>
        </div>


        <div className='box  ml-128'>
          <Image src="/background.png" alt="vinyle" width={750} height={750} className="" />
        </div>





      </div>
      {/* </Layout> */}

    </div>
  )
}

export default Home


export async function getStaticProps() {
  const recentArticles = (await client.query({
    query: gql`
      query Article {                
              Article  {
                  _id
                  image
                  title
                  subtitle
                  createdAt
                  }
              }
          
      `
  })).data.Article;

  const recentVinyl = (await client.query({
    query: gql`
      query getPlan {
          getVinylFeatured {
              _id
              author
              createdAt
              title
              description
              image
              referral_url
              priceEur
              seller
              featured
          }

          }
      `
  })).data.getVinylFeatured;

  const recentMaterial = (await client.query({

    query: gql`
      query getPlan {
          getMaterialFeatured {
              _id
              author
              createdAt
              title
              description
              image
              referral_url
              price
              seller
              featured
          }

          }
      `
  })).data.getMaterialFeatured;


  const recentDesk = (await client.query({
    query: gql`
      query getPlan {
          getDeskFeatured {
              _id
              author
              createdAt
              title
              description
              image
              referral_url
              price
              seller
              featured
          }

          }
      `
  })).data.getDeskFeatured;


  return {
    props: {
      articleRec: recentArticles,
      plansRec: recentVinyl,
      materialsRec: recentMaterial,
      desksRec: recentDesk
    }
  }
}