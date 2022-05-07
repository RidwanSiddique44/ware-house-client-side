import React from 'react';
import facebook from '../../Images/Icons/facebook.png';
import insta from '../../Images/Icons/instagram.png';
import twitter from '../../Images/Icons/twitter.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>ADDRESS</h4>
                        <div className='underline'></div>
                        <h5 className="list-unstyled fw-normal">
                            <li>342-420-6969</li>
                            <li>Moscow, Russia</li>
                            <li>123 Streeet  North</li>
                        </h5>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>PRODUCTS</h4>
                        <div className='underline'></div>
                        <div className="list-unstyled">
                            <li>ELECTRONIX</li>
                            <li>OTHER STUFF</li>
                            <li>ELECTRIC STUFF</li>
                        </div>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>FOLLOW US</h4>
                        <div className='underline'></div>
                        <div className="list-unstyled">
                            <li className='mb-1'><img src={facebook} className='social-icon' /> FACEBOOK</li>
                            <li className='mb-1'><img src={insta} className='social-icon' /> INSTAGRAM</li>
                            <li className='mb-1'><img src={twitter} className='social-icon' /> TWITTER</li>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row copyright">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} GADGET HOUSE | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;