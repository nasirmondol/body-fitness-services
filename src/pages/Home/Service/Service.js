import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, id, img, price} = service;
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h5>{name}</h5>
            <h6>Name: ${price}</h6>
        </div>
    );
};

export default Service;