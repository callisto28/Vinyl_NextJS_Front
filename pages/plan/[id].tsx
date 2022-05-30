import styles from '../../styles/Home.module.css'
import { gql } from '@apollo/client';
import client from '../../apollo-client';


export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
        query Query {
            Plans {
                _id
                title
                description
                image
                url
                createdAt
                author
            }
            }`,
    });
    const paths = data.Plans.map((plan: any) => {


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
    console.log(id, 'id');
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
        <div className={styles.container}>
            <div className="flex flex-col w-4/6 h-auto border-2 border-red-400 rounded-lg bg-slate-300 text-center whitespace-pre-line p-2">
                <h1>{plan.title}</h1>
                <p>{plan.description}</p>
                <img src={plan.image} alt="plan" width={150} height={150} />
                <p>{plan.url}</p>
                <p>{plan.createdAt}</p>
                <p>{plan.author}</p>
            </div>
        </div >
    );
}
export default DetailPost;

