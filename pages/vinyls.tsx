import React, { useEffect, useState } from 'react';
import { CardVinyl } from '../components/CardPlan';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Head from 'next/head';
import Checkbox from '../components/Checkbox';
import { GetServerSideProps } from 'next';
import Sponsor from '../components/Sponsor';


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
                <title> Vinyles | Promotion | Prix</title>
                
                <meta name="description" content="Liste des derniers vinyles mise en vente sur diffèrentes plateformes, les promotions, petit prix, les pré-commandes, les exclus" />
                <meta property="og:title" content="Accueil articles bons plan vinyles, hifi, rangements" />
                <meta property="og:description" content="Tous les bons plan, promotions, meilleurs prix, réductions, dernieres sorties, vinyles, meubles, rangements, hifi, sound" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80" />
                <meta property="og:url" content="https://vinyltouch.fr/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="vinylTouch" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:locale:alternate" content="en_US" />

            </Head>
            <div className='flex lg:flex-row sm:flex-col '>
                <div className=' lg:w-1/4 flex lg:flex-col sm:flex-col lg:items-center lg:content-between sm:items-center lg:m-4 pb-2 '>
                    <div className='lg:fixed sm:relative lg:flex-none mx-5'>
                        <div className='text-center'>
                            <h4 className='lg:text-base sm:text-sm flex justify-center'>  <Checkbox label={undefined} id={undefined} /> </h4>

                        </div>
                        <input type="text"
                            name='searchBar'
                            className="lg:w-auto sm:w-64 px-3 py-2 rounded-lg mx-2 border-2 border-blueCC focus:ring-1 focus:ring-pink-500 focus:outline-none lg:text-base sm:text-xs text-justify"
                            placeholder="Rechercher par titre, vendeur, genre..."
                            onChange={handleSubmit}
                        ></input>
                        <Sponsor/>
                        <br/>
                        <div className='flex flex-col justify-center items-center pt-4'>
                            <p className='text-xs'>Profitez de la promotion de notre partenaire avec un acces gratuit de 30 jours</p>
                        <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=8&p=12&l=ur1&category=amu&banner=0W6DT14R33AATJW5E682&f=ifr&linkID=b7b3c3b23600e1ac30182bfec7282725&t=vinyltouch-21&tracking_id=vinyltouch-21" width="300" height="250" scrolling="no"  frameBorder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>

                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-col sm:flex-wrap lg:w-2/3 lg:border-l-2 sm:border-t-2">
                    {vinyls.filter((val) => {
                        return val.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                            val.genre.toLowerCase().includes(searchFilter.toLowerCase()) ||                        
                            val.release.toLowerCase().includes(searchFilter.toLowerCase()) ||
                            val.artiste.toLowerCase().includes(searchFilter.toLowerCase())
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
                                promoCardPl={val.promo}
                                authorCardPL={val.author}
                                dateCardPL={val.createdAt}
                                releaseCardPL={val.release}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Vinyls;

export const getServerSideProps: GetServerSideProps = async ()  => {
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
                    promo
                    seller
                    author
                    featured
                    slug
                    release
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