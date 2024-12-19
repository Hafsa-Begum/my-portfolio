import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
        <div id="about" className='row  py-5 text-white text-start px-5'>

            <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
                <h1 style={{ fontSize: '74px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }} className='text-center pb-5'>About Me</h1>
            </ScrollAnimation>


            <div className="col-md-5 px-5 mx-5">
                <ScrollAnimation animateIn='bounceInLeft'
                    animateOut='bounceOutRight'>
                    <div>
                        <h4 className='mb-3' style={{ fontSize: '34px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Why you choose me?
                        </h4>
                        <p className='fs-5'>I am a skilled software developer with over 3 years of experience in full-stack development,
                            API design, and system integrations. Currently, I lead technology at Lehoa, specializing in
                            building scalable platforms, managing deployments, and enhancing user experiences. I excel
                            in solving complex problems, collaborating with teams, and delivering impactful solutions
                            with a focus on innovation and efficiency. I am available to contribute to part-time or
                            contractual challenging projects.
                         </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                    <div>
                        <h4 className='my-5' style={{ fontSize: '34px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Some of My Skills</h4>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2  px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>JavaScript</button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2  px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>TypeScript</button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2 px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>React Js </button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2 px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>Next Js </button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2 px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>Vue Js </button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2 px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>Nuxt Js </button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2 px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>SvelteKit</button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2  px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>AWS</button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2  px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>Node Js</button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2  px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>MongoDB</button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2  px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>PostgreSQL</button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2  px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>Prisma</button>
                        <button className="btn text-white fw-bold fs-5 mx-2 mb-2  px-3 py-2" style={{ backgroundColor: 'goldenrod' }}>Firebase</button>
                    </div>
                </ScrollAnimation>

            </div>
            <div className="col-md-5">
                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                    <img className="w-100 rounded-circle" height="500px" src="https://i.ibb.co/PxyVSd4/ben-kolde-bs2-Ba7t69m-M-unsplash.jpg" alt="" />
                </ScrollAnimation>
            </div>

        </div>
    );
};

export default About;