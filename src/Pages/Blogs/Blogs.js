import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Typing from 'react-typing-animation';

const Blogs = () => {
    return (
        <div id='blogs'>
            <ScrollAnimation animateIn='bounceInLeft'
                animateOut='bounceOutRight'>
                <h1 className='py-5' style={{
                    fontSize: '74px',
                    color: 'goldenrod',
                    fontFamily: "'Dancing Script', 'cursive'"
                }}>Blogs</h1>
            </ScrollAnimation>

            <Typing loop={true}>
                <h1 style={{
                    fontSize: '34px',
                    color: 'goldenrod',
                    fontFamily: "'Dancing Script', 'cursive'"
                }}>Comming Soon...</h1>
                <Typing.Backspace count={50} />

            </Typing>

        </div>
    );
};

export default Blogs;