
import Link from 'next/link';
import React, { useState } from 'react';


type PropsVinyl = {
    keyCardPl: string;
    linkTitlePL: string;
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


const CardVinyl = ({ keyCardPl, linkTitlePL, linkPL, texteCardPL, titleCardPL, authorCardPL, dateCardPL, img2CardPL, imgCardPL, priceCardPLEUR }: PropsVinyl) => {

    const date = new Date(parseInt(dateCardPL)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' });

    const newDate = date.toString().split(" ").slice(0, 3).join(" ");

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (

        <div className="">
            <div className="">
                <div className="mx-1 border-2 border-blueCC rounded-4xl max-w-sm  h-full flex flex-col justify-around items-center px-3  " key={keyCardPl}>
                    <p className="text-black text-center ">Publié le : <span className='text-rougeCC'>{newDate}</span>

                    </p>
                    <Link href={linkPL} as={linkTitlePL} passHref ><div
                        className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {isHovering ? (
                            <img src={img2CardPL} alt="" className=" object-contain h-48 w-96 p-2 border-y-2" />
                        ) : (
                            <img src={imgCardPL} alt="" className=" object-contain h-48 w-96 p-2 border-y-2" />
                        )}
                    </div></Link>
                    <Link href={linkPL} as={linkTitlePL} passHref ><h1 className="cursor-pointer text-blueCC hover:text-blue-500 text-xl text-center font-philosopher">{titleCardPL} </h1></Link>
                    <div className='text-ellipsis overflow-hidden... text-black text-justify flex items-center text-base font-philosopher h-48'>
                        <p className="first-letter:text-xl first-letter:font-bold">
                            {texteCardPL}
                        </p>
                    </div>
                    <div className='text-ellipsis overflow-hidden ... mb-2'>
                        <p className="text-blue-600 text-justify border-y-2 border-red-500 font-philosopher">
                            Prix de vente : <span className='text-xl text-black'> {priceCardPLEUR}</span>
                        </p>
                    </div>

                    <div className='flex flex-col mb-2'>
                        <h4 className="text-gray-500 text-center text-xs font-chelsea"> auteur de l&apos;article : {authorCardPL.toUpperCase()}</h4>


                    </div>

                    <Link href={linkPL} as={linkTitlePL} passHref ><button className='rounded-full hover:text-white bg-blueCC text-center px-5 font-philosophe font-bol transition-color duration-700 delay-200 animate-bounce-in-left mb-5' >&rarr; Voir plus</button></Link>
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
            <div className="">
                <div className="mx-1 border-2 border-blueCC rounded-4xl max-w-sm  h-full flex flex-col justify-around items-center px-3  " key={keyCardPl}>
                    <p className="text-black text-center ">Publié le : <span className='text-rougeCC'>{newDate}</span>

                    </p>
                    <Link href={linkPL} as={linkTitlePL} passHref ><img src={imgCardPL} alt="" className=" cursor-pointer object-contain h-48 w-96 p-2 border-y-2" /></Link>



                    <Link href={linkPL} as={linkTitlePL} passHref ><h1 className="cursor-pointer text-blueCC hover:text-blue-500 text-xl text-center font-philosopher">{titleCardPL} </h1></Link>
                    <div className='text-ellipsis overflow-hidden... text-black text-justify flex items-center text-base font-philosopher h-48'>
                        <p className="">
                            {texteCardPL}
                        </p>
                    </div>
                    <div className='text-ellipsis overflow-hidden ... mb-2'>
                        <p className="text-blue-600 text-justify border-y-2 border-red-500 font-philosopher">
                            Prix de vente : <span className='text-xl text-black'> {priceCardPLEUR}</span>
                        </p>
                    </div>

                    <div className='flex flex-col mb-2'>
                        <h4 className="text-gray-500 text-center text-xs font-chelsea"> auteur de l&apos;article : {authorCardPL.toUpperCase()}</h4>


                    </div>

                    <Link href={linkPL} as={linkTitlePL} passHref ><button className='rounded-full hover:text-white bg-blueCC text-center px-5 font-philosophe font-bol transition-color duration-700 delay-200 animate-bounce-in-left mb-5' >&rarr; Voir plus</button></Link>
                </div>

            </div>
        </div>

    );
};

export default Card;
export { CardVinyl };