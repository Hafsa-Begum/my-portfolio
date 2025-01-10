import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './WorkExperience.css';

const WorkExperience = () => {
    return (
        <div className="row py-5 text-start px-5">
            <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
                <h1 className='py-5 text-center'
                    style={{ fontSize: '64px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>
                    Working Experience
                </h1>
            </ScrollAnimation>

            <div className="col-md-6">
                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' duration={2}
                    delay={500}
                    offset={200}>
                    <div style={{ backgroundColor: 'goldenrod', borderRadius: '0px 80px 0px 80px' }} class="card mb-3 shadow-sm custom-card">
                        <div class="card-body">
                            <div className="text-center">
                                <h5 class="card-title">Full-Stack Developer</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Lehoa Digital | Remote</h6>
                                <p class="text-muted">March 2022 – Present</p>
                            </div>
                            <ul class="list-unstyled">
                                <li>🔹 Led full-stack development, ensuring seamless frontend and backend integration for user-friendly experiences,
                                     including interactive tree-unlocking and shareable impact profiles.</li>
                                <li>🔹 Implemented webhook integrations with Shopify, WooCommerce, and other platforms for automated gifting logic and personalized WhatsApp messages.</li>
                                <li>🔹 Integrated Stripe payment systems for flexible subscription and checkout options, with referral discounts and plan adjustments for partners.</li>
                                <li>🔹 Built an admin panel with advanced features like web scraping, AWS S3 uploads, and bulk data transfers for efficient partner and tree data management.</li>
                                <li>🔹 Deployed applications on AWS using Terraform, automated CI/CD pipelines with GitHub Actions, and managed development, staging, and production environments.</li>
                            </ul>
                            <div>
                                <h5>Technology</h5>
                                <ul class="list-unstyled">
                                    <button class="btn btn-outline-light tech-btn">Nuxt.js</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">Node.js</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">Express.js</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">Webhook</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">MongoDB</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">Twilio</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">Stripe</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">Docker</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">AWS</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">Terraform</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">GitHub Actions</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

            </div>

            <div className="col-md-6">
                <ScrollAnimation animateIn='bounceInLeft' duration={2}
                    delay={500}
                    offset={200}>
                    <div style={{ height: "550px" , backgroundColor: 'goldenrod', borderRadius: '0px 80px 0px 80px' }} class="card mb-3 shadow-sm custom-card">
                        <div class="card-body">
                            <div className="text-center">
                                <h5 class="card-title">Backend Developer</h5>
                                <h6 class="card-subtitle mb-2 text-muted">MISUI INDIA | Bengaluru, India</h6>
                                <p class="text-muted">Aug 2020 – Dec 2022</p>
                            </div>
                            <ul class="list-unstyled">
                                <li>🔹 Designed and implemented RESTful APIs for efficient and scalable backend communication</li>
                                <li>🔹 Developed a role-based authentication system for secure user access in an e-commerce platform.</li>
                                <li>🔹 Integrated Cloudinary and Multer for seamless image upload and media management.</li>
                                <li>🔹 Worked with senior developers and teammates to refine features, align goals, and resolve technical challenges.</li>
                            </ul>
                            <div>
                                <h5>Technology</h5>
                                <ul class="list-unstyled">
                                    <button class="m-1 btn btn-outline-light tech-btn">Node.js</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">Express.js</button>
                                    <button class="m-1 btn btn-outline-light tech-btn">MongoDB</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

        </div>
    );
};

export default WorkExperience;