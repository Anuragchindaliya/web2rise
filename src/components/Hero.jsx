import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font" >
            <section className="bg-cover z-10  h-[34rem] bg-right  relative" style={{ backgroundImage: 'url("http://web2rise.q2w.in:100/web2rise/wp-content/uploads/2022/02/Slider_img-1-1.jpeg")' }}>
                <div className="  bg-gradient-to-r from-black bg-opacity-10 absolute w-full h-full -z-10" />
                <div className="container max-w-7xl  mx-auto flex px-5 py-24 md:flex-row  flex-col items-center b z-10">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="font-bold text-white mb-4 flex items-center">
                            <div className="h-1 w-10 bg-orange-500 rounded   mr-2" />WELCOME TO WEB2RISE
                        </div>
                        <h1 className="title-font text-6xl font-bold md-4 text-white">Your Success Is Our
                            <br className="hidden lg:inline-block" />purpose
                        </h1>


                        <div className="flex justify-center my-12">
                            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none  rounded-full text-lg">LEARN MORE</button>
                            <button className="ml-4 inline-flex text-white font-medium  py-2 px-6 focus:outline-none hover:bg-orange-500 text-lg border-2 rounded-full transition-all ease-in-out">CONTACT US</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Hero