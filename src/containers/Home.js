import React from 'react';

// css section 

// component section
import Nav from "../components/Nav";
import Body from "../components/Body";
import Services from "../components/Services";
import Features from "../components/Features"
import Footer from "../components/Footer";
import WhoCanUseSpell from "../components/WhoCanUseSpell";
import WhySpell from "../components/WhySpell";

function home() {
    return (
        <>
           <Nav />
           <Body />
           <Services />
           <WhoCanUseSpell />
           <WhySpell />
           <Features />
           <Footer />
        </>
    )
}

export default home;
