import React from 'react';
import './Footer.css';
import fbLogo from '../../../images/footer/Facebook.png'
import gitLogo from '../../../images/footer/GitHub.png'
import footerLogo from '../../../images/HeaderLogo/header logo.png'

const Footer = () => {
    return (
        <>
            {/* <div className='footer-container bg-dark mx-auto'>
                <div className='footer w-3/4 justify-between'>
                    <div className='footer-col w-50 ms-4 m-2  justify-content-start'>
                        <div className='m-3 logo d-flex align-items-center'>
                            <img className='rounded-circle mb-1' src={footerLogo} alt="" />
                            <h4 className='ms-2 text-warning mb-1'>Join us with our fitness club</h4>
                        </div>
                        <p className='ms-4 text-white mb-1 p-0'>Level-4, 104 Badda, Mouchak</p>
                        <p className='ms-4 text-white mb-1 p-0'>Email: nasirAhmed8202@gmail.com</p>
                        <p className='ms-4 text-white mb-1 p-0'>(Available from 9AM-5Pm)</p>
                    </div>


                    <div className='footer-col'>
                        <div className='m-4 text-primary w-3/4'>
                            <p className='ms-4 mb-1 p-0'>Home</p>
                            <p className='ms-4 mb-1 p-0'>About us</p>
                            <p className='ms-4 mb-1 p-0'>Success page</p>
                            <p className='ms-4 mb-1 p-0'>Terms and Condition</p>
                        </div>
                    </div>


                    <div className='footer-col m-4 text-white'>
                        <h4 className='mb-1 ms-4 p-0 text-primary text-3xl'>Follow us</h4>
                        <div className='flex'>
                            <img className='m-3 ms-4 rounded-circle' src={fbLogo} alt="" />
                            <img className='m-3 ms-4 rounded-circle' src={gitLogo} alt="" />
                        </div>
                    </div>

                </div>
                <div>
                    <p className='text-center text-light p-3'><small><small className='m-2'>Copyright &copy; {new Date().getFullYear()} From Touring Fitness Club</small></small></p>
                </div>
            </div> */}



            <footer className='footer'>
                <div className='footer-container'>
                    <div className='row'>
                        <div className='footer-col'>
                            <h4 className='ms-5 mb-5'>company</h4>
                            <ul className='m-3'>
                                <li><a hrf='#'>Level-4, 104 Badda, Mouchak</a> </li>
                                <li><a hrf='#'>Email: nasirAhmed8202@gmail.com</a> </li>
                                <li><a hrf='#'>(Available from 9AM-5Pm)</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4 className='ms-5 mb-5'>Get help</h4>
                            <ul className='m-3'>
                                <li><a hrf='#'>Home</a> </li>
                                <li><a hrf='#'>About us</a> </li>
                                <li><a hrf='#'>Success page</a> </li>
                                <li><a hrf='#'>Our blogs</a> </li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4 className='ms-5 mb-5'>Online service</h4>
                            <ul className='m-3'>
                                <li><a hrf='#'>Terms and conditions</a> </li>
                                <li><a hrf='#'>FAQS</a> </li>
                                <li><a hrf='#'>Privacy policy</a> </li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4 className='ms-5 mb-5'>Follow us</h4>
                            <div className='social-links ms-4'>
                                <a hrf='#' ><img className='m-3 ' src={fbLogo} alt="" /></a>
                                <a hrf='#' ><img className='m-3' src={gitLogo} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;