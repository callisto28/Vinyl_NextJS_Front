import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const Card = ({ link, texteCard, titleCard }) => {
    return (
        <div className="max-w-xs">
            <div className="border border-red-400 rounded-lg">
                <div className="rounded-lg shadow-xl bg-slate-300 ">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded-t-lg object-cover h-48 w-96" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{titleCard} &rarr;</h5>
                        <p className="text-gray-700 text-center text-sm mb-4">
                            {texteCard}
                        </p>
                        <Link href={link} className='bg-blue-200'><button >Y aller</button></Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;