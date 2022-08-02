/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const WidgetArt = ({ articles1 }: any) => {

    //request 2 last articles
    const lastArticles = articles1.slice(0, 3);
   


    return (
        <div className="flex flex-col  text-black  h-64 lg:w-72 md:w-72 sm:w-64 rounded-lg bg-gradient-to-b from-green-start to-green-end">
            <h3 className="text-center text-black py-1  border-b-2 border-blueCC shadow-md">{'Articles récents'}</h3>
            < Carousel
                containerClass='carousel-container'
                additionalTransfrom={2}
                arrows
                autoPlaySpeed={3500}
                centerMode={false}
                dotListClass="custom-dot-list-style"
                draggable={true}
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={true}
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
                    <div key={index} className="relative z-50">
                        <a className=" flex flex-col items-center">
                            <div className=" text-center text-black h-16 text-xs px-2 py-2 pb-5">{article.title.split(1, 5)} </div>
                            <div className="w-28 h-28 rounded-md my-1 cursor-pointer">
                            <Link href={`/article/${article._id}`}  key={article.slug} passHref>
                                <img src={(article.image != '') ? (article.image) : ('https://www.abondance.com/wp-content/uploads/2015/08/actualite-logo-300x262.jpg')} className="w-28 h-28 rounded-md" alt={article.title} />
                            </Link>
                            </div>
                            {/* <div className='text-sm mb-2 py-4'>{article.subtitle}</div> */}

                            <div className="text-xs text-center text-black my-2 ">{new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>


                        </a>

                    </div>

                ))}
            </Carousel>

        </div >
    )
}

export default WidgetArt;