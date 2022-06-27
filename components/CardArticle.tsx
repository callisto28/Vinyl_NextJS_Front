
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


type Props = {
    keyCard: string,
    titleCard: string;
    linkTitle: string;
    imgCard?: string;
    link: string;
    texteCard: string;
    authorCard: string;
    dateCard: string;
}


const Card = ({ keyCard, linkTitle, link, texteCard, titleCard, authorCard, dateCard, imgCard }: Props) => {
    return (
        <div className="mx-1 border-2 border-blueCC rounded-4xl lg:max-w-md lg:h-128 sm:h-96 sm:w-96 flex flex-col justify-around sm:items-center px-3" key={keyCard}>
            <p className="text-black text-center my-2 ">Publié le : <span className='text-rougeCC'>{new Date(parseInt(dateCard)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>

            </p>
            <img src={imgCard} alt={titleCard} className="  object-contain lg:h-48 lg:w-96 sm:h-24 sm:w-28 p-2 border-y-2 " />


            <h1 className="text-blueCC lg:text-xl sm:text-base text-center font-philosopher first-letter:font-bold first-letter:text-black">{titleCard} </h1>
            <div className='text-ellipsis lg:overflow-visible sm:overflow-visible text-black text-justify flex items-center lg:text-sm sm:text-sm font-philosopher'>
                <p className="first-letter:text-xl first-letter:font-bold">
                    {texteCard}
                </p>
            </div>
            <div className='flex flex-col mt-2 mb-2  border-y-2'>
                <h4 className="text-gray-500 text-center text-xs font-chelsea"> auteur de l&apos;article : {authorCard.toUpperCase()}</h4>
            </div>
            <Link href={link} as={linkTitle} passHref ><button className='rounded-full hover:text-white bg-blueCC text-center px-5 font-philosophe font-bol transition-color duration-700 delay-200 animate-bounce-in-left mb-5 ' >&rarr; Voir plus</button></Link>
        </div>


    );
};

export default Card;