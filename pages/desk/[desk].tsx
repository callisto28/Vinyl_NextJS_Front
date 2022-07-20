import { gql } from '@apollo/client';
import client from '../../apollo-client';


export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`       
        query getPlan {                
                getDeskFeatured {
                    _id
                }
                
            }`,
    });

    const data2 = data.getDeskFeatured;


    const paths = data2.map((plan: any) => {
        return {
            params: { desk: plan._id.toString() },
        }
    });
    return {
        paths,
        fallback: false,
    }
}
//  $materialId: String! , $deskId: String!
export const getStaticProps = async (context) => {
    const id = context.params.desk;

    const { data } = await client.query({
        query: gql`
        query getById($deskId: String!){
            desk(id: $deskId) {
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
            deskId: id,

        }
    });

    return {
        props: {
            desk: data.desk,
        },
        revalidate: 10,
    }
}
const DetailMaterial = ({ desk }) => {


    return (

        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{desk.title}</h1>

                        <div className="flex mb-4">
                            <a className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">Description</a>

                        </div>
                        <p className="leading-relaxed mb-4">{desk.description}.</p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Vendu par :</span>
                            <span className="ml-auto text-gray-900">{desk.seller}</span>
                        </div>

                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Publié le :</span>
                            <span className="ml-auto text-gray-900">{new Date(parseInt(desk.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>

                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">{desk.price + " €"}</span>
                            <button className="flex ml-auto text-white bg-blueCC border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                                <a href={desk.referral_url}
                                    target="_blank" rel="noreferrer"
                                >
                                    Consulter</a>
                            </button>

                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain rounded" src={desk.image} />
                </div>
            </div>
        </section>
    );
}
export default DetailMaterial;