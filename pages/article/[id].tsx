import { gql } from '@apollo/client';
import Head from 'next/head';
import { useState } from 'react';
import client from '../../apollo-client';
import Modal from '../../components/Modal';


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

    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false)
    const clicked = () => {
        setModalOn(true)
    }

    return (
        <>
            <Head>
                <title>Les Articles</title>
                <meta name="description" content="Les Articles" />

                <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />
            </Head>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-wrap -m-12 justify-center">
                        <div className="p-12  flex flex-col items-center">
                            <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">ARTICLE</span>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{article.title}</h2>
                            <p className="leading-relaxed mb-8">{article.subtitle}.</p>
                            <div className='flex justify-center  mb-6'>
                                <img alt="blog" src={(article.image != '') ? (article.image) : ('https://www.abondance.com/wp-content/uploads/2015/08/actualite-logo-300x262.jpg')} className="lg:w-1/2 w-full lg:h-auto h-64 object-contain rounded" />
                            </div>
                            <p className="leading-relaxed mb-8">{article.description}.</p>


                            <div className="flex justify-center">
                                <div className="flex  cursor-pointer justify-center  bg-blue-400 p-2  m-2 rounded-md text-white"
                                    onClick={clicked}>
                                    Voir plus
                                </div>
                            </div>




                            {modalOn && < Modal setModalOn={setModalOn}
                                setChoice={setChoice}
                                contentA={article.contentA}
                                contentB={article.contentB}
                                contentC={article.contentC}
                                contentD={article.contentD}
                                contentE={article.contentE}
                                contentF={article.contentF}
                                url={article.url}
                            />}

                            <div className='flex justify-between flex-row'>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    {new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </span>

                                <a className="">
                                    <span className="flex-grow flex flex-col items-start pl-4">
                                        <span className="title-font font-medium text-gray-900">Auteur :</span>
                                        <span className="text-gray-400 text-xs tracking-widest mt-0.5">{article.author}</span>
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section></>
    );
}
export default DetailArticle;
