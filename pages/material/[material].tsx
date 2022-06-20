import { gql } from '@apollo/client';
import client from '../../apollo-client';


export const getStaticPaths = async () => {
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
        fallback: false,
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
                    author
                    featured
                }
            
                }`,
        variables: {
            materialId: id,

        }
    });

    return {
        props: {
            material: data.material,


        }
    }
}
const DetailMaterial = ({ material }) => {


    return (
        /*
        <div className="flex lg:flex-wrap lg:justify-center sm:flex-wrap sm:justify-center  pb-5">
            <div className="flex flex-col h-full w-2/3 bg-white bg-opacity-50 text-center items-center rounded-lg shadow-[inset_0_-10px_20px_-10px_#B625E4] ">
                <h1 className='text-4xl font-bold pb-3'>{material.title}</h1>
                <img src={material.image} alt="plan" width={400} height={200} className='border-y border-gray-500 rounded-full' />

                <p className='text-xl font-semibold py-3'>{material.description}</p>
                <a href={material.referral_url} target="_blank" rel="noreferrer" className="text-white bg-purple-600  font-medium rounded-full items-center px-3 py-1  w-auto m-1">Consulter</a>

                <div className=' w-full flex justify-around'>
                    <div className='flex flex-col'>
                        <span>Vendu par : </span>
                        <p className='text-xl font-semibold pb-3'>{material.seller}</p>
                    </div>
                    <div className='flex flex-col'>
                        <span>Prix de vente : </span>
                        <p className='text-xl font-semibold pb-3'>{material.price + " €"} </p>
                    </div>
                    <div className='flex flex-col'>
                        <span>Publié le : </span>
                        <p>{new Date(parseInt(material.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                </div>
                <div className=' w-full flex justify-end p-2'>
                    <div className='flex flex-raw text-sm '>
                        <span>Auteur de l&apos;article : </span>
                        <p>{material.author}</p>
                    </div>
                </div>
            </div>
        </div >*/
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
                            <span className="text-gray-500">Publié le :</span>
                            <span className="ml-auto text-gray-900">{new Date(parseInt(material.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>

                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">{material.price + " €"}</span>
                            <button className="flex ml-auto text-white bg-blueCC border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                                <a href={material.referral_url}
                                    target="_blank" rel="noreferrer"
                                >
                                    Consulter</a>
                            </button>

                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain rounded" src={material.image} />
                </div>
            </div>
        </section>
    );
}
export default DetailMaterial;