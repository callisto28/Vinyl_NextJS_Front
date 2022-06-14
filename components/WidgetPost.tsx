import Link from 'next/link';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const WidgetPostVinyl = ({ plans }: any) => {

    return (
        <div className=" text-white rounded-lg p-5 pb-8 mb-8 shadow-[inset_0_-20px_20px_-10px_#9333EA]">

            <h3 className="text-xl mb-8 font-semibold border-b border-purple-600 pb-4">{'Sortie Vinyle'}</h3>
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
                {plans.map((vinyl, index) => (
                    <div key={index}>

                        <a className="flex flex-col items-center cursor-pointer">
                            <div className="text-center text-lg">{vinyl.title}</div>
                            <Link href={`/plan/${vinyl._id}`} key={plans.slug} passHref>
                                <img src={vinyl.image} alt={vinyl.title} className="w-auto h-28 hover:translate-x-2 hover:shadow-purple-600  my-1" />
                            </Link>
                            <div className="text-xs text-white">{new Date(parseInt(vinyl.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}

                            </div>
                            <span className=" mb-2 text-transparent border-b border-purple-600 pb-4">{'------------------------------'}</span>
                        </a>

                    </div>
                ))}
            </Carousel>

        </div>
    )
}




export const WidgetPostMaterial = ({ material }: any) => {

    return (
        <div className="text-white rounded-lg p-5 pb-8 mb-8 shadow-[inset_0_-20px_20px_-10px_#9333EA]">
            <h3 className="text-xl mb-8 font-semibold border-b border-purple-600 pb-4">{'Dernier hifi'}</h3>
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
                {material.map((material, index) => (
                    <div key={index}>

                        <a className="flex flex-col items-center cursor-pointer">


                            <div className="text-center text-lg">{material.title}</div>

                            <Link href={`/material/${material._id}`} key={material.slug} passHref>
                                <img src={material.image} alt={material.title} className="w-auto h-28 rounded-full my-1" />
                            </Link>

                            <div className="text-xs text-white">{new Date(parseInt(material.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>
                            <span className=" mb-2 text-transparent border-b border-purple-600 pb-4">{'------------------------------'}</span>
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    )
};

export const WidgetPostDesk = ({ desk }: any) => {

    return (
        <div className="rounded-lg p-5 pb-8 mb-8 shadow-[inset_0_-20px_20px_-10px_#9333EA]">
            <h3 className="text-xl text-white mb-8 font-semibold border-b border-purple-600 pb-4">{'Dernier meuble'}</h3>

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
                {desk.map((desk, index) => (
                    <div key={index}>

                        <a className="flex flex-col text-center items-center cursor-pointer">

                            <div className="text-center pb-3 text-white text-lg">{desk.title}</div>

                            <Link href={`/desk/${desk._id}`} key={desk.slug} passHref>
                                <img src={desk.image} alt={desk.title} className="w-auto h-28 rounded-full  my-1" />
                            </Link>

                            <div className="text-xs pt-2 text-white">{new Date(parseInt(desk.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>
                            <span className=" mb-2 text-transparent border-b border-purple-600 pb-4">{'------------------------------'}</span>
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