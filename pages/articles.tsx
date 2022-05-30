import React from 'react';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const articles = ({ articles }) => {
    const titleId = articles.map((article: any, index) => (
        article.title.split(' ')
    ));
    console.log(titleId[1]);


    return (
        <div className={styles.container}>
            <div className="flex flex raw">
                {
                    articles.map((article: any) => (

                        <div key={article._id} className="bg-gray-200 shadow-md border border-red-400 rounded-lg max-w-sm text-center dark:bg-gray-800 dark:border-gray-700 grid content-evenly">
                            <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{article.title}</h1>
                            <p className="text-gray-600 font-bold text-base tracking-tight mb-2 dark:text-white">{article.description}</p>
                            {/* <h2 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{article.subtitle}</h2>
                            <p className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{article.contentA}</p>
                            <p className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{article.contentB}</p>
                            <p className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{article.contentC}</p> */}
                            <p className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{article.author}</p>
                            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                            <div className="text-center py-4">
                                <Link href={`/article/${article._id}`} as={`/article/${article._id}`} passHref>
                                    <span className="transition duration-500 ease transform hover:-translate-xy-1 hover:-translate-x-2 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Voir plus</span>
                                </Link>
                            </div>
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