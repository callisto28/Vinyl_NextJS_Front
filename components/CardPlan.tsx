
import Link from 'next/link';
import React from 'react';


type Props = {
    keyCardPl: string;
    linkTitlePL: string;
    linkPL: string;
    texteCardPL: string;
    titleCardPL: string;
    authorCardPL: string;
    dateCardPL: string;
    imgCardPL: string;
    priceCardPLEUR: number | string;


}


const Card = ({ keyCardPl, linkTitlePL, linkPL, texteCardPL, titleCardPL, authorCardPL, dateCardPL, imgCardPL, priceCardPLEUR }: Props) => {
    return (
        <div className="">
            <div className="">
                <div className="mx-1 border-2 bg-white bg-opacity-40 border-purple-500 rounded-lg max-w-sm  h-128 flex flex-col justify-around items-center px-3 shadow-[inset_0_-20px_20px_-10px_#B625E4] " key={keyCardPl}>
                    {/* <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light" > */}
                    <p className="text-black text-center ">Publié le : <span className='text-purple-800'>{new Date(parseInt(dateCardPL)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>

                    </p>
                    <img src={imgCardPL} alt="" className=" object-contain h-48 w-96 p-2 border-y-2" />
                    {/* </a> */}

                    <h1 className="text-purple-600 text-xl text-center font-philosopher">{titleCardPL} </h1>
                    <div className='text-ellipsis overflow-hidden ...'>
                        <p className="text-black text-justify text-base font-philosopher">
                            {texteCardPL}
                        </p>
                    </div>
                    <div className='text-ellipsis overflow-hidden ...'>
                        <p className="text-white text-justify border-y-2 border-red-500 font-philosopher">
                            {priceCardPLEUR}
                        </p>
                    </div>

                    <div className='flex flex-col'>
                        <h4 className="text-gray-300 text-center text-xs font-chelsea border-b-2">
                            {authorCardPL.toUpperCase()}
                        </h4>

                    </div>

                    <Link href={linkPL}
                        as={linkTitlePL}
                        passHref ><button className='rounded-full
                                                    hover:text-white
                                                    bg-purple-500 text-center
                                                    px-5 font-philosopher
                                                    font-bold
                                                    transition-color duration-700 delay-500 
                                                    animate-bounce-in-left
                                                    mb-5
                                                    
                                                    ' >&rarr; Voir plus</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Card;