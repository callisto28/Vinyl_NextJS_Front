/* eslint-disable @next/next/no-img-element */
import { gql } from '@apollo/client';
import { GetStaticPaths } from 'next';
import Head from 'next/head';
import client from '../../apollo-client';


export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`       
        query getPlan {                
                getMaterialFeatured {
                    _id
                }
                
            }`,
    });

    const data2 = data.getMaterialFeatured;


    const paths = data2.map((plan: any) => {
        return {
            params: { material: plan._id.toString() },
        }
    });
    return {
        paths,
        fallback: "blocking",
    }
}
//  $materialId: String! , $deskId: String!
export const getStaticProps = async (context) => {
    const id = context.params.material;

    const { data } = await client.query({
        query: gql`
        query getById($materialId: String!){
            material(id: $materialId) {
                    _id
                    createdAt
                    updatedAt
                    title
                    description
                    image
                    referral_url
                    price
                    seller
                    brand
                    author
                    featured
                }
            
                }`,
        variables: {
            materialId: id,

        }
    });
    try {
        return {
            props: {
                material: data.material,

            },
            revalidate: 1
        };
    } catch (e) {
        console.log(e);
    }
}
const DetailMaterial = ({ material }) => {


    return (
        <>
        <Head>
                <title>{material.title}</title>
                <meta name="description" content="Présentation de votre acticle, la marque le prix, sa date de disponibilité" />
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
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{material.title}</h1>

                        <div className="flex mb-4">
                            <a className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">Description</a>

                        </div>
                        <p className="leading-relaxed mb-4">{material.description}.</p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Vendu par :</span>
                            <span className="ml-auto text-gray-900">{material.seller}</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Marque :</span>
                            <span className="ml-auto text-gray-900">{material.brand}</span>
                        </div>

                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Publié le :</span>
                            <span className="ml-auto text-gray-900">{new Date(parseInt(material.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Prix :</span>
                            <span className="ml-auto font-semibold text-gray-900"> {material.price + " €"}</span>
                        </div>
                        <div className="flex lg:flex-row sm:flex-col lg:items-center sm:justify-center">

                            <button className="flex justify-center text-white bg-blueCC border-0 lg:py-2 lg:px-6 sm:py-2 sm:px-3 font-philosophe font-medium transition-color duration-100 delay-10 animate-bounce-in-left rounded-lg hover:bg-blue-700 ">
                                <a href={material.referral_url}
                                    target="_blank" rel="noreferrer"
                                >
                                    Acheter </a>
                            </button>

                        </div>


                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain rounded" src={material.image} />
                </div>
            </div>
        </section>
        </>
    );
}
export default DetailMaterial;