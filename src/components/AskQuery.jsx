import React from 'react'

const AskQuery = () => {
    return (
        <>
            <section className="my-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col text-center w-full sm:mb-12 mb-6 ">
                        <h1 className=" text-4xl font-bold title-font  text-gray-900">Have Any Query?<br />
                            <span className="mt-4">Ask us</span>
                        </h1>
                    </div>

                    <div className="max-w-7xl sm:px-5 px-6 mx-auto flex  py-1 md:flex-row flex-col items-center">
                        <div className="w-full md:w-2/3 md:mb-0 md:-mr-10 ">
                            <img className="object-cover object-center  w-full" alt="hero" src="/assets/bg/call-back_img-1.jpeg" />
                        </div>
                        <div className=" lg:flex-grow md:w-2/3 sm:py-44 bg-white flex flex-col lg:text-left md:items-start md:text-left items-center text-left z-10  shadow-2xl w-full">
                            <div className="lg:max-w-lg lg:w-full w-full mb-10  md:mb-0 sm:w-full">
                                <div className=" text-black  py-12 px-10 font-bold text-2xl ">Make an
                                    Appointment<br />
                                    <p className="text-black font-thin text-sm">FOR ANY INQUIRY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AskQuery