import React from 'react';
import logo from '../../portfolio-imgs/image (1).png';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-5'>
            <img className="rounded-circle" src={logo} alt="" />
            <p style={{ fontSize: '34px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }} className='my-3'>Copyright © All right reserved by Mst Hafsa Begum</p>
        </div>
    );
};

export default Footer;