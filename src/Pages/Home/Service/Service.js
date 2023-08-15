import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Service.css";

const Service = ({ service }) => {
    const { id, name, img, address, time } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2 className='font-bold mt-2'>{name}</h2>
            <p>Time: {time}</p>
            <p className='mb-2'><small>{address}</small></p>
            {/* <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book:{name}</button> */}
            <Link to={"/appoinment"}>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-dark btnColor'>Appoinment
                </button>
            </Link>
        </div>
    );
};

export default Service;