import React from 'react';

// css section 

// component section
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Services from "../components/Services";
import Features from "../components/Features"
import Footer from "../components/Footer";
import WhoCanUseSpell from "../components/WhoCanUseSpell";
import WhySpell from "../components/WhySpell";
import ClientFeedback from "../components/ClientFeedback"

function home() {
    return (
        <>
           <Navbar />
           <Body />
           <Services />
           <WhoCanUseSpell />
           <WhySpell />
           <Features />
           <ClientFeedback />
           <Footer />
        </>
    )
}

export default home;
