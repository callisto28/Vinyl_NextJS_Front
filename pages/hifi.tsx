import React, { useEffect, useState } from 'react';
import CardPlan from '../components/CardPlan';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Image from 'next/image';
import Head from 'next/head';

const Hifi = ({ hifi }) => {

    const [filter, setFilter] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        setFilter(hifi);
    }, []);

    const handleSubmit = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchFilter(value);
    }
    return (
        <>
            <Head>
                <title>Hifi | platine | sound</title>
                <meta name="description" content="Toute la hifi, platine, ampli" />

            </Head>
            <div className='flex lg:flex-row sm:flex-col '>
                <div className='lg:w-1/3 flex lg:flex-col sm:flex-col lg:items-start lg:content-between sm:items-center lg:m-4 lg:border-r-2 lg:border-b-0 sm:border-b-2 sm:m-2 sm:pb-2'>
                    <h4>Rechercher par titre d&apos;album, artiste ou genre.</h4>

                    <input type="text"
                        name='searchBar'
                        className=" w-96 px-3 py-2 rounded-lg mx-2 border-2 border-blueCC focus:ring-1 focus:ring-pink-500 focus:outline-none"
                        placeholder="Rechercher..."
                        onChange={handleSubmit}
                    />

                </div>
                <div className="flex lg:flex-col sm:flex-wrap lg:w-2/3">

                    {hifi.filter((plan) => {
                        return plan.title.toLowerCase().includes(searchFilter.toLowerCase()) || plan.seller.toLowerCase().includes(searchFilter.toLowerCase())
                    }).map((plan: any) => (
                        <div key={plan._id} className="w-full">


                            <CardPlan keyCardPl={plan._id}
                                linkPL={`/material/${plan._id}`}
                                linkTitlePL={`/material/${plan._id}`}
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

export default Hifi;

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
            query Query {
                getMaterialFeatured {
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
            hifi: data.getMaterialFeatured
        }
    }
}