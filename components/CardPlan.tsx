
import Link from 'next/link';
import React, { useState } from 'react';


type PropsVinyl = {
    keyCardPl: string;
    linkTitlePL: string;
    artistCardPL: string;
    linkPL: string;
    texteCardPL: string;
    titleCardPL: string;
    authorCardPL: string;
    dateCardPL: string;
    imgCardPL: string;
    img2CardPL: string;
    priceCardPLEUR: number | string;
}

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


const CardVinyl = ({ keyCardPl, linkTitlePL, linkPL, artistCardPL, texteCardPL, titleCardPL, authorCardPL, dateCardPL, img2CardPL, imgCardPL, priceCardPLEUR }: PropsVinyl) => {

    const date = new Date(parseInt(dateCardPL)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' });

    const newDate = date.toString().split(" ").slice(0, 3).join(" ");

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (

        <div className="">
            <div className="flex flex-col m-2">
                <div className="flex flex-row px-3 border-b-2 border-blueCC my-2 p-4  " key={keyCardPl}>
                    <div className='w-1/3 flex justify-center'>
                        <Link href={linkPL} as={linkTitlePL} passHref ><div

                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            {isHovering ? (
                                <img src={img2CardPL} alt="" className=" cursor-pointer object-contain h-48 w-96 p-2" />
                            ) : (
                                <img src={imgCardPL} alt="" className=" cursor-pointer object-contain h-48 w-96 p-2" />
                            )}</div></Link>
                    </div>
                    <div className='w-2/3 flex flex-col justify-between'>
                        <p className="text-black flex items-start text-xs ">Publié le : <span className='text-rougeCC font-philosopher font-bold'>{newDate}</span></p>
                        <Link href={linkPL} as={linkTitlePL} passHref >
                            <h1 className="cursor-pointer 
                            text-blueCC 
                            hover:text-blue-500 
                            text-xl first-letter:font-bold 
                            text-center font-philosopher">{titleCardPL} </h1></Link>
                        <h2 className='text-lg first-letter:font-semibold text-center font-philosopher'>{artistCardPL}</h2>
                        <div className='text-ellipsis overflow-hidden... w-full text-black text-base font-philosopher first-letter:font-bold'>
                            <p className="first-letter:text-xl first-letter:font-bold">{texteCardPL}</p>
                        </div>
                        <div className='flex items-center flex-col my-2'>
                            <p className="text-blue-600 text-justify border-y-2 border-red-500 font-philosopher lg:text-base sm:text-sm mb-2">
                                Prix de vente : <span className='text-xl text-black'> {priceCardPLEUR}</span>
                            </p>
                            <Link href={linkPL} as={linkTitlePL} passHref >
                                <button className='rounded-2xl hover:text-white bg-blueCC hover:bg-blue-500 text-center px-3 h-8 font-philosopher lg:text-base sm:text-sm  ' >
                                    &rarr; Voir plus</button></Link>

                        </div>
                        <h4 className="text-gray-500 text-center text-xs font-chelsea"> auteur de l&apos;article : {authorCardPL.toUpperCase()}</h4>


                    </div>
                </div>
            </div>
        </div>

    );
};

const Card = ({ keyCardPl, linkTitlePL, linkPL, texteCardPL, titleCardPL, authorCardPL, dateCardPL, imgCardPL, priceCardPLEUR }: Props) => {

    const date = new Date(parseInt(dateCardPL)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' });

    const newDate = date.toString().split(" ").slice(0, 3).join(" ");



    return (

        <div className="">
            <div className="flex flex-col m-2">
                <div className="flex flex-row px-3 border-b-2 border-blueCC my-2 p-4  " key={keyCardPl}>
                    <div className='w-1/3 flex justify-center'>
                        <Link href={linkPL} as={linkTitlePL} passHref ><img src={imgCardPL} alt={titleCardPL} className=" cursor-pointer object-contain h-48 w-96 p-2" /></Link>
                    </div>
                    <div className='w-2/3 flex flex-col justify-between'>
                        <p className="text-black flex items-start text-xs ">Publié le : <span className='text-rougeCC font-philosopher font-bold'>{newDate}</span></p>
                        <Link href={linkPL} as={linkTitlePL} passHref >
                            <h1 className="cursor-pointer 
                            text-blueCC 
                            hover:text-blue-500 
                            text-xl first-letter:font-bold 
                            text-center font-philosopher">{titleCardPL} </h1></Link>
                        <div className='text-ellipsis overflow-hidden... w-full text-black text-base font-philosopher first-letter:font-bold'>
                            <p className="first-letter:text-xl first-letter:font-bold">{texteCardPL}</p>
                        </div>
                        <div className='flex items-center flex-col my-2'>
                            <p className="text-blue-600 text-justify border-y-2 border-red-500 font-philosopher">
                                Prix de vente : <span className='text-xl text-black'> {priceCardPLEUR}</span>
                            </p>
                            <Link href={linkPL} as={linkTitlePL} passHref >
                                <button className='rounded-full hover:text-white bg-blueCC hover:bg-blue-500 text-center px-3 h-8 font-philosophe font-bol transition-color duration-700 delay-200 animate-bounce-in-left' >
                                    &rarr; Voir plus</button></Link>

                        </div>
                        <h4 className="text-gray-500 text-center text-xs font-chelsea"> auteur de l&apos;article : {authorCardPL.toUpperCase()}</h4>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;
export { CardVinyl };


