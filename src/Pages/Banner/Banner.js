import React from 'react';
import Typing from 'react-typing-animation';
import './Banner.css';
const roles = [
    {
        id: 1,
        name: 'Web Developer',
    },
    {
        id: 2,
        name: 'Web Designer'
    }
];

const Banner = () => {
    return (
        <div className='background-img'>
            <div className='d-flex justify-content-center align-items-center py-5 text-center px-5'>
                <div className="px-5 mx-5 text-center">

                    <h1 id='banner-name' className='pt-5 mt-5, text-white'>Hello, I am <br /> <span style={{
                        fontSize: '64px',
                        color: 'tomato',
                    }} className='pb-3' >Mst Hafsa Begum</span></h1>
                    <h2 className='pb-3 text-white'>Web Developer</h2>

                    {/* <div className='text-white'>{roles.map(role => <div>
                        <Typing delay={500}>
                            <h4>{role.name}</h4>
                        </Typing>
                    </div>
                    )}</div> */}
                    <button className="btn text-white fw-bold  px-3 py-2" style={{ backgroundColor: 'tomato' }}>Hire Me </button>
                </div>
            </div>
        </div >
    );
};

export default Banner;