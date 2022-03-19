import React from 'react'

const Breadcrumb = () => {
    return (
        <section className="text-gray-600 relative body-font bg-cover before:block before:w-full   before:absolute before:-inset-1   before:bg-gray-900 before:opacity-50" style={{ backgroundImage: "url('./assets/about-us-inner-page-banner-bg.png')" }}>
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">About us</h1>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb