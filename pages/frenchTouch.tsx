import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import Head from 'next/head';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper"


const urlYoutube = process.env.URL_YOUTUBE;
const apiYoutube = process.env.API_YOUTUBE;

const channelId = [
    "UCzRTcpx2XVUtJgMrSmQ3A2A", "UCdbh4LWeoSni9pL9SWSsCeg", "UCh_LABZ_faSEgN4lx6tc4Kg", "UCrZvbhsSDUnfm_TTLg1XxTA",
   
]
// dimitri =  UCh_LABZ_faSEgN4lx6tc4Kg


const bonplan = ({ data, data2 }: any) => {


    return (
        <div className="flex flex-col items-center py-2 ">
            <Head>
            <title>Liste des Youtubeurs Français, Unboxings</title>
                <meta name="description" content="Retrouver une séléction de Youtubeurs français présentant leur passion du vinyle, les unboxings, coup de coeur." />
                <meta property="og:title" content="Vidéo quotidienne des youtubeurs français" />
                <meta property="og:description" content="Retrouver une séléction de Youtubeurs français présentant leur passion du vinyle, les unboxings, coup de coeur. Les bons plan à l'étranger (Japon, USA" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80" />
                <meta property="og:url" content="https://vinyltouch.fr/frenchTouch" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="vinylTouch" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:locale:alternate" content="en_US" />
            </Head>

            {/* Chaine Youtube mis à l'honneur */}
            <div className="">
                <h2 className='font-bold text-2xl text-blueCC'> News de la French Touch Youtube</h2>
            </div>
            <div className='grid grid-flow-row gap-12 m-14'>
                <h3 className='font-bold text-l text-blueCC'>Retrouvez une chaîne mise à l&apos;honneur avec ses 3 dernières vidéos</h3>
                <ul className="grid lg:grid-cols-3 sm:grid-rows-1 lg:gap-x-8 sm:gap-y-2 text-center mx-auto">
                    {data.items.map((item: { id: any; snippet?: {} | undefined | any; }, index: React.Key | null | undefined) => {
                        const { id, snippet = {} } = item;
                        const { videoId } = id;
                        const { title, description, thumbnails = {}, publishedAt, channelTitle } = snippet;
                        const { medium = {} } = thumbnails;


                        return (

                            
                            <div key={index} className="lg:mx-1 shadow-lg shadow-gray-400 rounded-xl lg:max-w-sm sm:max-w-xs  h-full flex flex-col justify-around items-center px-3 bg-gradient-to-r from-green-start to-green-end">
                                <a href="#" >
                                    <h5 className="text-blueCC font-bold text-2xl tracking-tight mb-2 dark:text-blueCC">{channelTitle}</h5>
                                </a>
                                <a href="#" >
                                    <Image src={medium.url} alt={title} width={medium.width} height={medium.height} className="rounded-t-lg" />
                                </a>
                                <div className="p-5">
                                    <a href="#" >
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">{title}</h5>
                                    </a>
                                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-600">{moment(publishedAt).format('MMM DD, YYYY')}</p>
                                    <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                                        Regarder
                                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">

                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>

            {/* Liste des youtubeurs Français */}
            <div className="">
                <h2 className='font-bold text-2xl text-white'> La French Touch</h2>
            </div>
            <div className='grid grid-flow-row gap-12 m-14'>
                <h3 className='font-bold text-l text-blueCC'>Voici une liste des Youtubeurs Français parlant de vinyls</h3>
                <ul className="grid lg:grid-cols-3 sm:grid-rows-1 gap-8 text-center mx-auto">
                    {data2.items.map((item2: { contentDetails?: any; id?: any; snippet?: any; }, index2: React.Key | null | undefined) => {
                        const { id, snippet = {} } = item2;
                        const { title, description, thumbnails = {}, publishedAt, videoOwnerChannelTitle } = snippet;
                        const { medium = {} } = thumbnails;


                        return (
                            <div key={index2} className="lg:mx-1 shadow-lg shadow-gray-400 rounded-xl lg:max-w-sm sm:max-w-xs  h-full flex flex-col justify-around items-center px-3 bg-gradient-to-r from-green-start to-green-end">
                                <a href="#" >
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">{videoOwnerChannelTitle}</h5>
                                </a>
                                <a href="#" >
                                    <Image src={medium.url} alt={title} width={medium.width} height={medium.height} className="rounded-t-lg" />
                                </a>
                                <div className="p-5">
                                    <a href="#" >
                                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">{title}</h5>
                                    </a>
                                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-600">{moment(item2.contentDetails.videoPublishedAt).format('MMM DD, YYYY')}</p>
                                    <a href={`https://www.youtube.com/watch?v=${item2.contentDetails.videoId}`} target="_blank" rel="noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                                        Regarder
                                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">

                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default bonplan;



export async function getServerSideProps() {

    const response = await fetch(`${urlYoutube}search?part=snippet&channelId=UCh_LABZ_faSEgN4lx6tc4Kg&maxResults=3&order=date&key=${apiYoutube}`)
    const playlist = await fetch(`${urlYoutube}playlistItems?part=contentDetails&part=snippet&maxResults=25&playlistId=PLUCBUMaWPhpKMbhmQcp_mIPA7H5ipOrbi&key=${apiYoutube}`)
    const data = await response.json()
    const data2 = await playlist.json()

    return {
        props: {
            data, data2
        },
    };
}