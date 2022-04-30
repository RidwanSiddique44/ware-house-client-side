import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../Images/img/banner1.png'
import banner2 from '../../../Images/img/banner2.png'
import banner3 from '../../../Images/img/banner3.png'

const Banner = () => {
    return (
        <div >
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner banner-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Head phones</h3>
                        <p>We have populer stock of headphones.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner banner-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>jBL speakers</h3>
                        <p>We have populer stock of speakers. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner banner-img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>other products</h3>
                        <p>We have populer stock of others.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;