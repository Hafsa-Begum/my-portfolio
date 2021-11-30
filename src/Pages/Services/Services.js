import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
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
        image: 'https://i.ibb.co/C01ZPjp/image-2.png'
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

                <ScrollAnimation animateIn='bounceInLeft'
                    animateOut='bounceOutRight'>
                    <h1 className='py-5 text-center' style={{ fontSize: '74px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Services</h1>
                </ScrollAnimation>


                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        services.map(service => (
                            <div key={service.id} class="col">

                                <ScrollAnimation animateIn='wobble'
                                    initiallyVisible={true}>
                                    <div className="card h-100">
                                        <img className='w-100 rounded-3 mb-3 card-img-top' style={{ height: '300px' }} src={service.image} alt="" />
                                        <div className="card-body text-dark px-5">
                                            <h5 className="card-title">{service.name}</h5>
                                            <p className="card-text">{service.description}</p>

                                        </div>
                                    </div>
                                </ScrollAnimation>


                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;