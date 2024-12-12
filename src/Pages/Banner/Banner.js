import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-tsparticles';
import Typing from 'react-typing-animation';
import './Banner.css';

const Banner = () => {
    return (
        <div className='background-img' >

            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 20,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 1,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "image",
                                "circle"
                            ],
                            "image": [
                                {
                                    "src": "/react.png",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "/js.png",
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": "/mongodb.png",
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": "/html.png",
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": "/css.png",
                                    "height": 20,
                                    "width": 20
                                }
                            ]
                        },
                        "color": {
                            "value": "#CCC"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 10,
                                "sync": false
                            }
                        }
                    },
                    "retina_detect": false
                }} style={{
                    backgroundImage: "url('https://wallpaperaccess.com/full/5651982.jpg')",
                    backgroundColor: '#cccccc',
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    zIndex: '-1'
                }} />
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
                            <span style={{
                                fontSize: '74px',
                                color: 'goldenrod',
                                fontFamily: "'Dancing Script', 'cursive'",
                            }} className='pb-3 my-3' >Mst Hafsa Begum</span>
                        </ScrollAnimation>
                    </h1>


                    <Typing loop={true}>
                        <div>
                            <h1 style={{ fontFamily: "'Dancing Script', 'cursive'" }} className='pb-3 text-white'>
                                <span>Frontend Developer</span>
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
                    {/* <button className="btn text-white fw-bold fs-5  px-5 py-2" style={{ backgroundColor: 'goldenrod' }}>Hire Me </button> */}
                </div>
            </div>
        </div >
    );
};

export default Banner;