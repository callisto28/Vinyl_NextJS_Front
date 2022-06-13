
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
            <div className="flex flex-col items-center py-2 ">
                <div className="mx-1 border-2 bg-white bg-opacity-40 border-yellow-200 rounded-lg max-w-sm  h-128 flex flex-col justify-around items-center px-3 shadow-[inset_0_-20px_20px_-10px_#FEF08A] " key={keyCard}>
                    {/* <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light" > */}
                    <img src={imgCard} alt="" className=" object-contain h-48 w-96 p-2 rounded-4xl " />
                    {/* </a> */}

                    <h1 className="text-yellow-200  text-center first-letter:text-3xl first-letter:font-bold">{titleCard} </h1>
                    <div className='text-ellipsis overflow-hidden ...'>
                        <p className="text-black  text-justify font-philosopher first-letter:text-xl first-letter:font-bold">
                            {texteCard}
                        </p>
                    </div>


                    <p className="text-gray-200   text-center font-philosopher">{new Date(parseInt(dateCard)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}

                    </p>
                    <h3 className="text-gray-200 text-left font-light text-xs font-chelsea">
                        {authorCard.toUpperCase()}
                    </h3>


                    <Link href={link} as={linkTitle} passHref ><button className='rounded-full hover:text-white bg-yellow-200 text-center px-5 font-philosopher sm:mb-2 ' >&rarr; Voir plus</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Card;