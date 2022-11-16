import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/banner/gym banner.jpg'
import banner2 from '../../../../images/banner/gym banner2.webp'
import banner3 from '../../../../images/banner/gym banner3.webp'

const Banner = () => {
    return (
        <div >
            <Carousel className='mt-5 p-3'>
                <Carousel.Item>
                    <img
                        height={450}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>Get our new service</h3>
                        <p className='text-warning'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={450}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={450}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;