import React from 'react';
import './Extra.css';
import pic1 from '../../../Images/img/pic11.png'

const Extra = () => {
    return (
        <div className='container mt-5'>
            <h3 className="fw-bolder">Trending products</h3>
            <hr className='bg-danger' />
            <div className=' news-card'>
                <div className='m-2'>
                    <div className="card mb-3 shadow-lg border border-danger" style={{ width: "100%" }}>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <img src={pic1} className="img-fluid rounded-start h-100" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-2'>
                    <div className="card mb-3 shadow-lg border border-danger" style={{ width: "100%" }}>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <img src={pic1} className="img-fluid rounded-start h-100" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-2'>
                    <div className="card mb-3 shadow-lg border border-danger" style={{ width: "100%" }}>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <img src={pic1} className="img-fluid rounded-start h-100" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-2'>
                    <div className="card mb-3 shadow-lg border border-danger" style={{ width: "100%" }}>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <img src={pic1} className="img-fluid rounded-start h-100" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/*---------------------------- last section ------------------------------------------- */}
            <div className="row g-4 mt-5 mb-5">
                <div className="col-md-6 text-light text-start rounded part-1">
                    <h3 className="fw-bolder pt-5 ms-5 mt-5">Our Market Places:</h3>
                    <hr className="bg-light ms-5" />
                    <p className='ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, praesentium id deserunt sint similique omnis deleniti dolor nihil provident dicta.</p>
                    <div className="row ms-5 mb-3">
                        <div className="col-md-6">
                            <h1>12000+</h1>
                            <p>Products</p>
                        </div>
                        <div className="col-md-6"><h1>16000+</h1>
                            <p>Products were sold</p></div>
                        <div className="col-md-6"><h1>5500+</h1>
                            <p>Customers</p></div>
                        <div className="col-md-6"><h1>3000+</h1>
                            <p>Sellers</p></div>
                    </div>

                </div>
                <div className="col-md-6 text-start border border-5">
                    <h3 className="fw-bolder  ms-5 mt-5">Drop Us a Line</h3>
                    <p className='ms-5'>WE ARE HAPPY TO HEAR FROM YOU. YOUR SUGGESTIONS WILL IMPROVE OUR MARKETPLACE THE BEST</p>
                    <div className="ms-5">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message:</label>
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                        <div className="col-12 mb-3">
                            <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;