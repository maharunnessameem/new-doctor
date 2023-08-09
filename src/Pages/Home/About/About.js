import React from 'react';
import mock from '../../../images/banner/dr6.png'
import { Col, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            {/* <div className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={mock} alt={mock} className="w-full md:max-w-full rounded-lg" />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>
                        <hr className='w-14 h-2 block mx-auto lg:mx-0 bg-red-600 rounded-md mb-5' />
                        <h2 className="text-3xl lg:text-4xl text-[#000f38] font-bold mb-6 text-center lg:text-left">Take Mock Interviews On Your Own</h2>
                        <p className="mb-6 text-base lg:text-lg text-[#000f38] font-semibold text-center lg:text-left">Take unlimited interviews and master your skills from anywhere.No awkward meetups required.</p>
                    </div>
                </div>
            </div> */}
            <Row>
                <Col>
                    <img src={mock} alt={mock} />
                </Col>
                <Col>
                    <div >
                        <h2 >Take Mock Interviews On Your Own</h2>
                        <p >Take unlimited interviews and master your skills from anywhere.No awkward meetups required.</p>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default About;