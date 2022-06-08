import styles from '../../styles/Home.module.css'
import { gql } from '@apollo/client';
import client from '../../apollo-client';


export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
       query getPlan {
  getVinylFeatured {
    _id
    author
    createdAt
    title
    description
    image
    referral_url
    price
    seller
    featured
  }
  getMaterialFeatured {
    _id
    author
    createdAt
    title
    description
    image
    referral_url
    price
    seller
    featured
  }
  getDeskFeatured {
    _id
    author
    createdAt
    title
    description
    image
    referral_url
    price
    seller
    featured
  }
}`,
    });
    console.log(data, "solo data");

    const data2 = data.getVinylFeatured.concat(data.getMaterialFeatured, data.getDeskFeatured);
    console.log(data2, "data2");

    const paths = data2.map((plan: any) => {
        return {
            params: { id: plan._id.toString() },
        }
    });
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const title = context.params.title;

    console.log(id, 'id');
    console.log(title, 'title');
    const { data } = await client.query({
        query: gql`
        query Plan($planId: ID!) {
                plan(id: $planId) {
                    _id
                    title
                    description
                    image
                    url
                    createdAt
                    author
                }
                }`,
        variables: {
            planId: id
        }
    });
    console.log(data, 'data');
    return {
        props: {
            plan: data.plan,
        }
    }
}

const DetailPost = ({ plan }) => {
    console.log(plan, 'post');

    return (
        <div className="container">
            <div className="flex flex-col w-auto h-auto border-2 border-red-400 rounded-lg bg-slate-300 text-center whitespace-pre-line p-2 items-center">
                <h1>{plan.title}</h1>
                <p>{plan.description}</p>
                <img src={plan.image} alt="plan" width={150} height={150} />
                <a href={plan.url} target="_blank" rel="noreferrer" className="text-white bg-blue-700  font-medium rounded-full items-center px-3 py-1  w-auto m-1">Consulter</a>
                <p>{new Date(parseInt(plan.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <p>{plan.author}</p>
            </div>
        </div >
    );
}
export default DetailPost;

