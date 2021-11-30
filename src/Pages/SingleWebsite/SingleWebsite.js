import React from 'react';

const SingleWebsite = ({ site }) => {
    const { images, name, description } = site;
    return (
        <div className="col-md-4 col-sm-6 col-12 my-3">
            <div style={{ backgroundColor: '' }} className="mx-3">
                <div>
                    <img style={{ height: '250px' }} className="w-100" src={images.img1} alt="" />
                </div>
                <h4 style={{ color: 'goldenrod' }} className="my-3">{name}</h4>
                <p className='text-white text-start'>{description.short.slice(0, 202)}</p>
                <button className="w-100 btn text-white fw-bold fs-5  px-5 py-2" style={{ backgroundColor: 'goldenrod' }}>Explore more</button>
            </div>

        </div>
    );
};

export default SingleWebsite;