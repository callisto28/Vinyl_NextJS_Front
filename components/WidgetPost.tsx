import Link from 'next/link';
import React from 'react';


export const WidgetPostVinyl = ({ plans }: any) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 pb-10 mb-8">


            {plans.map((post, index) => (
                <div key={index}>
                    <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Sortie Vinyle'}</h3>
                    <a className="flex flex-col items-center cursor-pointer">


                        <div className="text-center text-lg">{post.title}</div>

                        <Link href={`/plan/${post._id}`} key={plans.slug} passHref>
                            <img src={post.image} alt={post.title} className="w-24 h-24 rounded-full mr-4" />
                        </Link>

                        <div className="text-xs text-gray-600">{new Date(parseInt(post.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
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
            {material.map((post, index) => (
                <div key={index}>
                    <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Dernier hifi'}</h3>
                    <a className="flex flex-col items-center cursor-pointer">


                        <div className="text-center text-lg">{post.title}</div>

                        <Link href={`/plan/${post._id}`} key={material.slug} passHref>
                            <img src={post.image} alt={post.title} className="w-24 h-24 rounded-full mr-4" />
                        </Link>

                        <div className="text-xs text-gray-600">{new Date(parseInt(post.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
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


            {desk.map((post, index) => (
                <div key={index}>
                    <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Dernier meuble'}</h3>
                    <a className="flex flex-col items-center cursor-pointer">


                        <div className="text-center text-lg">{post.title}</div>

                        <Link href={`/plan/${post._id}`} key={desk.slug} passHref>
                            <img src={post.image} alt={post.title} className="w-24 h-24 rounded-full mr-4" />
                        </Link>

                        <div className="text-xs text-gray-600">{new Date(parseInt(post.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
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