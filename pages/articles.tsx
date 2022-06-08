import React from 'react';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import '../styles/Home.module.css'
import Link from 'next/link';
import CardArticle from '../components/CardArticle';


const articles = ({ articles }) => {

    return (
        <div className="" >
            <div className="flex lg:flex-row lg:justify-center sm:flex-col sm:content-center">
                {
                    articles.map((article: any) => (

                        <div key={article._id} className="max-w-screen-xl">
                            <CardArticle keyCard={article._id}
                                link={`/article/${article._id}`}
                                linkTitle={`/article/${article._id}`}
                                imgCard={(article.image != '') ? (article.image) : ('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')}
                                texteCard={article.description}
                                titleCard={article.title}
                                authorCard={article.author}
                                dateCard={article.createdAt} />
                        </div>
                    )
                    )
                }
            </div>
        </div >
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