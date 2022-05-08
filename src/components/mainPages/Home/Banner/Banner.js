import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../Images/img/banner1.png'
import banner2 from '../../../Images/img/banner2.png'


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
                        <h3>HEAD-PHONES</h3>
                        <p>Inroducing our populer collection of headphones.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner banner-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>SMART-WATCH</h3>
                        <p>Introducing our populer collection of smart watch. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;