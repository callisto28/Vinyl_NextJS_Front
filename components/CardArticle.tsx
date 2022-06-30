
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
        <div className="">
            <div className="my-3">
                <div className="mx-1 border-2 border-blueCC rounded-4xl max-w-sm  h-full flex flex-col justify-around items-center px-3" key={keyCard}>
                    <p className="text-black text-center ">Publié le : <span className='text-rougeCC'>{new Date(parseInt(dateCard)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>

                    </p>

                    <div className='flex justify-center items-center flex-shrink-0 mr-6 cursor-pointer'>
                        <img src={imgCard} alt={titleCard} className=" object-contain h-48 w-96 p-2 border-y-2 " />
                    </div>


                    <h1 className="text-blueCC text-xl text-center font-philosopher h-7">{titleCard} </h1>
                    <div className='text-ellipsis overflow-hidden... text-black text-justify flex items-center text-base font-philosopher h-48'>
                        <p className="first-letter:text-xl first-letter:font-bold font-philosopher">
                            {texteCard}
                        </p>
                    </div>
                    <div className='flex flex-col mb-2'>
                        <h4 className="text-gray-500 text-center text-xs font-chelsea"> auteur de l&apos;article : {authorCard.toUpperCase()}</h4>
                    </div>
                    <Link href={link} as={linkTitle} passHref ><button className='rounded-full hover:text-white bg-blueCC text-center px-5 font-philosophe font-bol transition-color duration-700 delay-200 animate-bounce-in-left mb-5 ' >&rarr; Voir plus</button></Link>
                </div>
            </div>
        </div>


    );
};

export default Card;