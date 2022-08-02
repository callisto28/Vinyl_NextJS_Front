/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const WidgetPostVinyl = ({ vinyls }: any) => {

    return (
        <div className=" flex flex-col  text-black  h-64 lg:w-72 md:w-72 sm:w-64 rounded-lg bg-gradient-to-b from-green-start to-green-end">

            <h3 className="text-center text-black py-1  border-b-2 border-blueCC shadow-md">{'Vinyle'}</h3>
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
                {vinyls.map((vinyl, index) => (
                    <div key={index} className="relative z-40">

                        <a className="flex flex-col items-center ">
                            <div className="text-center text-black text-xs h-14 px-2 py-1">{vinyl.title}</div>
                           
                            <div className="w-28 h-28 rounded-md my-1 cursor-pointer">
                            
                            <Link href={`/plan/${vinyl._id}`} key={vinyl.slug} passHref>
                                <img src={vinyl.image} alt={vinyl.title} className="w-28 h-28 rounded-md" />
                            </Link>
                            </div>
                            
                            <div className="text-xs text-center text-black my-1">{new Date(parseInt(vinyl.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                    
                            </div>
                            <span className='text-red-500 text-xs'>{vinyl.promo}</span>
                        </a>

                    </div>
                ))}
            </Carousel>

        </div>
    )
}




export const WidgetPostMaterial = ({ material1 }: any) => {

    return (
        <div className="flex flex-col  text-black  h-64 lg:w-72 md:w-72 sm:w-64 rounded-lg bg-gradient-to-b from-green-start to-green-end">
            <h3 className="text-center text-black py-1  border-b-2 border-blueCC shadow-md">{'hifi & sono'}</h3>
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
                {material1.map((material, index) => (
                    <div key={index} className="relative z-40">

                        <a className="flex flex-col items-center ">
                            <div className="text-center text-black text-xs h-16 px-2 py-1">{material.title}</div>
                            <div className="w-28 h-28 rounded-md my-1 cursor-pointer">
                            <Link href={`/material/${material._id}`} key={material.slug} passHref>
                                <img src={material.image} alt={material.title} className="w-28 h-28 rounded-md" />
                                </Link>
                            </div>

                            <div className="text-xs text-center text-black my-2">{new Date(parseInt(material.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>

                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    )
};

export const WidgetPostDesk = ({ desk1 }: any) => {

    return (
        <div className="flex flex-col text-black  h-64 lg:w-72 md:w-72 sm:w-64 rounded-lg bg-gradient-to-b from-green-start to-green-end">
            <h3 className="text-center text-black py-1  border-b-2 border-blueCC shadow-md">{'mobilier & accessoire'}</h3>

            < Carousel
                containerClass='carousel-container'
                additionalTransfrom={1}
                arrows
                autoPlaySpeed={5500}
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
                        partialVisibilityGutter: 80
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
                {desk1.map((desk, index) => (
                    <div key={index} className="relative z-40">

                        <a className="flex flex-col items-center ">

                            <div className="text-center text-black text-xs h-16 px-2 py-1">{desk.title}</div>
                             <div className=" w-28 h-28  rounded-md my-1 cursor-pointer">
                                 <Link href={`/desk/${desk._id}`} key={desk.slug} passHref><img src={desk.image} alt={desk.title} 
                                /></Link>

                            </div>

                            <div className="text-xs  text-black my-2">{new Date(parseInt(desk.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>
                            {/* <span className=" mb-2 text-transparent pb-4">{'------------------------------'}</span> */}
                        </a>

                    </div>

                ))}

            </Carousel>
        </div>
    )
}




export default WidgetPostVinyl;
WidgetPostMaterial;
WidgetPostDesk;