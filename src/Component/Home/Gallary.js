import React from 'react';
import top from '../../asset/Images/Gallery/top.jpg'
import right from '../../asset/Images/Gallery/right.jpg'
import bottom from '../../asset/Images/Gallery/bottom.jpg'
import bottomSecond from '../../asset/Images/Gallery/bottom-second.jpg'
const Gallary = () => {
    return (
        <div>
            <div className="container-xxl py-5 category">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Gallery</h6>
                <h1 className="mb-5 text-success">Our <span className='text-danger'>Beautiful</span> Moments</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                    <div className="row g-3">
                        <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <div className="position-relative d-block overflow-hidden" >
                                <img className="img-fluid" src={top} alt=""/>
                                {/* <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" Style="margin: 1px;"> */}
                                    {/* <h5 className="m-0">Web Design</h5> */}
                                    {/* <small className="text-primary">49 Courses</small> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <div className="position-relative d-block overflow-hidden" >
                                <img className="img-fluid" src={bottom} alt=""/>
                                {/* <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" Style="margin: 1px;"> */}
                                    {/* <h5 className="m-0">Graphic Design</h5> */}
                                    {/* <small className="text-primary">49 Courses</small> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <div className="position-relative d-block overflow-hidden" >
                                <img className="img-fluid" src={bottomSecond} alt=""/>
                                {/* <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" Style="margin: 1px;"> */}
                                    {/* <h5 className="m-0">Video Editing</h5> */}
                                    {/* <small className="text-primary">49 Courses</small> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" Style="min-height: 350px;">
                    <div className="position-relative d-block h-100 overflow-hidden"> 
                        <img className="img-fluid position-absolute w-100 h-100" src={right} alt="" Style="object-fit: cover;"/>
                        {/* <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" Style="margin:  1px;"> */}
                            {/* <h5 className="m-0">Online Marketing</h5>
                            <small className="text-primary">49 Courses</small> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Gallary;