import React from 'react';
const services = [
    {
        id: 1,
        name: 'Web App Design',
        description: ' I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below',
        image: 'https://i.ibb.co/86PXgdt/eftakher-alam-i1-VQZs-U86ok-unsplash.jpg'
    },
    {
        id: 2,
        name: 'Web Development',
        description: 'I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below ',
        image: 'https://i.ibb.co/86PXgdt/eftakher-alam-i1-VQZs-U86ok-unsplash.jpg'
    },
    {
        id: 3,
        name: 'Responsive Web Design',
        description: 'I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below ',
        image: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/01/divi-web-agency-layout-pack-featured-image.jpg'
    }
]

const Services = () => {
    return (
        <div id='services'>
            <div className='container'>
                <h1 className='py-5 text-center' style={{ color: "tomato" }}>Our All Services</h1>

                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        services.map(service => (
                            <div class="col">
                                <div class="card h-100">
                                    <img className='w-100 rounded-3 mb-3 card-img-top' style={{ height: '300px' }} src={service.image} alt="" />
                                    <div className="card-body text-dark px-5">
                                        <h5 class="card-title">{service.name}</h5>
                                        <p class="card-text">{service.description}</p>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;