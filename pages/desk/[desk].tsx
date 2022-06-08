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
    console.log(data2, "data2 desk");

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
    console.log(id, 'id');
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
    console.log(data, 'data');
    return {
        props: {
            desk: data.desk,


        }
    }
}
const DetailMaterial = ({ desk }) => {
    console.log(desk, 'post');

    return (
        <div className="container">
            <div className="flex flex-col w-auto h-auto border-2 border-red-400 rounded-lg bg-slate-300 text-center whitespace-pre-line p-2 items-center">
                <h1>{desk.title}</h1>
                <p>{desk.description}</p>
                <img src={desk.image} alt="plan" width={150} height={150} />
                <a href={desk.url} target="_blank" rel="noreferrer" className="text-white bg-blue-700  font-medium rounded-full items-center px-3 py-1  w-auto m-1">Consulter</a>
                <p>{new Date(parseInt(desk.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <p>{desk.author}</p>
            </div>
        </div >
    );
}
export default DetailMaterial;