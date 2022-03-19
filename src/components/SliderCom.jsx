import React from 'react'
import Slider from "react-slick";
const SliderCom = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div class="relative overflow-hidden w-full">
            <Slider {...settings}>
                <div class="absolute -z-10 inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">Hello</div>
                <div class="absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">There</div>
                <div class="absolute inset-0 w-screen h-screen bg-teal-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">Booya!</div>
                <div class="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black">&#x276F;</div>
                <div class="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black">&#x276E;</div>
            </Slider>
        </div>
    )
}

export default SliderCom