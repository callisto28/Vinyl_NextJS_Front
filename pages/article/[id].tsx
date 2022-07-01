import { gql } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import client from '../../apollo-client';



export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
        query Article {
                Article  {
                    _id
                    title
                    image
                    description
                    subtitle
                    contentA
                    contentB
                    contentC
                    contentD
                    contentE
                    contentF
                    url
                    createdAt
                    author
                }
                }`,
    });
    const paths = data.Article.map((article: any) => {

        return {
            params: { id: article._id.toString() },
        }

    });
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const { data } = await client.query({
        query: gql`
    query Query($articleId: ID!) {
                    article(id: $articleId) {
                        _id
                        title
                        image
                        description
                        subtitle
                        contentA
                        contentB
                        contentC
                        contentD
                        contentE
                        contentF
                        url
                        createdAt
                        author
                    }
}`,
        variables: {
            articleId: id
        }
    });

    return {

        props: {
            article: data.article,
        },
    }
}

function strUcFirst(a) { return (a + '.').charAt(0).toUpperCase() + a.substr(1); }
function strUcReturn(a) { return (a + '.').charAt(0).includes('\n') + a.substr(1); }


const DetailArticle = ({ article }) => {


    return (
        <>
            <Head>
                <title>vinyles</title>
                <meta name="description" content="Tous les bons plan, promotions, petit prix, réductions, dernieres sorties, vinyles" />

                <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />
            </Head>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:flex">

                        <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto sm:h-64 object-contain rounded -z-10" src={article.image} />
                        <div className="lg:w-3/4 mx-auto flex flex-wrap  ">

                            <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 lg:ml-8 font-philosopher ">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{(article.title)}</h1>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{article.subtitle}</h2>
                                <div className="flex mb-4">
                                    <a className="flex-grow text-blueCC border-b-2 border-blueCC py-2 text-lg px-1">Description</a>
                                </div>
                                <p className="leading-relaxed lg:text-lg mb-4 first-letter:text-xl  first-letter:font-bold first-letter:text-black">{(article.description)}.</p>
                                <div className="flex border-t border-gray-200 py-2">
                                    <p className="leading-relaxed mb-8 lg:text-lg sm:text-xs text-left  first-letter:text-xl  first-letter:font-bold first-letter:text-black font-philosopher ">{article.contentA}</p>
                                </div>
                                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                    <p className="leading-relaxed mb-8 lg:text-lg sm:text-xs text-left  first-letter:text-xl  first-letter:font-bold first-letter:text-black font-philosopher ">{strUcFirst(article.contentB)}</p>
                                </div>
                                <div className="flex border-t border-gray-200 py-2">
                                    <p className="leading-relaxed mb-8 lg:text-lg sm:text-xs text-left  first-letter:text-xl  first-letter:font-bold first-letter:text-black font-philosopher ">{article.contentC}</p>
                                </div>
                                <div className="flex border-t border-gray-200 py-2">
                                    <p className="leading-relaxed mb-8 lg:text-lg sm:text-xs text-left  first-letter:text-xl  first-letter:font-bold first-letter:text-black ">{article.contentD}</p>
                                </div>
                                <div className="flex border-t border-gray-200 py-2">
                                    <p className="leading-relaxed mb-8 lg:text-lg sm:text-xs text-left  first-letter:text-xl  first-letter:font-bold first-letter:text-black ">{article.contentE}</p>
                                </div>
                                <div className="flex border-t border-gray-200 py-2">
                                    <p className="leading-relaxed mb-8 lg:text-lg sm:text-xs text-left  first-letter:text-xl  first-letter:font-bold first-letter:text-black ">{article.contentF}</p>
                                </div>
                                <div className="flex border-t border-gray-200 py-2">
                                    <span className="text-gray-500">Publié le :</span>
                                    <span className="ml-auto text-gray-900">{new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-500">auteur de l&apos;article :</span>
                                    <span className="ml-auto text-gray-900">{article.author}</span>
                                </div>
                                <button className="flex ml-40 text-white bg-blueCC border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                                    <a href={article.url}
                                        target="_blank" rel="noreferrer"
                                    >
                                        Consulter</a>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
export default DetailArticle;
