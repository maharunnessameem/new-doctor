import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/dr12.jpg';
import banner2 from '../../../images/banner/dr13.jpg';
import banner3 from '../../../images/banner/dr14.jpg';

import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div id='banner' className='container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3>Mr. Doctor</h3>
                        <p>Cardiologist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Mr. Doctor</h3>
                        <p>Cardiologist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Mr. Doctor</h3>
                        <p>
                            Cardiologist
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;