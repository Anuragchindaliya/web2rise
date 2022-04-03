import React from 'react'

const PricingPlan = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="max-w-7xl container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-4xl font-bold title-font text-gray-900">Our Pricing Plan</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-5 flex-col drop-shadow-xl">
                            <div className="flex items-center mb-3">
                                <h2 className="text-gray-900 text-xl title-font font-bold">WEB DESIGNING <br />
                                    <p className="text-gray-600 font-thin text-sm">Starts from Rs 2999/- pm</p>
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Our approach to designing is to
                                    understand the brand requirement and help in building a consistent brand identity.
                                    Ecommerce Website Design
                                    Business Website Design
                                    Informative Website Design
                                    &amp; much more</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-5 flex-col drop-shadow-xl">
                            <div className="flex items-center mb-3">
                                <h2 className="text-gray-900 text-xl title-font font-bold">DIGITAL MARKETING
                                    <br />
                                    <p className="text-gray-600 font-thin text-sm">Starts from Rs 2999/- pm</p>
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Our digital marketing efforts help in creating a consumer base that
                                    is relevant and engaged with your brand all the time.
                                    Social Media Marketing
                                    Search Engine Optimization
                                    Email Marketing
                                    &amp; much more</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4  md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-5 flex-col drop-shadow-xl">
                            <div className="flex items-center mb-3">
                                <h2 className="text-gray-900 font-bold title-font text-xl ">APP DEVELOPMENT <br />
                                    <p className="text-gray-600 font-thin text-sm">Starts from Rs 2999/- pm</p>
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">App the best UX design and easy to manage. Our cutting edge
                                    technology helps your App stand ahead of the competition.
                                    Customized App Development
                                    Standard App Development
                                    Ecommerce App Development
                                    &amp; much more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingPlan