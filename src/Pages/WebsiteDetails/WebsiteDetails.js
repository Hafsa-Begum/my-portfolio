import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const WebsiteDetails = () => {
    const { id } = useParams();
    const [websites] = useFetch();
    const selectedWebsite = websites.filter(website => website.id === +id);
    // const { name, images, server, client, live, description } = selectedWebsite[0];
    return (
        <div className='my-5'>
            <div className='row mb-5'>
                <h1 className='mt-5 pt-5'> <span style={{ fontSize: '64px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>{selectedWebsite[0]?.name}</span></h1>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    <h2 className='mt-5' style={{ fontSize: '44px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Home Page</h2>
                    <img style={{ minheight: '800px' }} className="w-75" src={selectedWebsite[0]?.images.full} alt="" />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className='mt-5'>
                        <div>
                            <h1 className='my-5' style={{ fontSize: '44px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Important Links</h1>
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
                            <h1 className='my-5' style={{ fontSize: '54px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>About</h1>
                            <div >
                                <h3 className='text-start mb-3' style={{ fontSize: '44px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Features:</h3>
                                <ul>
                                    <li><p className='fs-4 mx-5 text-start'>{selectedWebsite[0]?.description.d1}</p></li>
                                    <li><p className='fs-4 mx-5 text-start'>{selectedWebsite[0]?.description.d2}</p></li>
                                    <li><p className='fs-4 mx-5 text-start'>{selectedWebsite[0]?.description.d3}</p></li>
                                    <li><p className='fs-4 mx-5 text-start'>{selectedWebsite[0]?.description.d4}</p></li>
                                    <li><p className='fs-4 mx-5 text-start'>{selectedWebsite[0]?.description.d5}</p></li>
                                </ul>
                            </div>
                            {/* <p className='fs-4 mx-5 text-start'>{selectedWebsite[0]?.description.short}</p> */}
                            <h3 className='mt-5 mb-3 text-start' style={{ fontSize: '44px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Technology:</h3>
                            <p className='fs-4 mx-5 text-start'>{selectedWebsite[0]?.description.tech}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='my-5' style={{ fontSize: '54px', color: "goldenrod", fontFamily: "'Dancing Script', 'cursive'" }}>Others Page</h2>
                        <img style={{ minheight: '400px' }} className="w-75" src={selectedWebsite[0]?.images.img2} alt="" />
                        <img className="w-75 mt-5" src={selectedWebsite[0]?.images.img3} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WebsiteDetails;