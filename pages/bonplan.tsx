import React from 'react';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import CardPlan from '../components/CardPlan';

const bonplans = ({ plans }) => {



    return (
        <div className="container mx-auto px-10 mb-8 flex flex-wrap justify-center">
            <div className="flex flex-wrap">

                {
                    plans.map((plan: any) => (
                        <div key={plan._id}>
                            <CardPlan keyCardPl={plan._id}
                                linkPL={`/plan/${plan._id}`}
                                linkTitlePL={`/plan/${plan._id}`}
                                imgCardPL={(plan.image != "https//:") ? (plan.image) : ('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')}
                                texteCardPL={plan.description}
                                titleCardPL={plan.title}
                                authorCardPL={plan.author}
                                dateCardPL={plan.createdAt} />



                        </div>




                        // <div key={index} className='bg-gray-200 shadow-md border border-red-400 rounded-lg max-w-sm text-center dark:bg-gray-800 dark:border-gray-700 grid content-evenly'>
                        //     <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{plan.title}</h1>
                        //     <p className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{plan.description}</p>
                        //     <Image className='p-2' src={plan.image} width={150} height={150} layout="responsive" />
                        //     <div className="text-yellow-600 hover:first-letter:text-red-600"><Link href={plan.url}>Lien</Link></div>
                        //     <p className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{plan.author}</p>
                        //     <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{new Date(parseInt(plan.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        //     <div className="text-center py-4">
                        //         <Link href={`/plan/${plan._id}`} as={`/plan/${plan._id}`} passHref>
                        //             <span className="transition duration-500 ease transform hover:-translate-xy-1 hover:-translate-x-2 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-1 py-3 cursor-pointer">Voir plus</span>
                        //         </Link>
                        //     </div>
                        // </div>
                    )
                    )
                }
                <div className="text-center py-4">
                </div>
            </div >
        </div>
    );
}



export default bonplans;

export async function getStaticProps() {
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
                }
      `,
    });

    return {
        props: {
            plans: data.Plans,
        },
    };
}