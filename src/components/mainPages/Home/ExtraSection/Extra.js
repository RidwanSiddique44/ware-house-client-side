import React from 'react';
import './Extra.css';
import pic1 from '../../../Images/img/camera.png';
import pic2 from '../../../Images/img/speaker.png';
import pic3 from '../../../Images/img/headphone.png';
import pic4 from '../../../Images/img/earbud.png';

const Extra = () => {
    return (
        <div className='container mt-5'>
            <h3 className="fw-bolder" style={{ color: 'Highlight' }}>TRENDING PRODUCTS OF THE WEEK</h3>
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
                                    <h5 className="card-title">CANNON EOS </h5>
                                    <p className="card-text">Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR) and mirrorless camera series produced by Canon Inc. Introduced in 1987 with the Canon EOS 650, all EOS cameras used 35 mm film until October 1996 when the EOS IX was released using the new and short-lived APS film.</p>
                                    <p className="card-text"><small className="text-muted">Only 120 products are available in the stock.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-2'>
                    <div className="card mb-3 shadow-lg border border-danger" style={{ width: "100%" }}>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <img src={pic2} className="img-fluid rounded-start h-100" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">JBL XTREME</h5>
                                    <p className="card-text">Hear the bass, feel the bass, see the bass. Dual external passive radiators, Splash proof; Take crystal clear calls, with the touch of a button thanks to the noise and echo cancelling speakerphone Built-in rechargeable li-ion battery and charges devices via dual USB ports</p>
                                    <p className="card-text"><small className="text-muted">Only 190 products are available in the stock.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-2'>
                    <div className="card mb-3 shadow-lg border border-danger" style={{ width: "100%" }}>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <img src={pic3} className="img-fluid rounded-start h-100" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">IGRID 4OC </h5>
                                    <p className="card-text">Headphone that features low latency and has advanced sound quality, and that can bear good fault tolerance.With 90dB is enough to provide a deep and strong sound. Music lovers should look for at least  40mm big dynamic speaker unit that will make you feel every beat.</p>
                                    <p className="card-text"><small className="text-muted">Only 300 products are available in the stock.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-2'>
                    <div className="card mb-3 shadow-lg border border-danger" style={{ width: "100%" }}>
                        <div className="row g-2">
                            <div className="col-md-4">
                                <img src={pic4} className="img-fluid rounded-start h-100" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">HYLOUN GTI PRO </h5>
                                    <p className="card-text">
                                        Built-in Realtek 8763 chip and Bluetooth 5.0.
                                        7.2mm dynamic driver unit.
                                        Comfortable to wear with silicone earbuds.Crystal clear sound quality. Easy to charge. Good wirless connection,With 90dB is enough to provide a deep and strong sound
                                        Come with 300mAh charging dock for 12 hours of battery life.
                                    </p>
                                    <p className="card-text"><small className="text-muted">Only 420 products are available in the stock.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/*---------------------------- last section ------------------------------------------- */}
            <div className="row g-4 mt-5 mb-5">
                <div className="col-md-6 text-light text-start rounded part-1  border border-5 border-light">
                    <h3 className="fw-bolder pt-5 ms-5 mt-5">Our Market Places:</h3>
                    <hr className="bg-light ms-5" />
                    <p className='ms-5'>Our major marketplace are eBay, Craigslist, Facebook Marketplace, Swappa, and OfferUp. Though their features and policies overlap, each has strengths and weaknesses that distinguish it from the competition.</p>
                    <div className="row ms-5 mb-3">
                        <div className="col-md-6">
                            <h1>19000+</h1>
                            <p>Products</p>
                        </div>
                        <div className="col-md-6"><h1>12000+</h1>
                            <p>Products were sold</p></div>
                        <div className="col-md-6"><h1>5500+</h1>
                            <p>Customers</p></div>
                        <div className="col-md-6"><h1>3000+</h1>
                            <p>Sellers</p></div>
                    </div>

                </div>
                <div className="col-md-6 text-start border border-5 border-light text-light form-div">
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
                            <button type="submit" className="btn btn-light border border-3 border-info fw-bolder">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;