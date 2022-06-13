import { gql } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import client from '../apollo-client'
import WidgetArt from '../components/WidgetArt'
import WidgetPostVinyl, { WidgetPostDesk, WidgetPostMaterial } from '../components/WidgetPost'




const Home: NextPage = ({ articles, plans, materials, desks }: any) => {



    return (
        <div className="" >
            <Head>
                <title>VinylTouch | accueil</title>
                <meta name="description" content="Toute l'actualité du vinyle" />
                <link rel="icon" href="/callisto.png" />
            </Head>
            <div className="lg:w-auto sm-w-auto sm:mx-4 lg:grid lg:grid-cols-2 lg:gap-2 lg:items-center lg:justify-items-center sm:flex sm:flex-col">
                <div className="lg:w-2/3 sm:w-full h-auto ">
                    <WidgetArt articles={articles} />
                </div>
                <div className='lg:w-1/3 sm:w-full w-1/2 lg:grid overflow-hidden lg:grid-lines lg:grid-cols-2 lg:grid-rows-7 min-w-full min-h-full sm:grid-cols-7 gap-2'>
                    <div className='w-auto'>
                        <WidgetPostVinyl plans={plans} />

                    </div>
                    <div>
                        <WidgetPostMaterial material={materials} />

                    </div>
                    <div>
                        <WidgetPostDesk desk={desks} />

                    </div>
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
            articles: recentArticles,
            plans: recentVinyl,
            materials: recentMaterial,
            desks: recentDesk
        }
    }
}

