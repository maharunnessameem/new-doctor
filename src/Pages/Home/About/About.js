import React from 'react';
import mock from '../../../images/banner/dr6.png'
import './About.css'

const About = () => {
    return (
        <div>
            <div className='min-h-full mx-20 md:mx-52  mb-5 lg:mb-10 my-20'>
                <div className='grid lg:grid-cols-2 gap-2 justify-center items-center sm:flex-row'
                // 'lg:flex flex-col lg:flex-row 
                // justify-center items-center'
                >
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={mock} alt={mock} className="w-full h-full md:max-w-full rounded-lg bg " />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0 mt-20'>

                        <h2 className="text-3xl lg:text-4xl text-dark font-bold mb-6 text-center lg:text-left">DR. MD OMAR FARUK</h2>
                        <p className="mb-6 text-base lg:text-lg text-dark font-semibold text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae. Eveniet quidem, natus cumque itaque hic, harum sed accusamus illo sapiente excepturi ullam impedit veritatis adipisci nulla tenetur quod iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ad ducimus at odit recusandae neque nulla. Repudiandae, deserunt ex corrupti at veritatis reiciendis quisquam! Doloremque aspernatur expedita quo exercitationem explicabo!
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className='min-h-full mx-10 md:mx-52  mb-5 lg:mb-10 lg:mt-20'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center'>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={mock} alt={mock} className="w-full md:max-w-full rounded-lg " />
                    </div>
                    <div className='lg:ml-5 mb-5 lg:mb-0'>
                        
                        <h2 className="text-3xl lg:text-4xl text-[#000f38] font-bold mb-6 text-left lg:text-left">DR. MD OMAR FARUK</h2>
                        <p className="mb-6 text-base lg:text-lg text-[#000f38] font-semibold text-left lg:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ipsa facilis commodi necessitatibus in, voluptatibus, tempora delectus nemo, consequuntur molestias ab officia a excepturi iure animi laudantium error nostrum assumenda.
                            lorem</p>
                    </div>
                </div>
            </div> */}
            {/* <Row>
                <Col>
                    <img src={mock} alt={mock} />
                </Col>
                <Col>
                    <div >
                        <h2 >Take Mock Interviews On Your Own</h2>
                        <p >Take unlimited interviews and master your skills from anywhere.No awkward meetups required.</p>
                    </div>
                </Col>
            </Row> */}

        </div>
    );
};

export default About;