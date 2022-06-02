import Link from 'next/link';
import React from 'react';



const Widget = ({ articles }) => {


    return (
        <div className="bg-white shadow-lg rounded-lg p-6 pb-10 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Recent Posts'}</h3>

            {articles.map((article, index) => (
                <div key={index}>
                    <a className="flex flex-col items-center cursor-pointer">


                        <div className="text-center text-lg">{article.title}</div>

                        <Link href={`/article/${article._id}`} key={article.slug} passHref>
                            <img src={article.image} alt={article.title} className="w-24 h-24 rounded-full mr-4" />
                        </Link>

                        <div className="text-xs text-gray-600">{new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                    </a>

                </div>

            ))}
        </div>
    )
}


export default Widget;