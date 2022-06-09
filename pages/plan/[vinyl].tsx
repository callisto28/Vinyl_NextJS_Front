import { gql } from '@apollo/client';
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

export const getStaticProps = async (context) => {
    const id = context.params.vinyl;

    const { data } = await client.query({
        query: gql`
        query getById($vinylId: String!){
                vinyl(id: $vinylId) {
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
        <div className="flex lg:flex-wrap lg:justify-center sm:flex-wrap sm:justify-center  pb-5">
            <div className="flex flex-col h-full w-2/3 bg-white text-center items-center rounded-lg ">
                <h1 className='text-4xl font-bold pb-3'>{vinyl.title}</h1>
                <img src={vinyl.image} alt="plan" width={400} height={200} className='border-y border-gray-500' />

                <p className='text-xl font-semibold py-3'>{vinyl.description}</p>
                <a href={vinyl.referral_url} target="_blank" rel="noreferrer" className="text-white bg-purple-600  font-medium rounded-full items-center px-3 py-1  w-auto m-1">Consulter</a>

                <div className=' w-full flex justify-around'>
                    <div className='flex flex-col'>
                        <span>Vendu par : </span>
                        <p className='text-xl font-semibold pb-3'>{vinyl.seller}</p>
                    </div>
                    <div className='flex flex-col'>
                        <span>Prix de vente : </span>
                        <p className='text-xl font-semibold pb-3'>{vinyl.price} €</p>
                    </div>
                    <div className='flex flex-col'>
                        <span>Publié le : </span>
                        <p>{new Date(parseInt(vinyl.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                </div>
                <div className=' w-full flex justify-end p-2'>
                    <div className='flex flex-raw text-xs italic'>
                        <span>Auteur de l&apos;article : </span>
                        <p>{vinyl.author}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default DetailVinyl;




