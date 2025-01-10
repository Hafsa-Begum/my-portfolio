import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Typing from 'react-typing-animation';
import './Banner.css';
import ParticlesComponent from './ParticlesComponent';

const Banner = () => {
    return (
        <div className='background-img' >
            <ParticlesComponent/>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}
                className='d-flex justify-content-center align-items-center py-5 text-center px-5'>
                <div className="px-5 mx-5 text-center ">

                    <h1 className='pt-5 mt-5 text-white'><span style={{ fontFamily: "'Dancing Script', 'cursive'", }}>Hello, I am</span> <br /></h1>
                    <h1 id='banner-name' className='pt-2'>
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY'>
                            <span style={{color: 'goldenrod',fontFamily: "'Dancing Script', 'cursive'"}} className='pb-3 my-3 my-name' >Mst Hafsa Begum</span>
                        </ScrollAnimation>
                    </h1>


                    <Typing loop={true}>
                        <div>
                            <h1 style={{ fontFamily: "'Dancing Script', 'cursive'" }} className='pb-3 text-white'>
                                <span>Software Developer</span>
                                <Typing.Delay ms={100} />
                                <Typing.Backspace count={50} />
                                <span>Responsive Web Designer</span> </h1>
                            <Typing.Backspace count={50} />
                        </div>
                    </Typing>

                    <div className='d-flex justify-content-center'>
                        <div className="regular-btn">
                            <ul>
                                <li>
                                    Hire Me
                                    <span></span><span></span><span></span><span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div >
    );
};

export default Banner;