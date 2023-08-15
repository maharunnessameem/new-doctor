import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [text, setText] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div className="w-full my-20 flex justify-center items-center ">
            <div className="bg- w-full md:w-1/2 flex flex-col items-center py-6 px-8 contact">
                <p className="text-dark text-3xl font-extrabold mb-2">GET IN TOUCH</p>
                {/* <p>We’re more than happy to answer any questions that you may have. Please fill out the form below and we’ll get back to you as soon as we can.</p> */}
                <br />

                <form
                    onSubmit={handleSubmit}
                    action="#"
                    className="w-full flex flex-col justify-center rounded-lg border-[#393646]"
                >
                    <div className="mb-4">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#E7303E]"
                        />
                    </div>

                    <div className="mb-4">
                        <p className='text-dark mb-2'>Write your message</p>
                        <input

                            type="textarea"
                            placeholder=''

                            className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-[#393646]" />
                    </div>


                    <button

                        className="tracking-wide font-semibold bg-[#393646] text-gray-100 w-full py-4 rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >


                        <span className="ml-3">Send Message</span>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Contact;