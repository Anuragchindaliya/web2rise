import React from 'react'
import About from '../components/About'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Statistic from '../components/Statistic'

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <CTA />
            <Statistic />
        </>
    )
}

export default Home