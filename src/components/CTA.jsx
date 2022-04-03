import React from 'react'

const CTA = () => {
    return (
        <section className="text-gray-600 body-font bg-blue-900 mb-10">
            <div className="max-w-7xl sm:px-6 px-5 py-20 mx-auto flex flex-col md:flex-row ">
                <div className="w-full md:w-4/5">
                    <h1 className="flex-grow sm:pr-1 text-4xl font-medium title-font text-white">We Offer a Full Range of Digital
                        Marketing &amp; Superior Services<br />
                        <p className=" text-lg text-white mt-8">Our Team is dedicated to providing you with the best experience and
                            result as much as possible.</p>
                    </h1>
                </div>
                <div className='w-full md:w-1/5 pt-4'>
                    <button className="text-white mx-auto bg-orange-500 border-0 py-4 px-6 focus:outline-none hover:bg-[#c35f1a] rounded-full text-lg mt-10 sm:mt-0">LEARN MORE</button>
                </div>
            </div>
        </section>
    )
}

export default CTA