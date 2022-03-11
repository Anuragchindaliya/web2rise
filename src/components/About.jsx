import React from 'react'

const About = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="font-bold text-gray-800 mb-4 flex items-center">
                        <div className="h-1 w-20 bg-indigo-500 rounded mr-2"></div>
                        Know Who We Are
                    </div>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About our company
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Our passion for creative, innovative and technical excellence and exceptional service underlies all of our thoughts and actions. Success Driven Website Design and Web Applications Development Company.

                        We are a team of web developers, web designers, software developers, graphics , asp.net programmers, php developers, SEO specialists, E-commerce specialists having a diverse range of technical ,creative and management skills. We understand our client’s and think out of box in order to deliver not only visually engaging but also powerful web design solutions to them.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="./assets/st_about_accordian-1.jpg" />
                </div>
            </div>
        </section>
    )
}

export default About