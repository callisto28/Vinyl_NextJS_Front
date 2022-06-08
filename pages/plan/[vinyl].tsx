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
    console.log(data2, "data2");

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
//  $materialId: String! , $deskId: String!
export const getStaticProps = async (context) => {
    const id = context.params.vinyl;
    console.log(id, 'id');
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
    console.log(data, 'data');
    return {
        props: {
            vinyl: data.vinyl,


        }
    }
}
const DetailVinyl = ({ vinyl }) => {
    console.log(vinyl, 'post');

    return (
        <div className="container">
            <div className="flex flex-col w-auto h-auto border-2 border-red-400 rounded-lg bg-slate-300 text-center whitespace-pre-line p-2 items-center">
                <h1>{vinyl.title}</h1>
                <p>{vinyl.description}</p>
                <img src={vinyl.image} alt="plan" width={150} height={150} />
                <a href={vinyl.url} target="_blank" rel="noreferrer" className="text-white bg-blue-700  font-medium rounded-full items-center px-3 py-1  w-auto m-1">Consulter</a>
                <p>{new Date(parseInt(vinyl.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <p>{vinyl.author}</p>
            </div>
        </div >
    );
}
export default DetailVinyl;




