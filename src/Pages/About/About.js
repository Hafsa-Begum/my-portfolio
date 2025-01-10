import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
        <div id="about" className="row py-5 text-white text-start px-3 px-md-5">

            {/* Section Heading */}
            <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
                <h1
                    style={{ fontSize: "74px", color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}
                    className="text-center pb-5"
                >
                    About Me
                </h1>
            </ScrollAnimation>

            {/* Left Column - Text Content */}
            <div className="col-12 col-lg-6 px-4">
                <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
                    <div>
                        <h4
                            className="mb-3"
                            style={{ fontSize: "34px", color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}
                        >
                            Why you choose me?
                        </h4>
                        <p className="fs-5">
                            I am a passionate and skilled software developer with over 3 years of experience
                            in full-stack development, API design, and seamless system integrations. My expertise lies in
                            crafting scalable platforms, streamlining deployments, and enhancing user experiences through
                            thoughtful design and innovation.
                        </p>
                        <p className="fs-5">
                            Driven by a love for solving complex challenges, I thrive in collaborative environments, delivering
                            impactful solutions with a focus on efficiency and excellence. Whether it’s a full-time, part-time,
                            or contractual opportunity, I am eager to contribute to projects that demand creativity, technical
                            expertise, and a commitment to success.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>

            {/* Right Column - Image */}
            <div className="col-12 col-lg-6 d-flex justify-content-center">
                <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
                    <div className='mt-3'>
                        <img
                            className="rounded-circle"
                            style={{ width: '340px', height: '340px', objectFit: 'cover' }}
                            src="https://i.ibb.co/PxyVSd4/ben-kolde-bs2-Ba7t69m-M-unsplash.jpg"
                            alt="About Me"
                        />
                    </div>
                </ScrollAnimation>
            </div>

        </div>

    );
};

export default About;