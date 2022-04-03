import React from 'react'
import About from '../components/About'
import AskQuery from '../components/AskQuery'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import PricingPlan from '../components/PricingPlan'
import Services from '../components/Services'
import Statistic from '../components/Statistic'

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <CTA />
            <AskQuery />
            <Statistic />
            <PricingPlan />
        </>
    )
}

export default Home