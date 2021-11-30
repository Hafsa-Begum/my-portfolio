import React from 'react';

const About = () => {
    return (
        <div id="about" className='row  py-5 text-white text-start px-5'>
            <h1 style={{ fontSize: '74px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }} className='text-center pb-5'>About Me</h1>
            <div className="col-md-5 px-5 mx-5">
                <h4>Why you choose me?
                </h4>
                <p className=''>I am a junior web developer, familiar with HTML5, CSS3, JavaScript, React, Firebase, Node JS, MongoDB, Express JS, Payment Gateway-stripe, C, flexible with multiple css libraries - Bootstrap-5, React-Bootstrap, Material UI, Tailwind CSS. I have done some real-world projects always focusing on clean code, organized work, and time management. I am currently looking for a job to accelerate my skills and prove my ability on professional projects.</p>
            </div>
            <div className="col-md-5">
                <img className="w-100" height="500px" src="https://i.ibb.co/PxyVSd4/ben-kolde-bs2-Ba7t69m-M-unsplash.jpg" alt="" />
            </div>

        </div>
    );
};

export default About;