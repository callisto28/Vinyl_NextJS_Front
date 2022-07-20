import React, { useEffect, useState } from 'react';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Head from 'next/head';
import Card, { CardVinyl } from '../components/CardPlan';
import Checkbox from '../components/Checkbox';

import Image from 'next/image';
import { title } from 'process';


const Bonplans = ({ vinyls, materials, desks, all }) => {

    const [filter, setFilter] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');
    console.log(searchFilter, 'search');


    useEffect(() => {
        setFilter(vinyls || materials || desks);
    }
        , [desks, materials, vinyls]);
    console.log(filter);

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
                <title>promotiom | news | sortie</title>
                <meta name="description" content="Tous les bons plan, promotions, petit prix, réductions, dernieres sorties, vinyles, meubles, rangements, accessoires, hifi, sound" />
                <meta property="og:title" content="promotiom | news | sortie" />
                
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta property="og:description" content="Tous les bons plan, promotions, petit prix, réductions, dernieres sorties, vinyles, meubles, rangements, accessoires, hifi, sound" />
                <meta property="og:description" content="Tous les bons plan, promotions, meilleurs prix, réductions, dernieres sorties, vinyles, meubles, rangements, accessoires, hifi, sound" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80" />
                <meta property="og:url" content="https://vinyltouch.fr/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="vinylTouch" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:locale:alternate" content="en_US" />
            </Head>
            <div className="flex lg:flex-row sm:flex-col">
                <div className='lg:w-1/4 flex lg:flex-col sm:flex-col lg:items-center lg:content-between sm:items-center lg:m-4  '>
                    <div className='lg:fixed sm:relative lg:flex-none mx-5'>
                        <div className='text-center'>
                            <h4 className='lg:text-base sm:text-sm flex justify-center'>  <Checkbox label={undefined} id={undefined} /> </h4>

                        </div>
                        <input type="text"
                            name='searchBar'
                            className="lg:w-96 sm:w-64 px-3 py-2 rounded-lg mx-2 border-2 border-blueCC focus:ring-1 focus:ring-pink-500 focus:outline-none lg:text-base sm:text-xs text-justify "
                            placeholder="Rechercher..."
                            onChange={handleSubmit}
                        ></input>
                        <p className='text-justify text-sm px-2'>Un partage de tous les derniers bon plans que l&apos;on peut retrouver sur la toile tous ces on plan seront essentiellement tourner autour du sillon. De lámeublement du materiel hifi et bien plus encore...</p>

                    </div>

                </div>

                < div className="flex lg:flex-col sm:flex-wrap lg:w-2/3 lg:border-l-2 sm:border-t-2" >
                    {vinyls.filter((plan) => {
                        return plan.title.toLowerCase().includes(searchFilter.toLowerCase()) || plan.genre.toLowerCase().includes(searchFilter.toLowerCase() || plan.artist.toLowerCase().includes(searchFilter.toLowerCase()))
                    })

                        .map((plan: any) => (
                            <div key={plan._id} className=" lg:px-none sm:px-2">
                                <div className='flex flex-row justify-center  items-center m-2'>
                                    <h1 className='text-2xl font-semibold px-3 text-black rounded-md'>Sortie Vinyl</h1>
                                    <Image src="/headphone-front-color.png" width={20} height={20} alt="logo headphone" />
                                </div>

                                <CardVinyl keyCardPl={plan._id}
                                    linkPL={`/plan/${plan._id}`}
                                    linkTitlePL={`/plan/${plan._id}`}
                                    artistCardPL={plan.artiste}
                                    imgCardPL={(plan.image != "") ? (plan.image) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                                    texteCardPL={plan.subtitle}
                                    priceCardPLEUR={(plan.priceUSD === 0) ? (`${plan.priceEur}  €`) : (plan.priceUSD + '  $')}
                                    img2CardPL={(plan.imageB != "") ? (plan.imageB) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                                    titleCardPL={plan.title}
                                    authorCardPL={plan.author}
                                    dateCardPL={plan.createdAt} />
                            </div>
                        )
                        )
                    }
                    {materials.filter((material) => {
                        return material.title.toLowerCase().includes(searchFilter.toLowerCase()) || material.description.toLowerCase().includes(searchFilter.toLowerCase())
                    })

                        .map((material: any) => (

                            <div key={material._id}>
                                <div className='flex flex-row justify-center items-center m-2 '>
                                    <h1 className='text-2xl font-semibold px-4 text-black rounded-md'>Materiel Hifi</h1>
                                    <Image src="/mic-front-premium.png" width={20} height={20} alt="logo mic" />
                                </div>

                                <Card keyCardPl={material._id}
                                    linkPL={`/material/${material._id}`}
                                    linkTitlePL={`/material/${material._id}`}
                                    imgCardPL={(material.image != "https://www.*.*") ? (material.image) : ('https://static7.depositphotos.com/1014680/763/i/600/depositphotos_7631069-stock-photo-sound-amplifier.jpg')}
                                    texteCardPL={material.description}
                                    priceCardPLEUR={`${material.price} €`}
                                    titleCardPL={material.title}
                                    authorCardPL={material.author}
                                    dateCardPL={material.createdAt} />
                            </div>
                        )
                        )
                    }
                    {desks.filter((desk) => {
                        return desk.title.toLowerCase().includes(searchFilter.toLowerCase()) || desk.description.toLowerCase().includes(searchFilter.toLowerCase())
                    })
                        .map((desk: any) => (
                            <div key={desk._id}>
                                <div className='flex flex-row justify-center items-center m-2'>
                                    <h1 className='text-2xl font-semibold px-4 text-black rounded-md'>Rangement et accesoires</h1>
                                    <Image src="/bag-front-premium.png" width={20} height={20} alt="logo mic" />
                                </div>
                                <Card keyCardPl={desk._id}
                                    linkPL={`/desk/${desk._id}`}
                                    linkTitlePL={`/desk/${desk._id}`}
                                    imgCardPL={(desk.image != " ") ? (desk.image) : ('https://www.on-mag.fr/images/stories/2016/08/gal_idees_rangement_vinyle/meuble-commode-pour-disques-vinyles-800x534.jpg')}
                                    texteCardPL={desk.description}
                                    priceCardPLEUR={`${desk.price} €`}
                                    titleCardPL={desk.title}
                                    authorCardPL={desk.author}
                                    dateCardPL={desk.createdAt} />
                            </div>
                        )
                        )
                    }
                    < div className="text-center py-4" >
                    </div>
                </div>

            </div >
        </>
    );
}



export default Bonplans;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
       query getPlan {
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
            getMaterialFeatured {
                _id
                author
                createdAt
                title
                description
                image
                referral_url
                price
                seller
                featured
            }
            getDeskFeatured {
                _id
                author
                createdAt
                title
                description
                image
                referral_url
                price
                seller
                featured
                slug
            }
            
            }
      `,
    });

    return {
        props: {
            vinyls: data.getVinylFeatured,
            materials: data.getMaterialFeatured,
            desks: data.getDeskFeatured,
            all: data.getVinylFeatured.concat(data.getMaterialFeatured, data.getDeskFeatured)

        },
    };
}