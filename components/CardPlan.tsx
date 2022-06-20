
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
                <div className="mx-1 border-2 border-blueCC rounded-4xl max-w-sm  h-128 flex flex-col justify-around items-center px-3  " key={keyCardPl}>
                    <p className="text-black text-center ">Publié le : <span className='text-rougeCC'>{new Date(parseInt(dateCardPL)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>

                    </p>
                    <img src={imgCardPL} alt="" className=" object-contain h-48 w-96 p-2 border-y-2" />


                    <h1 className="text-blueCC text-xl text-center font-philosopher">{titleCardPL} </h1>
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
                                                    bg-blueCC text-center
                                                    px-5 font-philosopher
                                                    font-bold
                                                    transition-color duration-700 delay-200 
                                                    animate-bounce-in-left
                                                    mb-5
                                                    
                                                    ' >&rarr; Voir plus</button></Link>
                </div>

            </div>
        </div>

    );
};

export default Card;