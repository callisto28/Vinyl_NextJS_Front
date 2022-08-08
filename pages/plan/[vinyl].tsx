/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import client from '../../apollo-client';


export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`       
        query getPlan {
                getVinylFeatured {
                    _id
                }
                
            }`,
    });
    const data2 = data.getVinylFeatured;
    const paths = data2.map((plan: any) => {
        return {
            params: { vinyl: plan._id.toString() },
        }
    });
    return {
        paths,
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params.vinyl;

    const { data } = await client.query({
        query: gql`
        query getById($vinylId: String!){
                vinyl(id: $vinylId) {
                    _id
                    createdAt
                    updatedAt
                    title
                    artiste
                    subtitle
                    description
                    image
                    imageB
                    referral_url
                    spotify_url
                    priceEur
                    priceUSD
                    label
                    release
                    genre
                    promo
                    seller
                    author
                    featured
                    slug
                }
            
                }`,
        variables: {
            vinylId: id,
        }
    });
    try {
        return {
            props: {
                vinyl: data.vinyl,
            },
            revalidate: 1,
        }
    } catch (error) {
        console.log(error);
    }
}


const DetailVinyl = ({ vinyl }) => {


    return (
        <>
            <Head>
                <title>{vinyl.title}</title>
                <meta name="description" content="Présentation de votre vinyle, son titre, l'artiste, le prix, sa date de disponibilité" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta property="og:image" content="https://unsplash.com/photos/zKT64MtVKQ0" />
                <meta property="og:url" content="https://www.vinyltouch.fr/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="vinylTouch" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:locale:alternate" content="en_US" />

            </Head>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        
                            <h1 className="text-gray-900 text-xxxl title-font font-medium mb-2">{vinyl.title}</h1>
                            <button className=" text-white bg-blueCC border-0 lg:py-2 lg:px-6 sm:py-2 sm:px-3 font-philosophe font-medium transition-color duration-100 delay-10 animate-bounce-in-left rounded-lg hover:bg-blue-700 ">
                                    <a href={vinyl.referral_url}
                                        target="_blank" rel="noreferrer"
                                    >
                                        {(vinyl.release === 'Disponible') ? 'Acheter' : 'Pré-commander'}</a>
                                </button>
                            <h3 className='text-xl mt-2'>{vinyl.artiste}</h3>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{vinyl.subtitle}</h2>
                            <div className="flex mb-4">
                                <a className="flex-grow text-blueCC border-b-2 border-blueCC py-2 text-lg px-1">Description</a>

                            </div>
                            <p className="leading-relaxed mb-4 first-letter:text-black first-letter:text-sm">{vinyl.description}.</p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Vendu par :</span>
                                <span className="ml-auto text-gray-900">{vinyl.seller}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Genre :</span>
                                <span className="ml-auto text-gray-900">{vinyl.genre}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Publié le :</span>
                                <span className="ml-auto text-gray-900">{new Date(parseInt(vinyl.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Sortie prévue le :</span>
                                <span className="ml-auto text-gray-900">{vinyl.release}</span>
                            </div>
                            <div className="flex border-t border-b  border-gray-200 py-2">
                                <span className="text-gray-500">Label :</span>
                                <span className="ml-auto text-gray-900">{vinyl.label}</span>
                            </div>
                            <div className="flex border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Prix :</span>
                                <span className="ml-auto font-semibold text-gray-900"> {(vinyl.priceUSD === 0) ? (vinyl.priceEur + "  €") : (vinyl.priceUSD + " $")} <span className='text-xs text-red-500'>{vinyl.promo}</span></span>
                            </div>
                            <div className="flex lg:flex-row sm:flex-col lg:items-center sm:justify-center">

                                <button className="flex justify-center text-white bg-blueCC border-0 lg:py-2 lg:px-6 sm:py-2 sm:px-3 font-philosophe font-medium transition-color duration-100 delay-10 animate-bounce-in-left rounded-lg hover:bg-blue-700 ">
                                    <a href={vinyl.referral_url}
                                        target="_blank" rel="noreferrer"
                                    >
                                        {(vinyl.release === 'Disponible') ? 'Acheter' : 'Pré-commander'}</a>
                                </button>

                            </div>
                        </div>
                        <img alt="image vinyle" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain rounded" src={vinyl.image} />


                    </div>
                    <div className="flex lg:flex-row sm:flex-col lg:justify-evenly items-center">
                        <img alt="image vinyle" className="lg:w-1/3 w-full lg:h-auto h-36 object-contain rounded lg:hover:scale-125 lg:hover:translate-y-7" src={vinyl.imageB} />

                        {/* eslint-disable-next-line react/no-unknown-property */}
                        <iframe className="rounded-lg lg:w-2/5 sm:w-auto"
                            src={(vinyl.spotify_url == null) ? ('/spotify.png') : (vinyl.spotify_url)}
                            width="48%"
                            height="300"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>


                    </div>


                </div>
            </section></>
    );
}
export default DetailVinyl;




