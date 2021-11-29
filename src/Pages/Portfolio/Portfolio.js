import React from 'react';
import pinkBabs from '../../portfolio-imgs/pink-babs.png';
import mobileRepair from '../../portfolio-imgs/mobile-repair.webp';
import seniorCare from '../../portfolio-imgs/senior-care.webp';
import touristClub from '../../portfolio-imgs/traveling.jpg';
import kindergarten from '../../portfolio-imgs/kindergarten.png';
import SingleWebsite from '../SingleWebsite/SingleWebsite';


const websites = [
    {
        id: 1,
        name: 'Pink Babs',
        image: pinkBabs
    },
    {
        id: 2,
        name: 'Mobile Repair',
        image: mobileRepair
    },
    {
        id: 3,
        name: 'edu-Care Kindergarten',
        image: kindergarten
    },
    {
        id: 4,
        name: 'Senior Care Home',
        image: seniorCare
    },
    {
        id: 5,
        name: 'Tourist Club',
        image: touristClub
    }
]

const Portfolio = () => {

    return (
        <div id='portfolio'>
            <h2>Portfolio</h2>
            <div className="row">
                {
                    websites.map(site => <SingleWebsite key={site.id} site={site}></SingleWebsite>)
                }

            </div>
        </div>
    );
};

export default Portfolio;