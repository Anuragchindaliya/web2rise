import React from 'react'
import Slider from "react-slick";
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="justify-center items-center flex flex-col my-28">
            <div className=" uppercase text-base font-sans flex justify-center items-center text-blue-400 font-bold leading-6 tracking-normal">
                Our History</div>
            <div className="text-4xl flex justify-center items-center text-black font-bold">Years Of Journey</div>
            <div className="flex justify-center items-center text-2xl   text-slate-500 font-normal font-serif text-center pl-80 pr-80 pt-8 pb-24  leading-10 tracking-normal">
                We are working for more than 4
                Years in the IT Industry. We also deals in other internet services
                like Web Designing, Web Development, Logo Designing, Banner Designing, Profile Designing, Digital Marketing,
                Website SEO, Search Engine Optimization &amp; Social Media Optimization etc.</div>
            <div className="bg-center bg-cover bg-no-repeat
            w-full flex flex-col items-center justify-center  mt-24 h-96 " style={{ backgroundImage: 'url(https://educationdoorway.com/wp-content/uploads/2020/07/testimonial_bg_img-768x276.jpeg)' }}>
                <div className="w-9/12 h-24 bg-white  z-10 mt-10">
                    <div className="text-black text-3xl font-black font-serif flex-col  items-center justify-center bg-white   shadow-2xl py-5">
                        <div className="p-5 text-center mt-5">Testimonial</div>
                        <div className=" mb-10">
                            <div className=" h-auto bg-white inline-flex items-center justify-center   ">
                                <svg className="fill-gray-700 h-10 w-10 mt-6 cursor-pointer hover:fill-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z" />
                                </svg>
                                <Slider {...settings}>
                                    <div className="w-full">
                                        I am Well Satisfied with my company got my project on time
                                        and with 100%
                                        quality in minimal budget.Had a very good experience with Web2Rise They helped me get my
                                        business to
                                        the
                                        next level and web.Staff is very Knowledgable and Professional.I will recommend them to
                                        everyone.Amazing
                                        Organisaton.Extremely Talented.
                                        <div className="flex items-left justify-left p-5">
                                            <img src="./assets/review/review-1.png" className="rounded-full h-24 w-24 flex itmes-left justify-left border-blue-500 border-2 " alt="author" />
                                            <div className="inline text-lg leading-8 uppercase text-gray-700 items-center justify-center pl-6 pt-8 font-black ">
                                                Neeraj Maurya</div>
                                        </div>
                                    </div>
                                    <div className="">
                                        I am Well Satisfied with my company got my project on time
                                        and with 100%
                                        quality in minimal budget.Had a very good experience with Web2Rise They helped me get my
                                        business to
                                        the
                                        next level and web.Staff is very Knowledgable and Professional.I will recommend them to
                                        everyone.Amazing
                                        Organisaton.Extremely Talented.
                                        <div className="flex items-left justify-left p-5">
                                            <img src="http://web2rise.q2w.in:100/web2rise/wp-content/uploads/2022/02/review-1.png" className="rounded-full h-24 w-24 flex itmes-left justify-left border-blue-500 border-2 " alt="author" />
                                            <div className="inline text-lg leading-8 uppercase text-gray-700 items-center justify-center pl-6 pt-8 font-black ">
                                                Neeraj Maurya</div>
                                        </div>
                                    </div>

                                </Slider>
                                <svg className="fill-gray-700 h-10 w-10 mt-6 cursor-pointer hover:fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Testimonial