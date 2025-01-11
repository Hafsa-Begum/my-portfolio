import React from 'react';
import Typing from 'react-typing-animation';

const Blogs = () => {
    return (
        <div id='blogs'>
                <h1 className='py-5' style={{
                    fontSize: '74px',
                    color: 'goldenrod',
                    fontFamily: "'Dancing Script', 'cursive'"
                }}>Blogs</h1>

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