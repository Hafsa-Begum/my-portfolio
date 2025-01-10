import React, { useEffect, useState } from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Blogs from '../../Blogs/Blogs';
import ContactMe from '../../ContactMe/ContactMe';
import Portfolio from '../../Portfolio/Portfolio';
import Services from '../../Services/Services';
import WorkExperience from '../../WorkExperience/WorkExperience';
import './Home.css'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period (e.g., fetching resources)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed (e.g., 3000ms = 3 seconds)
    
    return () => clearTimeout(timer); // Cleanup timer
  }, []);
    return (
        <>
      {isLoading ? (
        // Show loader while loading
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        // Show after loading
        <div id="home">
            <Banner></Banner>
            <About></About>
            <WorkExperience/>
            <Services></Services>
            <Portfolio />
            <Blogs />
            <ContactMe />
        </div>
      )}
    </>
        
    );
};

export default Home;