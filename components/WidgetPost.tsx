import Link from 'next/link';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const WidgetPostVinyl = ({ vinyls }: any) => {

    return (
        <div className=" text-white  h-64 w-64 shadow-lg rounded-xl bg-white">

            <h3 className="text-center text-black pb-1  border-b-2 border-blueCC shadow-md">{'Sortie Vinyle'}</h3>
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
                    <div key={index}>

                        <a className=" flex flex-col items-center cursor-pointer pt-4">
                            <div className="text-center text-black text-base">{vinyl.title}</div>
                            <Link href={`/plan/${vinyl._id}`} key={vinyl.slug} passHref>
                                <img src={vinyl.image} alt={vinyl.title} className="w-auto h-28" />
                            </Link>
                            <div className="text-xs text-center text-black">{new Date(parseInt(vinyl.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}

                            </div>

                        </a>

                    </div>
                ))}
            </Carousel>

        </div>
    )
}




export const WidgetPostMaterial = ({ material1 }: any) => {

    return (
        <div className="text-white h-64 w-64 shadow-lg rounded-xl  bg-white">
            <h3 className="text-center text-black pb-1  border-b-2 border-blueCC shadow-md">{'Dernier hifi'}</h3>
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
                    <div key={index}>

                        <a className=" flex flex-col items-center cursor-pointer pt-4">


                            <div className="text-center text-base text-black">{material.title}</div>

                            <Link href={`/material/${material._id}`} key={material.slug} passHref><img src={material.image} alt={material.title} className="w-auto h-28" /></Link>

                            <div className="text-xs text-black">{new Date(parseInt(material.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
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
        <div className="text-white  h-64 w-64 shadow-lg rounded-xl bg-white">
            <h3 className="text-center text-black pb-1  border-b-2 border-blueCC shadow-md">{'Dernier meuble'}</h3>

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
                    <div key={index}>

                        <a className="flex flex-col items-center cursor-pointer pt-4">

                            <div className="text-center text-black">{desk.title}</div>

                            <Link href={`/desk/${desk._id}`} key={desk.slug} passHref><img src={desk.image} alt={desk.title} className="w-auto h-28 rounded-full  my-1" /></Link>

                            <div className="text-xs  text-black">{new Date(parseInt(desk.createdAt)).toLocaleString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}
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