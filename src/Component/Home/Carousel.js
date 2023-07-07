import React from 'react';
import { Link } from 'react-router-dom';
const Carousel = () => {
    return (
        <div>
            <div className="container-fluid w-100 p-0 mb-5">
                <div className="owl-carousel w-100 header-carousel position-relative">
                    <div className="owl-carousel-item position-relative w-full">
                        <img className="img-fluid w-100" src="img/carousel-1.jpg" alt=""/>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" Style="background: rgba(24, 29, 56, .7);">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best <span className='text-warning'>Software</span> company </h5>
                                            <h1 className="display-3 text-white animated slideInDown">The Best <span className='text-danger '>Web Development</span> Platform</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                            <Link to="/contact" className="btn btn-danger py-md-3 px-md-5 me-3 animated slideInLeft">Contact Us</Link>
                                            {/* <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Carousel;