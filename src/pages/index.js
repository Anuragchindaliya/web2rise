import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import About from "./home/About";
import AskQuery from "./home/AskQuery";
import Cta from "./home/CTA";
import Hero from "./home/Hero";
import PricingPlan from "./home/PricingPlan";
import Services from "./home/Services";
import Statistic from "./home/Statistic";

const index = ({ location }) => {
  return (
    <Layout>
      <Seo
        pageTitle="Home"
        pageUrl={location.href}
        pageDescription={"web2rise homepage"}
      />
      <Hero />
      <Services />
      <About />
      <Cta />
      <AskQuery />
      <Statistic />
      <PricingPlan />
    </Layout>
  );
};

export default index;
