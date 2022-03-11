import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font bg-gradient-to-r from-cyan-500 to-blue-500" >
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="font-bold text-gray-800 mb-4 flex items-center">
                        <div className="h-1 w-20 bg-orange-500  mr-2"></div>
                        WELCOME TO WEB2RISE
                    </div>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your Success Is Our Purpose
                    </h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">LEARN MORE</button>
                        <button className="ml-4 inline-flex text-white font-medium  py-2 px-6 focus:outline-none hover:bg-orange-500 text-lg border-2 rounded-full transition-all ease-in-out">CONTACT US</button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
            </div>
        </section>
    )
}

export default Hero