import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Blogs from '../../Blogs/Blogs';
import ContactMe from '../../ContactMe/ContactMe';
import Portfolio from '../../Portfolio/Portfolio';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Portfolio />
            <Blogs />
            <ContactMe />
        </div>
    );
};

export default Home;