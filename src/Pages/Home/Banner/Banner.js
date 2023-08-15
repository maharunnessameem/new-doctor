import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/dr12.jpg';
import banner2 from '../../../images/banner/dr13.jpg';
import banner3 from '../../../images/banner/dr14.jpg';

import './Banner.css'
import { Link } from 'react-router-dom';
import Modal from './Emergency/Modal';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div id='banner' className='mx-40  my-18 rounded'>
            <div className='mt-10 '>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='text-dark bg-slate-500 lg:mx-60 sm:mx-10 sm:mb-0 font-bold'>
                            <h3 >Dr. Faruk</h3>
                            <div className='flex gap-2 justify-center mt-2'>
                                <Link to={"/services"}>
                                    <button className='bg-slate-200 p-1 rounded text-xs'>BOOK APOINMENT</button>
                                </Link>
                                <button
                                    onClick={openModal}
                                    className='bg-slate-200 p-1 rounded text-xs'
                                >
                                    EMERGENCY CALL
                                </button>
                                <Modal isOpen={isModalOpen} onClose={closeModal}>
                                    <p>Call +880 1639907974</p>
                                    <p>Ambulance +880 24687648</p>
                                </Modal>
                            </div>
                            {/* <p>Cardiologist</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='text-dark bg-slate-500 lg:mx-60 sm:mx-10 sm:mb-0 font-bold'>
                            <h3 >Dr. Faruk</h3>
                            <div className='flex gap-2 justify-center mt-2'>
                                <Link to={"/services"}>
                                    <button className='bg-slate-200 p-1 rounded text-xs'>BOOK APOINMENT</button>
                                </Link>
                                <button
                                    onClick={openModal}
                                    className='bg-slate-200 p-1 rounded text-xs'
                                >
                                    EMERGENCY CALL
                                </button>
                                <Modal isOpen={isModalOpen} onClose={closeModal}>

                                    <p>Call +880 1639907974</p>
                                    <p>Ambulance +880 24687648</p>

                                </Modal>
                            </div>
                            {/* <p>Cardiologist</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className='text-dark bg-slate-500 lg:mx-60 sm:mx-10 sm:mb-0 font-bold'>
                            <h3 >Dr. Faruk</h3>
                            <div className='flex gap-2 justify-center mt-2'>
                                <Link to={"/services"}>
                                    <button className='bg-slate-200 p-1 rounded text-xs'>BOOK APOINMENT</button>
                                </Link>
                                {/* <button className='bg-slate-200 p-1 rounded text-xs'>EMERGENCY CALL</button> */}
                                <button
                                    onClick={openModal}
                                    className='bg-slate-200 p-1 rounded text-xs'
                                >
                                    EMERGENCY CALL
                                </button>
                                <Modal isOpen={isModalOpen} onClose={closeModal}>
                                    <p>Call +880 1639907974</p>
                                    <p>Ambulance +880 24687648</p>
                                </Modal>
                            </div>
                            {/* <p>Cardiologist</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;