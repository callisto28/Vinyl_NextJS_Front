import React, { useEffect, useState } from 'react';
import CardPlan from '../components/CardPlan';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Image from 'next/image';
import Head from 'next/head';
import Checkbox from '../components/Checkbox';

const Hifi = ({ hifi }) => {

    const [filter, setFilter] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        setFilter(hifi);
    }, []);

    const handleSubmit = (e) => {
        let value = e.target.value;
        if (value.length > 2) {
            setSearchFilter(value);
        } else {
            setSearchFilter('');
        }
    }
    return (
        <>
            <Head>
                <title>Hifi | platine | sound</title>
                <meta name="description" content="Toute la hifi, platine, ampli" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="vinylTouch" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:locale:alternate" content="en_US" />
            </Head>
            <div className='flex lg:flex-row sm:flex-col '>
                <div className=' lg:w-1/4 flex lg:flex-col sm:flex-col lg:items-center lg:content-between sm:items-center lg:m-4 lg:border-r-2'>
                    <div className='lg:fixed sm:relative lg:flex-none'>
                        <div className='text-center'>
                            <h4 className='lg:text-base sm:text-sm'>  <Checkbox label={undefined} id={undefined} /> </h4>

                        </div>
                        <input type="text"
                            name='searchBar'
                            className="lg:w-96 sm:w-64 px-3 py-2 rounded-lg mx-2 border-2 border-blueCC focus:ring-1 focus:ring-pink-500 focus:outline-none lg:text-base sm:text-xs"
                            placeholder="Rechercher par titre ou vendeur..."
                            onChange={handleSubmit}
                        ></input>
                    </div>
                </div>
                <div className="flex lg:flex-col sm:flex-wrap lg:w-2/3 sm:mt-2">

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