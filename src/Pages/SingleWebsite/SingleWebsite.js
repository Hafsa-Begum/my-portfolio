import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleWebsite = ({ site }) => {
    const { images, name, description, id } = site;
    return (
        <div className="col-md-4 col-sm-6 col-12 my-3">
            <div style={{ backgroundColor: '' }} className="mx-3">
                <div>
                    <img style={{ height: '250px' }} className="w-100" src={images.img1} alt="" />
                </div>
                <h4 style={{ color: 'goldenrod' }} className="my-3">{name}</h4>
                <p className='text-white text-start'>{description.short.slice(0, 202)}</p>
                <div className='d-flex'>
                    <NavLink className='text-decoration-none' to={`/portfolio/${id}`}>
                        <div className="regular-btn">
                            <ul>
                                <li>
                                    Explore More
                                    <span></span><span></span><span></span><span></span>
                                </li>
                            </ul>
                        </div>
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default SingleWebsite;