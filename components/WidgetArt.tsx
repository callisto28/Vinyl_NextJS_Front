import Link from 'next/link';
import React from 'react';



const WidgetArt = ({ articles }: any) => {

    //request 2 last articles
    const lastArticles = articles.slice(0, 3);


    return (
        <div className="bg-white shadow-lg rounded-lg p-6 pb-10 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b border-yellow-400 pb-4">{'Articles récents'}</h3>

            {lastArticles.map((article, index) => (
                <div key={index}>
                    <a className="flex flex-col items-center cursor-pointer my-2">
                        <div className="text-lg mb-1">{article.title}
                        </div>


                        <Link href={`/article/${article._id}`} key={article.slug} passHref>
                            <img src={article.image} alt={article.title} className="w-24 h-24 rounded-full mb-2" />
                        </Link>
                        <div className='text-sm mb-2'>{article.subtitle}</div>

                        <div className="text-xs text-gray-600 ">{new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>

                    </a>
                    <div className='text-xl mb-8 font-semibold pb-4 border-b border-yellow-400'>{''}</div>
                </div>

            ))}
        </div>
    )
}

export default WidgetArt;