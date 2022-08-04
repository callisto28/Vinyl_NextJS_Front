/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';


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
            <div className="my-3 ">
                <div className=" lg:mx-1 shadow-lg shadow-gray-400 rounded-xl lg:max-w-sm sm:max-w-xs  h-full flex flex-col justify-around items-center px-3 bg-gradient-to-r from-green-start to-green-end" key={keyCard}>
                    <p className="text-black text-center ">Publié le : <span className='text-rougeCC'>{new Date(parseInt(dateCard)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>

                    </p>

                    <div className='flex justify-center items-center flex-shrink-0  cursor-pointer hover:translate-x-2'>
                        <Link href={link} as={linkTitle}><img src={imgCard} alt={titleCard} className=" object-contain h-48 w-96 p-2 border-y-2 " />
                        </Link>


                    </div>


                    <Link href={link} as={linkTitle}><h1 className="text-blueCC lg:text-xl sm:text-base text-center font-philosopher h-9  cursor-pointer">{titleCard} </h1></Link>
                    <div className='text-ellipsis overflow-hidden... text-black text-justify flex items-center text-base font-philosopher h-48'>
                        <p className="first-letter:text-xl first-letter:font-bold lg:text-base sm:text-xs font-philosopher">
                            {texteCard}
                        </p>
                    </div>
                    <div className='flex flex-col mb-2'>
                        <h4 className="text-gray-500 text-center text-xs font-chelsea h-9"> auteur de l&apos;article : {authorCard.toUpperCase()}</h4>
                    </div>
                    <Link href={link} as={linkTitle} passHref >
                        <Button textButton=" &rarr; En détail" link={link} linkPl={linkTitle} />
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default Card;