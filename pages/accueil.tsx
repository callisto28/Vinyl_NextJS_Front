import { gql } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import client from '../apollo-client'
import WidgetArt from '../components/WidgetArt'
import WidgetPostVinyl, { WidgetPostDesk, WidgetPostMaterial } from '../components/WidgetPost'
import WidgetPost from '../components/WidgetPost'



const Home: NextPage = ({ articles, plans, materials, desks }: any) => {

    console.log(plans, "plans home");
    console.log(materials, "materials home");
    console.log(desks, "desks home");

    return (
        <div className="" >
            <Head>
                <title>VinylTouch | accueil</title>
                <meta name="description" content="Toute l'actualité du vinyle" />
                <link rel="icon" href="/callisto.png" />
            </Head>
            <div className="">
                <div className="flex lg:flex-row lg:justify-evenly sm:flex-col sm:items-center sm:content-evenly">
                    <WidgetArt articles={articles} />
                    <div className='grid grid-row-2'>
                        <WidgetPostVinyl plans={plans} />
                        <WidgetPostMaterial material={materials} />
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
                price
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

    console.log(recentVinyl, "recentVinyl");
    console.log(recentMaterial, "recentMateiral");
    console.log(recentDesk, "recentDesk");







    return {
        props: {
            articles: recentArticles,
            plans: recentVinyl,
            materials: recentMaterial,
            desks: recentDesk
        }
    }
}

