import React, { useState } from 'react';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Head from 'next/head';
import Card, { CardVinyl } from '../components/CardPlan';
import Checkbox from '../components/Checkbox';
import Filter from '../components/Filter';
import Image from 'next/image';

const Bonplans = ({ vinyls, materials, desks, all }) => {



    return (
        <>
            <Head>
                <title>promotiom | news | sortie</title>
                <meta name="description" content="Tous les bons plan, promotions, petit prix, réductions, dernieres sorties, vinyles, meubles, rangements, hifi, sound" />
                <meta property="og:title" content="promotiom | news | sortie" />
                <meta property="og:description" content="Tous les bons plan, promotions, petit prix, réductions, dernieres sorties, vinyles, meubles, rangements, hifi, sound" />
                <meta property="og:image" content="https://unsplash.com/photos/zKT64MtVKQ0" />
                <meta property="og:url" content="https://vinyl-next-js-front.vercel.app/bonplan" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="vinylTouch" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:locale:alternate" content="en_US" />



            </Head>
            <div className="flex lg:flex-row sm:flex-col">
                <div className='lg:w-1/3 flex lg:flex-col sm:flex-col lg:items-start lg:content-between sm:items-center lg:m-4 lg:border-r-2 sm:border-b-2'>
                    <h4>Rechercher par titre d&apos;album, artiste, genre</h4>

                    {/* <input type="text"
                        name='searchBar'
                        className=" w-full px-3 py-2 rounded-lg mx-2 border-2 border-blueCC focus:ring-1 focus:ring-pink-500 focus:outline-none"
                        placeholder="Rechercher par titre d&apos;album, artiste ou genre"
                        onChange={handleSubmit}
                    /> */}

                </div>


                < div className="flex lg:flex-col sm:flex-wrap lg:w-2/3" >


                    {
                        vinyls.map((plan: any) => (
                            <div key={plan._id}>
                                <div className='flex bg justify-center  items-center m-2'>
                                    <h1 className='text-2xl font-semibold px-4 text-black rounded-md'>Sortie Vinyl</h1>
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
                    {
                        materials.map((material: any) => (

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
                    {
                        desks.map((desk: any) => (
                            <div key={desk._id}>
                                <div className='flex flex-row justify-center items-center m-2'>
                                    <h1 className='text-2xl font-semibold px-4 text-black rounded-md'>Rangement</h1>
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

export async function getStaticProps() {
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