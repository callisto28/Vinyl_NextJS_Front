import React, { useEffect, useState } from 'react';
import CardPlan from '../components/CardPlan';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Image from 'next/image';
import Head from 'next/head';
import Checkbox from '../components/Checkbox';
import { GetServerSideProps } from 'next';
import Sponsor from '../components/Sponsor';

const Rangements = ({ desk }) => {

    const [filter, setFilter] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        setFilter(desk);
    }
        , []);

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
                <title>meubles | accessoires | rangements | promotiom | prix | nouveautés | Figurines Pop&apos;s</title>                
                <meta name="description" content="Du mobilier, du rangements des accessoires aux meilleurs prix du marché, mais aussi les figurines Pops dans l'univers du cinéma et de la musique" />
                <meta property="og:title" content="meubles | accessoires | rangements | promotiom | prix | nouveautés | Figurines Pop&apos;s" />
                <meta property="og:description" content="Du mobilier, du rangements des accessoires aux meilleurs prix du marché, mais aussi les figurines Pops dans l'univers du cinéma et de la musique" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1489838720009-3286c4293fda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <meta property="og:url" content="https://vinyltouch.fr/rangements" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="vinylTouch" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />

            </Head>
            <div className="flex lg:flex-row sm:flex-col">
                <div className=' lg:w-1/4 flex lg:flex-col sm:flex-col lg:items-center lg:content-between sm:items-center lg:m-4 pb-2'>
                    <div className='lg:fixed sm:relative'>
                        <div className='text-center'>
                            <h4 className='lg:text-base sm:text-sm flex justify-center'><Checkbox label={undefined} id={undefined} /> </h4>

                        </div>
                        <input type="text"
                            name='searchBar'
                            className="lg:w-auto sm:w-64 px-3 py-2 rounded-lg mx-2 my-2 border-2 border-blueCC focus:ring-1 focus:ring-pink-500 focus:outline-none lg:text-base sm:text-xs text-justify"
                            placeholder="Rechercher par titre ou vendeur..."
                            onChange={handleSubmit}
                        ></input>
                        <Sponsor/>
                    </div>
                </div>
                <div className="flex lg:flex-col sm:flex-wrap lg:w-2/3 lg:border-l-2 sm:border-t-2">
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
                                    brandCardPL={""}
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

export const getServerSideProps: GetServerSideProps = async ()  => {
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