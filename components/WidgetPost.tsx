import Link from 'next/link';
import React from 'react';


export const WidgetPostVinyl = ({ plans }: any) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 pb-10 mb-8">


            {plans.map((vinyl, index) => (
                <div key={index}>
                    <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Sortie Vinyle'}</h3>
                    <a className="flex flex-col items-center cursor-pointer">


                        <div className="text-center text-lg">{vinyl.title}</div>

                        <Link href={`/plan/${vinyl._id}`} key={plans.slug} passHref>
                            <img src={vinyl.image} alt={vinyl.title} className="w-24 h-24 rounded-full mr-4" />
                        </Link>

                        <div className="text-xs text-gray-600">{new Date(parseInt(vinyl.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                    </a>

                </div>

            ))}


        </div>
    )
}




export const WidgetPostMaterial = ({ material }: any) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 pb-10 mb-8">
            {material.map((material, index) => (
                <div key={index}>
                    <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Dernier hifi'}</h3>
                    <a className="flex flex-col items-center cursor-pointer">


                        <div className="text-center text-lg">{material.title}</div>

                        <Link href={`/material/${material._id}`} key={material.slug} passHref>
                            <img src={material.image} alt={material.title} className="w-24 h-24 rounded-full mr-4" />
                        </Link>

                        <div className="text-xs text-gray-600">{new Date(parseInt(material.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                    </a>
                </div>
            ))}

        </div>
    )
};

export const WidgetPostDesk = ({ desk }: any) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 pb-10 mb-8">


            {desk.map((desk, index) => (
                <div key={index}>
                    <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Dernier meuble'}</h3>
                    <a className="flex flex-col items-center cursor-pointer">


                        <div className="text-center text-lg">{desk.title}</div>

                        <Link href={`/desk/${desk._id}`} key={desk.slug} passHref>
                            <img src={desk.image} alt={desk.title} className="w-24 h-24 rounded-full mr-4" />
                        </Link>

                        <div className="text-xs text-gray-600">{new Date(parseInt(desk.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                    </a>

                </div>

            ))}


        </div>
    )
}




export default WidgetPostVinyl;
WidgetPostMaterial;
WidgetPostDesk;