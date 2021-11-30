import React from 'react';
import useFetch from '../../hooks/useFetch';
import SingleWebsite from '../SingleWebsite/SingleWebsite';


const sites = [
    {
        id: 1,
        name: 'Pink Babs',
        images: {
            full: 'https://i.ibb.co/drhTyTY/baby-lotion-web-app.png',
            img1: 'https://i.ibb.co/fq7n8YQ/pink-babs.png',
            img2: 'https://i.ibb.co/XLy0sgy/pink-babs-login.png',
            img3: 'https://i.ibb.co/nmKDjvN/pink-babs-dashboard.png'
        },
        description: {
            short: 'Developed a responsive full-stack app with firebase authentication using Google & email-password.Customers can order baby lotion as well as see their orders and cancel their order after logging in. Admin can approve orders, manage all orders, manage all products, add products, make admin others.',
            long: '',
            tech: 'React, React-router, Material UI, Firebase, Node JS, Express JS, MongoDB, Heroku'
        },
        server: 'https://github.com/Hafsa-Begum/baby-lotion-fullstack-server',
        client: 'https://github.com/Hafsa-Begum/baby-lotion-fullstack-client',
        live: 'https://baby-lotion.web.app/'
    },
    {
        id: 2,
        name: 'Mobile Repair',
        images: {
            full: 'https://i.ibb.co/YWVcT6z/mobile-servicing-site-web-app.png',
            img1: 'https://i.ibb.co/PMGcXQt/mb-bnr.png',
            img2: 'https://i.ibb.co/ckzF6p2/mb-services.png',
            img3: 'https://i.ibb.co/19wMBMw/mobile-dash.png'
        },
        description: {
            short: 'Created Credit Card payment method using Stripe API. Admin and Customer separate dashboard are available. Customers can book services, see their services, cancel their services, check status of booking and add reviews. Admin can approve services, manage all services, manage all bookings, add services, make admin others.',
            long: '',
            tech: 'React, React-router-version-6, Payment Gateway, Material UI, Firebase, Node JS, Express JS, MongoDB, Heroku, Sweet-alert.'
        },
        server: 'https://github.com/Hafsa-Begum/mobile-servicing-server',
        client: 'https://github.com/Hafsa-Begum/mobile-servicing-client',
        live: 'https://mobile-servicing-site.web.app/'
    },
    {
        id: 3,
        name: 'edu-Care Kindergarten',
        images: {
            full: 'https://i.ibb.co/gSNyrvR/assignment-9-edu-care-kindergarten-by-hafsa-netlify-app.png',
            img1: 'https://i.ibb.co/XV5nHr4/kindergarten.png',
            img2: 'https://i.ibb.co/PwP3dSQ/assignment-9-edu-care-kindergarten-by-hafsa-netlify-app-1.png',
            img3: 'https://i.ibb.co/R0k6sX2/assignment-9-edu-care-kindergarten-by-hafsa-netlify-app-2.png'
        },
        description: {
            short: 'This is a child-care educational website. It is a Four pages website, pages are Home, About, Services, Teachers, Contact Us, One Viewer can see all services and know about them.',
            long: '',
            tech: 'React, react-router, Bootstrap.'
        },
        server: '',
        client: 'https://github.com/Hafsa-Begum/eduCare-Kindergarten',
        live: 'https://assignment-9-edu-care-kindergarten-by-hafsa.netlify.app/'
    },
    {
        id: 4,
        name: 'Senior Care Home',
        images: {
            full: 'https://i.ibb.co/7n9pYgx/senior-care-home-c9388-web-app.png',
            img1: 'https://i.ibb.co/4Psx7TG/senior.png',
            img2: 'https://i.ibb.co/QKj9Mvw/senior-care-home-c9388-web-app-1.png',
            img3: 'https://i.ibb.co/7jfcDt0/senior-care-home-c9388-web-app-2.png'
        },
        description: {
            short: 'Utilized React router for separate and Firebase Auth for secure website. Implemented login system using Google and email-password. Users will be able to see service details after logged in. ',
            long: '',
            tech: 'React, React-router, React-Bootstrap, Firebase.'

        },
        server: '',
        client: 'https://github.com/Hafsa-Begum/senior-care-home',
        live: 'https://senior-care-home-c9388.web.app/'
    },
    {
        id: 5,
        name: 'Tourist Club',
        images: {
            full: 'https://i.ibb.co/CKC8mqz/tourist-club-36241-web-app.png',
            img1: 'https://i.ibb.co/RYbgnfG/image.png',
            img2: 'https://i.ibb.co/crF3zpD/tourist-club-36241-web-app-1.png',
            img3: 'https://i.ibb.co/60wDGdr/tourist-club-36241-web-app-2.png'
        },
        description: {
            short: 'A simple dashboard is implemented for users. To book a tour, a user must be logged in using Google or email & password. Users can see their booking, approve booking, manage all bookings.',
            long: '',
            tech: 'React, React-router, React-Bootstrap, Firebase, Node JS, Express JS, MongoDB, Heroku.'
        },
        server: 'https://github.com/Hafsa-Begum/tourist-club-server',
        client: 'https://github.com/Hafsa-Begum/tourist-club-client',
        live: 'https://tourist-club-36241.web.app/'
    }
]

const Portfolio = () => {
    const [websites] = useFetch();
    return (
        <div id='portfolio'>
            <h1 className='py-5 text-center' style={{ fontSize: '74px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Portfolio</h1>
            <div className="row mx-5">
                {
                    websites.map(site => <SingleWebsite key={site.id} site={site}></SingleWebsite>)
                }

            </div>
        </div>
    );
};

export default Portfolio;