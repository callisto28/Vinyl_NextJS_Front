import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css'

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


const Card = ({ link, texteCard, titleCard, linkTitle, authorCard, dateCard, keyCard, imgCard }: Props) => {
    return (
        <div className="max-w-lg">
            <div className="h-auto">
                <div className="mx-1 rounded-lg shadow-lg bg-white border border-red-400 " key={keyCard}>
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded-t-lg" src={imgCard!} alt="" />
                    </a>
                    <div className="p-2 flex flex-col items-center justify-around">
                        <h1 className="text-gray-900 text-center">{titleCard} </h1>
                        <p className="text-gray-700 text-justify font-philosopher">
                            {texteCard.split(' ').slice(0, 50).join(' ') + '...'}
                        </p>
                        <div className='flex flex-col'>
                            <h3 className="text-gray-700 text-center font-chelsea">
                                {authorCard.toUpperCase()}
                            </h3>
                            <p className="text-gray-700 text-center font-philosopher">{new Date(parseInt(dateCard)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}

                            </p>
                        </div>

                        <Link href={link} as={linkTitle} passHref ><button className='rounded-full hover:text-white bg-red-500 text-center px-5 font-philosopher' >&rarr; Voir plus</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;