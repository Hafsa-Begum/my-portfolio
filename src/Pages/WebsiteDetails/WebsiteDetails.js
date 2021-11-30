import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const WebsiteDetails = () => {
    const { id } = useParams();
    const [websites] = useFetch();
    const selectedWebsite = websites.filter(website => website.id === +id);
    // const { name, images, server, client, live, description } = selectedWebsite[0];
    return (
        <div className='mb-5'>
            <div className='row mb-5'>
                <h2 style={{ color: 'goldenrod !important' }} className='mt-5 pt-5'>Website Name: {selectedWebsite[0]?.name}</h2>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    <h2 className='mt-5'>Home Page</h2>
                    <img style={{ minheight: '800px' }} className="w-75" src={selectedWebsite[0]?.images.full} alt="" />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className='mt-5'>
                        <div>
                            <h1 className='my-5'>Important Links</h1>
                            <div className='d-flex'>
                                <div className="regular-btn">
                                    <ul>
                                        <li>
                                            <a className='text-decoration-none' href={selectedWebsite[0]?.live} target='_blank' rel="noreferrer">Live Site</a>
                                            <span></span><span></span><span></span><span></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="regular-btn">
                                    <ul>
                                        <li>
                                            <a className='text-decoration-none' href={selectedWebsite[0]?.client} target='_blank' rel="noreferrer">Client Code</a>
                                            <span></span><span></span><span></span><span></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="regular-btn">
                                    <ul>
                                        <li>
                                            <a className='text-decoration-none' href={selectedWebsite[0]?.server} target='_blank' rel="noreferrer">Server Code</a>
                                            <span></span><span></span><span></span><span></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            {/* <button className="btn text-white fw-bold fs-5  px-5 py-2 mx-2" style={{ backgroundColor: 'goldenrod' }}><a href={selectedWebsite[0]?.live} target='_blank' rel="noreferrer">Live Site</a></button>
                            <button className="btn text-white fw-bold fs-5  px-5 py-2 mx-2 my-2" style={{ backgroundColor: 'goldenrod' }}><a href={selectedWebsite[0]?.client} target='_blank' rel="noreferrer">Client Code</a></button>

                            <button className="btn text-white fw-bold fs-5  px-5 py-2" style={{ backgroundColor: 'goldenrod' }}><a href={selectedWebsite[0]?.server} target='_blank' rel="noreferrer">Server Code</a></button> */}
                        </div>
                        <div>
                            <h1 className='my-5'>About</h1>
                            <p className='fs-4 mx-5 text-start'>{selectedWebsite[0]?.description.short}</p>
                            <h3 className='my-5'>Technology</h3>
                            <p className='fs-4 mx-5 text-start'>{selectedWebsite[0]?.description.tech}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='mt-5'>Others Page</h2>
                        <img style={{ minheight: '400px' }} className="w-75" src={selectedWebsite[0]?.images.img2} alt="" />
                        <img className="w-75 mt-5" src={selectedWebsite[0]?.images.img3} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WebsiteDetails;