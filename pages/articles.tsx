import React from 'react';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import '../styles/Home.module.css'
import Link from 'next/link';
import CardArticle from '../components/CardArticle';
import Head from 'next/head';


const articles = ({ articles }) => {

    return (

        <>
            <Head>
                <title>Les Articles</title>
                <meta name="description" content="Tous les articles" />

                {/* <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" /> */}
            </Head>

            <div className="flex flex-wrap justify-center content-between">
                {articles.map((article: any) => (

                    <div key={article._id}>

                        <CardArticle keyCard={article._id}
                            link={`/article/${article._id}`}
                            linkTitle={`/article/${article._id}`}
                            imgCard={(article.image != '') ? (article.image) : ('https://www.abondance.com/wp-content/uploads/2015/08/actualite-logo-300x262.jpg')}
                            texteCard={article.description}
                            titleCard={article.title}
                            authorCard={article.author}
                            dateCard={article.createdAt} />
                    </div>
                )
                )}
            </div>
        </>
    );
}



export default articles;

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query Article {
                Article  {
                    _id
                    title
                    description
                    subtitle
                    contentA
                    contentB
                    contentC
                    createdAt
                    author
                    image
                    contentD
                    contentE
                    contentF
                    url
                }
                }
      `,
    });

    return {
        props: {
            articles: data.Article,
        },
    };
}