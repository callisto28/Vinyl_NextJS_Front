import React, { useEffect, useState } from 'react';
import CardPlan from '../components/CardPlan';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Image from 'next/image';
import Head from 'next/head';

const Rangements = ({ desk }) => {

    const [filter, setFilter] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        setFilter(desk);
    }
        , []);

    const handleSubmit = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchFilter(value);
    }
    return (
        <>
            <Head>
                <title>meubles, rangements | promotiom | prix</title>
                <meta name="description" content="Tous les articles" />

            </Head>
            <div className="flex lg:flex-row sm:flex-col">
                <div className='lg:w-1/3 flex lg:flex-col sm:flex-col lg:items-start lg:content-between sm:items-center lg:m-4 lg:border-r-2 lg:border-b-0 sm:border-b-2 sm:m-2 sm:pb-2'>
                    <h4>Rechercher par titre ou vendeur.</h4>

                    <input type="text"
                        name='searchBar'
                        className=" w-96 px-3 py-2 rounded-lg mx-2 border-2 border-blueCC focus:ring-1 focus:ring-pink-500 focus:outline-none"
                        placeholder="Rechercher..."
                        onChange={handleSubmit}
                    />

                </div>
                <div className="flex lg:flex-col sm:flex-wrap lg:w-2/3">
                    {
                        desk.filter((plan) => {
                            return plan.title.toLowerCase().includes(searchFilter.toLowerCase()) || plan.seller.toLowerCase().includes(searchFilter.toLowerCase())
                        }).map((plan: any) => (
                            <div key={plan._id}>
                                {/* <div className='flex flex-row justify-center items-center m-2'>
                                    <h1 className='text-2xl font-bold px-4 text-black font-chelsea'>{new Date(parseInt(plan.updatedAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</h1>
                                    <Image src="/bag-front-premium.png" width={30} height={30} alt="logo bag" />
                                </div> */}

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
            </div>
        </>
    );
};

export default Rangements;

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