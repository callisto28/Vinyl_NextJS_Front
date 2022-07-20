import { gql } from '@apollo/client';
import Head from 'next/head';
import client from '../../apollo-client';


export const getStaticPaths = async () => {
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
        fallback: false,
    }
}

export const getServerSideProps = async (context) => {
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
                    priceEur
                    priceUSD
                    label
                    genre
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
    return {
        props: {
            vinyl: data.vinyl,
        }
    }
}


const DetailVinyl = ({ vinyl }) => {


    return (
        <>
            <Head>
                <title>vinyles</title>
                <meta name="description" content="Tous les bons plan, promotions, petit prix, réductions, dernieres sorties, vinyles" />

                <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />
            </Head>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{vinyl.title}</h1>
                            <h3>{vinyl.artiste}</h3>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{vinyl.subtitle}</h2>
                            <div className="flex mb-4">
                                <a className="flex-grow text-blueCC border-b-2 border-blueCC py-2 text-lg px-1">Description</a>

                            </div>
                            <p className="leading-relaxed mb-4">{vinyl.description}.</p>
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
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Label :</span>
                                <span className="ml-auto text-gray-900">{vinyl.label}</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">{(vinyl.priceUSD === 0) ? (vinyl.priceEUR + "  €") : (vinyl.priceUSD + " $")}</span>
                                <button className="flex ml-auto text-white bg-blueCC border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                                    <a href={vinyl.referral_url}
                                        target="_blank" rel="noreferrer"
                                    >
                                        Consulter</a>
                                </button>

                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain rounded" src={vinyl.image} />

                    </div> <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-36 object-contain rounded" src={vinyl.imageB} />
                </div>
            </section></>
    );
}
export default DetailVinyl;




