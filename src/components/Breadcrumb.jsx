import React from 'react'

const Breadcrumb = ({ title, bg = "/assets/bg/banner_img-1.jpeg" }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="flex flex-wrap w-full bg-black py-60 px-10 relative  h-144">
                <img alt="gallery" className="w-full object-cover object-center block opacity-25 absolute inset-0 h-full" src={bg} />
                <div className="text-center relative z-10 w-full">
                    <h2 className="sm:text-5xl text-4xl font-bold text-white title-font mb-2 ">{title}</h2>
                    <p className="text-xl text-white mt-8">Home &gt;  {title}</p>
                </div>
            </div>
        </section>

    )
}

export default Breadcrumb