import React from 'react';

const SingleWebsite = ({ site }) => {
    const { image, name } = site;
    return (
        <div className="col-md-4 col-sm-6 col-12 my-3">
            <div className="mx-5">
                <div>
                    <img style={{ height: '250px' }} className="w-100" src={image} alt="" />
                </div>
                <h4>{name}</h4>
            </div>

        </div>
    );
};

export default SingleWebsite;