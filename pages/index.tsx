import { gql } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import client from '../apollo-client'
import WidgetArt from '../components/WidgetArt'
import { WidgetPostVinyl, WidgetPostDesk, WidgetPostMaterial } from '../components/WidgetPost'


const Home: NextPage = ({ articleRec, plansRec, materialsRec, desksRec }: any) => {


  const imgRandom = [
    'IMG_bg1.jpg',
    'IMG_bg2.jpg',

  ]

  const lastArticles = articleRec.slice(0, 3);
  const lastPlan = plansRec.slice(0, 3);

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
      <div className="lg:grid overflow-hidden lg:grid-cols-2 lg:grid-rows-3 lg:gap-2 sm:grid sm:grid-col-1">
        <div className="box lg:row-start-1 lg:row-span-5 lg:col-start-1 col-span-1 sm:flex sm:flex-col lg:mt-48 lg:mx-48 sm:mt-5 sm:text-center ">
          <h1 className='lg:mt-2 lg:mx-36 lg:text-left lg:text-xxxl sm:mt-1 sm:mx-16 sm:text-base sm:text-center font-extrabold font-philosopher z-10 text-black'>Toute l’actualité du vinyle, en quelques clics, des articles,
            <span> les sorties vinyles et bien plus encore...</span>


          </h1>   <h2 className='lg:mt-2 lg:ml-44 lg:text-left lg:text-xxxl sm:mt-1 sm:mx-16 sm:text-base sm:text-center font-extrabold font-philosopher z-10 text-black'>
            Sans oublier notre section spécialement destinée à nos youtubeurs Français.
          </h2>
        </div>


        <div className='boxb lg:row-start-3 lg:row-span-3 lg:col-start-1 lg:col-span-2 sm:flex sm:flex-col sm:items:center z-50 mb-48 lg:h-20 sm:h-auto '>
          <div className='lg:flex lg:flex-row lg:justify-evenly sm:flex sm:flex-col sm:items-center sm:justify-around'>
            <div className='w-auto sm:my-1'>
              <WidgetArt articles1={lastArticles} className="z-10" />
            </div>
            <div className='w-auto sm:my-1'>
              <WidgetPostVinyl vinyls={lastPlan} />
            </div>
            <div className='w-auto sm:my-1'>
              <WidgetPostMaterial material1={lastMaterial} />
            </div>
            <div className='w-auto sm:my-1'>
              <WidgetPostDesk desk1={lastDesk} />
            </div>
          </div>
        </div>


        <div className='box lg:ml-128 lg:relative lg:items-baseline sm:fixed sm:flex sm:items-end sm:ml-2'>
          <Image src={`/IMG_bg${Math.round((Math.random() * 1) + 1)}.png`} alt="vinyle" width={650} height={650} className="" />
        </div>





      </div>


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