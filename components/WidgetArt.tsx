import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const WidgetArt = ({ articles1 }: any) => {

    //request 2 last articles
    // const lastArticles = articles1.slice(0, 3);


    return (
        <div className="text-black h-64 w-64 shadow-lg rounded-xl bg-white">
            <h3 className="text-center text-black pb-1  border-b-2 border-blueCC shadow-md">{'Articles récents'}</h3>
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
                {articles1.map((article, index) => (
                    <div key={index} className="flex flex-col items-center cursor-pointer pt-6 ">
                        <a className=" flex flex-col items-center">
                            <div className=" text-center text-black text-base">{article.title.split(1, 5)} </div>
                            <Link href={`/article/${article._id}`} key={article.slug} passHref>
                                <Image src={(article.image != '') ? (article.image) : ('https://www.abondance.com/wp-content/uploads/2015/08/actualite-logo-300x300.jpg')} layout="intrinsic" width={100} height={100} alt={article.title} />
                            </Link>
                            {/* <div className='text-sm mb-2 py-4'>{article.subtitle}</div> */}

                            <div className="text-xs text-center text-black ">{new Date(parseInt(article.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>


                        </a>

                    </div>

                ))}
            </Carousel>

        </div >
    )
}

export default WidgetArt;