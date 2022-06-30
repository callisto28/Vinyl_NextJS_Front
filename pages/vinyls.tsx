import React, { useEffect, useState } from 'react';
import { CardVinyl } from '../components/CardPlan';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Checkbox from '../components/Checkbox';
import Head from 'next/head';
import Filter from '../components/Filter';
import Image from 'next/image';

const Vinyls = ({ vinyls }) => {

    const [filter, setFilter] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        setFilter(vinyls);
    }
        , []);

    const handleSubmit = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchFilter(value);
    }

    return (
        <>
            <Head>
                <title>Les Vinyles | promotiom | prix</title>
                <meta name="description" content="Tous les articles" />

                <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />
            </Head>
            <div className='flex flex-col justify-center items-center'>
                <h4>Rechercher par titre d&apos;album, artiste, genre</h4>

                <input type="text"
                    name='searchBar'
                    className=" p-1 rounded-full border-2 border-blueCC focus:ring-1 focus:ring-pink-500 focus:outline-none"
                    placeholder="Rechercher un vinyl..."
                    onChange={handleSubmit}
                />

            </div>
            <div className="flex flex-wrap justify-center content-between">

                {vinyls.filter((val) => {
                    return val.title.toLowerCase().includes(searchFilter.toLowerCase()) || val.genre.toLowerCase().includes(searchFilter.toLowerCase())
                }).map((val: any) => (
                    <div key={val._id}>
                        <div className='flex flex-row justify-center items-center m-2'>
                            <h1 className='text-xl font-bold px-4 text-black'>{new Date(parseInt(val.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</h1>
                            <Image src="/headphone-front-color.png" width={30} height={30} alt="logo headphone" />
                        </div>

                        <CardVinyl keyCardPl={val._id}
                            linkPL={`/plan/${val._id}`}
                            linkTitlePL={`/plan/${val._id}`}
                            imgCardPL={(val.image != "") ? (val.image) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                            img2CardPL={(val.imageB != "") ? (val.imageB) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                            texteCardPL={val.subtitle}
                            priceCardPLEUR={(val.priceUSD === 0) ? (`${val.priceEur}  €`) : (val.priceUSD + '  $')}
                            titleCardPL={val.title}
                            authorCardPL={val.author}
                            dateCardPL={val.createdAt}
                        />
                    </div>
                )
                )
                }
            </div>
        </>
    );
};

export default Vinyls;

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
                    imageB
                    referral_url
                    priceEur
                    priceUSD
                    label
                    genre
                    seller
                    author
                    featured
                    slug
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