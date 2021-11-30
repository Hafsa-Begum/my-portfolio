import React from 'react';
import logo from '../../portfolio-imgs/image (3).png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-5'>
            <img className="rounded-circle" src={logo} alt="" />
            <h1 style={{ fontSize: '44px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }} >Follow Me</h1>
            <div className='icon-container'>
                <a href="https://www.linkedin.com/in/hafsa-begum-8ba368227/" target="_blank" rel="noreferrer"><i className=" icon fs-2 fab fa-linkedin-in"></i></a>
                <a href="https://github.com/Hafsa-Begum/" target="_blank" rel="noreferrer"><i className="icon fs-2 fab fa-github"></i></a>
                <a href="https://twitter.com/MstHafsaBegum1" target="_blank" rel="noreferrer"><i class="icon fs-2 fab fa-twitter"></i></a>
                <a href="http://" target="_blank" rel="noreferrer"><i class="icon fs-2 fab fa-facebook"></i></a>

            </div>
            <p style={{ fontSize: '24px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }} className='my-3'>Copyright © All right reserved by Mst Hafsa Begum</p>
        </div>
    );
};

export default Footer;