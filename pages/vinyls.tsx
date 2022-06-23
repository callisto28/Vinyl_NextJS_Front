import React from 'react';
import CardPlan from '../components/CardPlan';
import { gql } from '@apollo/client';
import client from '../apollo-client';

const vinyls = ({ vinyls }) => {
    return (
        <>
            <div className="flex flex-wrap justify-center content-between">

                {
                    vinyls.map((plan: any) => (
                        <div key={plan._id}>
                            <div className='flex flex-row justify-center items-center m-2'>
                                <h1 className='text-xl font-bold px-4 text-black'>{new Date(parseInt(plan.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</h1>
                                <img src="./headphone-front-color.png" width={30} height={30} />
                            </div>

                            <CardPlan keyCardPl={plan._id}
                                linkPL={`/plan/${plan._id}`}
                                linkTitlePL={`/plan/${plan._id}`}
                                imgCardPL={(plan.image != "") ? (plan.image) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                                texteCardPL={plan.subtitle}
                                priceCardPLEUR={(plan.priceEur === 0) ? (`${plan.priceUSD}  $`) : (plan.priceEur + ' €')}
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

export default vinyls;

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query Query {
                getVinylFeatured {
                    _id
                    createdAt
                    updatedAt
                    title
                    subtitle
                    description
                    image
                    referral_url
                    priceEur
                    priceUSD
                    label
                    genre
                    seller
                    author
                    featured
                }
            }
        `
    })

    return {
        props: {
            vinyls: data.getVinylFeatured
        }
    }


}