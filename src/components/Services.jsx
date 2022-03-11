import React from 'react'

const Services = () => {
    const services = [
        {
            title: "Website Designing",
            desc: "We endures our client demands at scale and offers high-quality customized business solutions.",
            url: "http://web2rise.q2w.in:100/web2rise/website-designing-in-faridabad/",
            img: "./assets/services/web-1536x1318.jpg"
        },
        {
            title: "Digital Marketing",
            desc: "We do Digital Marketing, SEO/SEM, database marketing, email, social media, and display advertising campaigns.",
            url: "http://web2rise.q2w.in:100/web2rise/website-designing-in-faridabad/",
            img: "./assets/services/digital-1536x1318.jpg"
        },
        {
            title: "App Development",
            desc: "With our talented team of mobile app developers and designers the delivery of a scalable, compelling, and secure app is assured.",
            url: "http://web2rise.q2w.in:100/web2rise/website-designing-in-faridabad/",
            img: "./assets/services/app-1536x1318.jpg"
        },
        {
            title: "Logo Designing",
            desc: "A logo is more than just a small piece of artwork; it's the foundation upon which your company's brand identification is built.",
            url: "http://web2rise.q2w.in:100/web2rise/website-designing-in-faridabad/",
            img: "./assets/services/logo-1536x1318.jpg"
        },
        {
            title: "Software Development",
            desc: "Designing, building, deploying, and sustaining custom software solutions and services are all part of the custom software development process.",
            url: "http://web2rise.q2w.in:100/web2rise/website-designing-in-faridabad/",
            img: "./assets/services/soft-1536x1318.jpg"
        },
        {
            title: "Web Design Training",
            desc: "It enables students to learn various techniques, tools and programming languages in order to create and maintain web pages.",
            url: "http://web2rise.q2w.in:100/web2rise/website-designing-in-faridabad/",
            img: "./assets/services/tranie-2-1536x1318.jpg"
        }
    ]
    return (
        <div className="container mx-auto px-5 py-24 ">
            <div className="header flex items-end justify-between mb-12">
                <div className="title">
                    <div className="text-4xl font-bold text-gray-800 mb-4">
                        Quality Services
                        <div className="h-1 w-40 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="text-2xl font-light text-gray-400">
                        All article are verified by 2 experts and valdiate by the CTO
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {services.map((service, idx) => (<div key={idx} className="overflow-hidden shadow-lg rounded-lg h-90 gap-5 cursor-pointer m-auto">
                    <a href="#/" className="w-full block h-full">
                        <img alt="photo services" src={service.img} className="max-h-80 w-full object-cover" />
                    </a>
                    <div className="bg-white dark:bg-gray-800 w-full p-5">
                        <a href="#" className="w-full block h-full">
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                {service.title}
                            </p>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                {service.desc.slice(0, 90)}...
                            </p>
                        </a>
                        <div className="flex items-center mt-4">
                            <a className='bg-blue-500 text-white p-2 px-4 rounded' href='services'>View More</a>
                        </div>
                    </div>
                </div>))}

            </div>
        </div>
    )
}

export default Services