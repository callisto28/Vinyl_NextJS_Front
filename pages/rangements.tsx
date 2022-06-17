import React from 'react';
import CardPlan from '../components/CardPlan';
import { gql } from '@apollo/client';
import client from '../apollo-client';

const rangements = ({ desk }) => {
    return (
        <>
            <div className="flex flex-wrap justify-center">

                {
                    desk.map((plan: any) => (
                        <div key={plan._id}>
                            <div className='flex flex-row justify-center items-center m-2'>
                                <h1 className='text-2xl font-bold px-4 text-purple-500 bg-black bg-opacity-50 rounded-md'>{new Date(parseInt(plan.updatedAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</h1>
                                <img src="./headphone-front-color.png" width={50} height={50} />
                            </div>

                            <CardPlan keyCardPl={plan._id}
                                linkPL={`/desk/${plan._id}`}
                                linkTitlePL={`/desk/${plan._id}`}
                                imgCardPL={(plan.image != "") ? (plan.image) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                                texteCardPL={plan.description}
                                priceCardPLEUR={plan.price + " €"}
                                titleCardPL={plan.title}
                                authorCardPL={plan.author}
                                dateCardPL={plan.createdAt} />
                        </div>
                    )
                    )
                }
            </div>
        </>
    );
};

export default rangements;

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query Query {
                getDeskFeatured {
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
            }
        `
    })

    return {
        props: {
            desk: data.getDeskFeatured
        }
    }


}