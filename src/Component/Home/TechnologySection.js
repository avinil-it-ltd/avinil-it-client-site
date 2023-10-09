import React from 'react';
import technology from "../../asset/Images/banner/technology-1.jpg"
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Swiper from 'swiper';
const TechnologySection = () => {
    return (
        <div>
            <div data-aos-duration="1000"   data-aos-offset="300" data-aos="fade-up"   className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp " data-wow-delay="0.1s" Style="min-height: 400px;">
                            <div className="position-relative fade-in-left h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src={technology } alt="" Style="object-fit: cover;" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="   bg-white text-start text-primary pe-3">Our <span className='text-warning'>Technology</span> </h6>
                            <h1 className="mb-4">Welcome to <span className='text-danger'>Avinil It </span></h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-success me-2"></i>React Js</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-success me-2"></i>Next Js</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-success me-2"></i>Python</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-success me-2"></i>Express Js</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-success me-2"></i>Php</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-success me-2"></i>Redux</p>
                                </div>
                            </div>




                            <a className="btn btn-danger py-3 px-5 mt-2" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologySection;