import { gql } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import client from '../apollo-client'
import Card from '../components/Card'
import Widget from '../components/Widget'
import DetailArticle from './article/[id]'


const Home: NextPage = ({ articles }: any) => {
    return (
        <div className="" >
            <Head>
                <title>VinylTouch | accueil</title>
                <meta name="description" content="Toute l'actualité du vinyle" />
                <link rel="icon" href="/callisto.png" />
            </Head>
            <div className="">
                <div className="flex lg:flex-row lg:justify-evenly sm:flex-col sm:items-center sm:content-evenly">
                    <Widget articles={articles} />
                    {/* <Card link={"/articles"} texteCard={"Retrouvez toute l'actualité du moment."} titleCard={`De l'actu`} />
                    <Card link={"/bonplan"} texteCard={"Retrouvez les bons plans des disquaires!"} titleCard={`Des Bons plans`} />
                    <Card link={"/frenchTouch"} texteCard={"Retrouvez nos Youtubeurs Français."} titleCard={`La FrenchTouch`} />
                    <Card link={"/"} texteCard={"Ce morceaux me dit quelque chose!"} titleCard={`Musique`} /> */}
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
                        title
                        description
                        image
                        createdAt
                    }
                }
            
        `
    })).data.Article

    return {
        props: {
            articles: recentArticles
        }
    }
}