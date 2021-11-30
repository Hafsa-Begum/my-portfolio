import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import useFetch from '../../hooks/useFetch';
import SingleWebsite from '../SingleWebsite/SingleWebsite';

const Portfolio = () => {
    const [websites] = useFetch();
    return (
        <div id='portfolio'>

            <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
                <h1 className='py-5 text-center' style={{ fontSize: '74px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Portfolio</h1>
            </ScrollAnimation>


            <div className="row mx-5">
                {
                    websites.map(site => <SingleWebsite key={site.id} site={site}></SingleWebsite>)
                }

            </div>
        </div>
    );
};

export default Portfolio;