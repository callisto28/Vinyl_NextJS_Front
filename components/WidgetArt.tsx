import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const WidgetArt = ({ articles }: any) => {

    //request 2 last articles
    const lastArticles = articles.slice(0, 3);


    return (
        <div className="rounded-lg p-1 pb-5 mb-4 shadow-[inset_-0_-15px_30px_-5px_#FEF08A]">
            <h3 className="text-xl text-yellow-400 mb-8 font-semibold border-b border-yellow-400 pb-4">{'Articles récents'}</h3>
            < Carousel
                containerClass='carousel-container'
                additionalTransfrom={1}
                arrows
                autoPlaySpeed={3500}
                centerMode={false}
                dotListClass="custom-dot-list-style"
                draggable={false}
                focusOnSelect={true}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1,
                        partialVisibilityGutter: 80
                    },
                    mobile: {
                        breakpoint: {
                            max: 460,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },

                    tablette: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass={"slider-wrapper"}
                slidesToSlide={1}
                swipeable={false}

            >
                {lastArticles.map((article, index) => (
                    <div key={index} className=" cursor-pointer text-center rounded-full">
                        <a className="flex lg:flex-col lg:items-center sm:flex-col sm:items-center">
                            <div className=" text-white">{article.title} </div>
                            <Link href={`/article/${article._id}`} key={article.slug} passHref>
                                <img src={(article.image != '') ? (article.image) : ('https://www.abondance.com/wp-content/uploads/2015/08/actualite-logo-300x300.jpg')} alt={article.title} className="w-auto h-60  hover:translate-x-2 py-8" />
                            </Link>
                            {/* <div className='text-sm mb-2 py-4'>{article.subtitle}</div> */}

                            <div className="text-xs text-gray-200 ">{new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>

                        </a>

                    </div>

                ))}
            </Carousel>
            <div className='text-xl mb-8 font-semibold pb-4 border-b border-yellow-400'>{''}</div>
        </div >
    )
}

export default WidgetArt;