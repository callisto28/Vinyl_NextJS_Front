import React from 'react';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import '../styles/Home.module.css'
import Link from 'next/link';
import CardArticle from '../components/CardArticle';
import Head from 'next/head';
import { GetServerSideProps } from 'next';


const articles = ({ articles }) => {       



    return (       
        <>
            <Head>
                <title> Articles | News | Actu </title>
                <meta name="description" content="Actualité, scoop, nouvel album, retrouver ici des extraits d'articles de news sur l'univers de la musique et du vinyle" />              
                <meta property="og:title" content="Articles | News | Actu" />

<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/favicon-32x32.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="/favicon-16x16.png"
/>
<link rel="manifest" href="/site.webmanifest" />
<meta
  property="og:description"
  content="Actualité, scoop, nouvel album, retrouver ici des extraits d'articles de news sur l'univers de la musique et du vinyle"
/>
<meta
  property="og:description"
  content="Actualité, scoop, nouvel album, retrouver ici des extraits d'articles de news sur l'univers de la musique et du vinyle"
/>
<meta
  property="og:image"
  content="https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
/>
<meta property="og:url" content="https://vinyltouch.fr/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="vinylTouch" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:locale:alternate" content="en_US" />
            </Head>


            <div className="flex lg:flex-shrink-0 sm:flex-wrap justify-center content-between ">
                {articles.map((article: any) => (


                    <div key={article._id} className='mx-10 '>

                        <CardArticle keyCard={article._id}
                            link={`/article/${article._id}`}
                            linkTitle={`/article/${article._id}`}
                            imgCard={(article.image != '') ? (article.image) : ('https://www.abondance.com/wp-content/uploads/2015/08/actualite-logo-300x262.jpg')}
                            texteCard={article.subtitle}
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

export const getServerSideProps: GetServerSideProps = async ()  => {
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