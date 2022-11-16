import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, id, img, price } = service;
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h5 className=' m-2 text-primary'>{name}</h5>
            <h6 className=' m-2 text-primary'>Name: ${price}</h6>
            <Button className='m-2 my-3 font-bold align-items-center w-50 d-flex' variant='warning'>
                <Link to='/blogs'>Check Out</Link>
            </Button>
        </div>
    );
};

export default Service;