
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

    const date = new Date(parseInt(dateCardPL)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' });
    console.log(date, "date");
    const newDate = date.toString().split(" ").slice(0, 3).join(" ");
    console.log(newDate, "newDate");


    return (

        <div className="">
            <div className="">
                <div className="mx-1 border-2 border-blueCC rounded-4xl max-w-sm  h-full flex flex-col justify-around items-center px-3  " key={keyCardPl}>
                    <p className="text-black text-center ">Publié le : <span className='text-rougeCC'>{newDate}</span>

                    </p>
                    <img src={imgCardPL} alt="" className=" object-contain h-48 w-96 p-2 border-y-2" />


                    <h1 className="text-blueCC text-xl text-center font-philosopher">{titleCardPL} </h1>
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

                    <Link href={linkPL} as={linkTitlePL} passHref ><button className='rounded-ful text-white hover:text-white bg-blueCC hover:bg-blue-700 text-cente px-5 font-philosophe font-bol transition-color duration-700 delay-20 animate-bounce-in-lef mb-5' >&rarr; Voir plus</button></Link>
                </div>

            </div>
        </div>

    );
};

export default Card;