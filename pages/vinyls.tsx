import React, { useEffect, useState } from 'react';
import { CardVinyl } from '../components/CardPlan';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Head from 'next/head';
import Checkbox from '../components/Checkbox';


const Vinyls = ({ vinyls }) => {

    const [filter, setFilter] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(() => {
        setFilter(vinyls);
    }
        , [vinyls]);

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
                <title>Les Vinyles | promotiom | prix</title>
                <meta name="description" content="Tous les articles" />

            </Head>
            <div className='flex lg:flex-row sm:flex-col '>
                <div className=' lg:w-1/3 flex lg:flex-col sm:flex-col lg:items-start lg:content-between sm:items-center lg:m-4 lg:border-r-2 lg:border-b-0 sm:border-b-2 sm:m-2 sm:pb-2'>
                    <div className='lg:fixed sm:relative'>
                        <div className='text-center'>
                            <h4 className='lg:text-base sm:text-sm'>Afficher par theme (vinyle, hifi ou desk) :  <Checkbox label={undefined} id={undefined} /> </h4>

                        </div>
                        <input type="text"
                            name='searchBar'
                            className="lg:w-96 sm:w-64 px-3 py-2 rounded-lg mx-2 border-2 border-blueCC focus:ring-1 focus:ring-pink-500 focus:outline-none lg:text-base sm:text-xs "
                            placeholder="Rechercher par titre, vendeur, genre..."
                            onChange={handleSubmit}
                        ></input>
                    </div>
                </div>
                <div className="flex lg:flex-col sm:flex-wrap lg:w-2/3 sm:mt-2">
                    {vinyls.filter((val) => {
                        return val.title.toLowerCase().includes(searchFilter.toLowerCase()) || val.genre.toLowerCase().includes(searchFilter.toLowerCase() || val.artist.toLowerCase().includes(searchFilter.toLowerCase()))
                    }).map((val: any) => (
                        <div key={val._id} className="w-full">
                            <CardVinyl keyCardPl={val._id}
                                linkPL={`/plan/${val._id}`}
                                linkTitlePL={`/plan/${val._id}`}
                                artistCardPL={(val.artiste === null || "") ? ('') : (val.artist)}
                                imgCardPL={(val.image != "") ? (val.image) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                                img2CardPL={(val.imageB != "") ? (val.imageB) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                                texteCardPL={val.subtitle}
                                priceCardPLEUR={(val.priceUSD === 0 || null) ? (`${val.priceEur}  €`) : (val.priceUSD + '  $')}
                                titleCardPL={val.title}
                                authorCardPL={val.author}
                                dateCardPL={val.createdAt}
                            />
                        </div>
                    ))}
                </div>
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
                    artiste
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