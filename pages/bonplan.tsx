import React from 'react';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import CardPlan from '../components/CardPlan';

const bonplans = ({ vinyls, materials, desks }) => {

    return (
        <div className="container mx-auto px-10 mb-8 flex flex-wrap justify-center">
            <div className="flex flex-wrap">

                {
                    vinyls.map((plan: any) => (
                        <div key={plan._id}>
                            <div className='flex flex-row justify-center items-center m-2'>
                                <h1 className='text-2xl font-bold px-4 text-purple-500 bg-black bg-opacity-50 rounded-md'>Sortie Vinyl</h1>
                                <img src="./headphone-front-color.png" width={50} height={50} />
                            </div>

                            <CardPlan keyCardPl={plan._id}
                                linkPL={`/plan/${plan._id}`}
                                linkTitlePL={`/plan/${plan._id}`}
                                imgCardPL={(plan.image != "") ? (plan.image) : ('https://st2.depositphotos.com/1177973/5403/i/600/depositphotos_54030941-stock-photo-vinyl-records-and-paper-covers.jpg')}
                                texteCardPL={plan.description}
                                priceCardPL={plan.price}
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
                                <h1 className='text-2xl font-bold px-4 text-purple-500 bg-white bg-opacity-50 rounded-md'>Materiel Hifi</h1>
                                <img src="./mic-front-premium.png" width={50} height={50} />
                            </div>

                            <CardPlan keyCardPl={material._id}
                                linkPL={`/material/${material._id}`}
                                linkTitlePL={`/material/${material._id}`}
                                imgCardPL={(material.image != "https://www.*.*") ? (material.image) : ('https://static7.depositphotos.com/1014680/763/i/600/depositphotos_7631069-stock-photo-sound-amplifier.jpg')}
                                texteCardPL={material.description}
                                priceCardPL={material.price}
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
                                <h1 className='text-2xl font-bold px-4 text-purple-500 bg-black bg-opacity-50 rounded-md'>Rangement</h1>
                                <img src="./bag-front-premium.png" width={50} height={50} />
                            </div>
                            <CardPlan keyCardPl={desk._id}
                                linkPL={`/desk/${desk._id}`}
                                linkTitlePL={`/desk/${desk._id}`}
                                imgCardPL={(desk.image != " ") ? (desk.image) : ('https://www.on-mag.fr/images/stories/2016/08/gal_idees_rangement_vinyle/meuble-commode-pour-disques-vinyles-800x534.jpg')}
                                texteCardPL={desk.description}
                                priceCardPL={desk.price}
                                titleCardPL={desk.title}
                                authorCardPL={desk.author}
                                dateCardPL={desk.createdAt} />
                        </div>
                    )
                    )
                }
                <div className="text-center py-4">
                </div>
            </div >
        </div>
    );
}



export default bonplans;

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
       query getPlan {
            getVinylFeatured {
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
            }
            
            }
      `,
    });

    return {
        props: {
            vinyls: data.getVinylFeatured,
            materials: data.getMaterialFeatured,
            desks: data.getDeskFeatured
        },
    };
}