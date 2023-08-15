import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import './Appoinment.css'
import Modal from '../Home/Banner/Emergency/Modal';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    // console.log(date)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='appoinment lg:mx-40 mx-10'>
            <div className=' min-h-full mx-10 md:mx-52 mt-10  '>
                <h5 className='text-dark font-bold mt-10'>Please select date and time</h5>
                <br />
                <br />
                {/* <h5 className='text-slate-400 font-bold'>
                    By default, Dhaka's time is being shown. If you are in another time zone, you may select yours and the time-slots will be shown according to your selection.
                </h5> */}
            </div>

            <div className='min-h-full  md:mx-52 mt-0  mb-5  gap-3 justify-center  '>
                <div className='flex gap-2'>
                    <div className='w-80'>
                        <label for="countries" className="font-bold block mb-2 text-sm  dark:text-white" style={{ color: "black" }}>Chamber</label>
                        <select id="countries" className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#393646] focus:border-[#393646] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#393646] dark:focus:border-[#393646] mb-5">
                            <option selected>Select chamber</option>
                            <option value="Chevron Clinical Laboratory (PVT) Ltd">Chevron Clinical Laboratory (PVT) Ltd</option>
                            <option value="Delta Health Care, Chittagong Ltd">Delta Health Care, Chittagong Ltd</option>
                            <option value="Centre for Specialized Care & Research">Centre for Specialized Care & Research</option>
                            <option value="Imperial Hospital Limited">Imperial Hospital Limited</option>
                            <option value="Online">Online</option>

                        </select>
                    </div>
                    <div className='w-80'>
                        <label for="countries" className="font-bold block mb-2 text-sm  dark:text-white" style={{ color: "black" }}>Time</label>
                        <select id="countries" className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#393646] focus:border-[#393646] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#393646] dark:focus:border-[#393646] mb-5">
                            <option selected>Select Time</option>
                            <option value="Chevron Clinical Laboratory (PVT) Ltd">3:00 pm</option>
                            <option value="Delta Health Care, Chittagong Ltd">4:00 pm</option>
                            <option value="Centre for Specialized Care & Research">5:00 pm</option>
                            {/* <option value="Imperial Hospital Limited">Imperial Hospital Limited</option>
                            <option value="Online">Online</option> */}

                        </select>
                    </div>
                </div>


                <div className='flex'>
                    {/* <h1 className='text-center'>React Calendar</h1> */}
                    <div className='calendar-container rounded ' >
                        <Calendar onChange={setDate} value={date} />
                    </div>
                    <div className='flex flex-col'>

                        <button className='ml-10 rounded p-5 mb-2 text-white bg-[#393646]'>
                            {/* <span className='bold'>Selected Date:</span> */}
                            {/* {' '} */}
                            {date.toDateString()}

                        </button>
                        {/* <button className='ml-10 rounded p-5 border mb-2'>3:00 pm</button>
                        <button className='ml-10 rounded p-5 border mb-2'>4:00 pm</button>
                        <button className='ml-10 rounded p-5 border mb-2'>5:00 pm</button> */}
                    </div>

                </div>


            </div>



            {/* <div className=' min-h-full mx-10 md:mx-52 mt-10 lg:ml-40 '>
                <h5 className='text-slate-400 font-bold'>You selected a booking for Session by Mithila Khandaker at 3:00 pm on December 25, 2022. The price for the service is ৳3,000.00</h5>
                <h5 className='text-slate-400 font-bold'>
                    Please provide your details in the form below to proceed with booking.
                </h5>
            </div> */}
            <div className='flex gap-3 mx-10 min-h-full mt-10  justify-center'>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" style={{ color: "#393646" }} for="username">
                        Full name
                    </label>
                    <input className="shadow appearance-none border-transparent bg-slate-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#393646] " id="username" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" style={{ color: "#393646" }} for="username">
                        Phone
                    </label>
                    <input className="shadow appearance-none border-transparent bg-slate-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" style={{ color: "#393646" }} for="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border-transparent bg-slate-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                </div>

            </div>




            <div className='flex gap-4 justify-center'>
                <Link to={"/services"}>
                    <button className=" font-bold px-5 py-2  mb-10 rounded text-white" style={{ backgroundColor: "#393646" }}>Back</button>
                </Link>
                <Link to={""}>
                    <button onClick={openModal} className=" font-bold px-5 py-2  mb-10 rounded text-white" style={{ backgroundColor: "#393646" }}>Submit</button>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <p>Successfully Done</p>

                    </Modal>
                </Link>
            </div>
            <h3 className='font-bold text-gray-600'>For urgent consultation please contact: <br />
                +8809638 505 505 | +8801763 438 148 <br />
                Time: 9:00 AM – 10:00 PM</h3>

        </div>
    );
};

export default Appoinment;