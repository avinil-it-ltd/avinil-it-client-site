import React from 'react';

const HomeServices = () => {
    return (
        <div>
            <div  className="container-xxl py-5">
                <div className="container">
                    <div data-aos-duration="1000"   data-aos-offset="300" data-aos="fade-up"   className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="   bg-white text-center text-primary px-3">Top Services</h6>
                        <h1 className="mb-5">The World’s <span className='text-danger'> Most Reliable </span> IT Services</h1>
                    </div>
                    <div data-aos-duration="1000"   data-aos-offset="300" data-aos="fade-up"  className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp h-36" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-graduation-cap text-danger mb-4"></i>
                                    <h5 className="mb-3 text-success">Software Development</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp h-36" data-wow-delay="0.3s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-danger mb-4"></i>
                                    <h5 className="mb-3 text-success">Web Development</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp h-36" data-wow-delay="0.5s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-home text-danger mb-4"></i>
                                    <h5 className="mb-3 text-success">IT Solution</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-book-open text-danger mb-4"></i>
                                    <h5 className="mb-3 text-success">Organization Management</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default HomeServices;