
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
            <div className="">
                <div className="mx-1 bg-white shadow-md border border-red-400 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-128 flex flex-col justify-around items-center px-3 " key={keyCard}>
                    {/* <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light" > */}
                    <img src={imgCard} alt="" className=" object-contain h-48 w-96 p-2" />
                    {/* </a> */}

                    <h1 className="text-gray-900 text-center">{titleCard} </h1>
                    <div className='text-ellipsis overflow-hidden ...'>
                        <p className="text-gray-700 text-justify font-philosopher">
                            {texteCard}
                        </p>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className="text-gray-700 text-center font-chelsea">
                            {authorCard.toUpperCase()}
                        </h3>
                        <p className="text-gray-700 text-center font-philosopher">{new Date(parseInt(dateCard)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}

                        </p>
                    </div>

                    <Link href={link} as={linkTitle} passHref ><button className='rounded-full hover:text-white bg-red-500 text-center px-5 font-philosopher ' >&rarr; Voir plus</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Card;