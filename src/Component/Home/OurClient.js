import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





const OurClient = () => {



    return (
        <div>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container ">
                    <div className="text-center">
                        <h6 className="   bg-white text-center text-primary px-3">Clients</h6>
                        <h1 className="mb-5">Our <span className='text-danger'>Client</span> Say!</h1>
                    </div>

                    <>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            navigation={true}
                            modules={[Autoplay,  Navigation]}
                            className="mySwiper"
                        >

                            {/* slider start here */}
                            <SwiperSlide>
                                <div className=" testimonial-item text-center ">
                                    {/* <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" Style="width: 80px; height: 80px;" /> */}
                                    <div className="testimonial-text bg-light text-center p-4">
                                        <h5 className="mb-0">Client Name</h5>
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" testimonial-item text-center ">
                                    {/* <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" Style="width: 80px; height: 80px;" /> */}
                                    <div className="testimonial-text bg-light text-center p-4">
                                        <h5 className="mb-0">Client Name</h5>
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" testimonial-item text-center ">
                                    {/* <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" Style="width: 80px; height: 80px;" /> */}
                                    <div className="testimonial-text bg-light text-center p-4">
                                        <h5 className="mb-0">Client Name</h5>
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" testimonial-item text-center ">
                                    {/* <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" Style="width: 80px; height: 80px;" /> */}

                                    <div className="testimonial-text bg-light text-center p-4">
                                        <h5 className="mb-0">Client Name</h5>
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" testimonial-item text-center ">
                                    {/* <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" Style="width: 80px; height: 80px;" /> */}

                                    <div className="testimonial-text bg-light text-center p-4">
                                        <h5 className="mb-0">Client Name</h5>
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" testimonial-item text-center ">
                                    {/* <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" Style="width: 80px; height: 80px;" /> */}

                                    <div className="testimonial-text bg-light text-center p-4">
                                        <h5 className="mb-0">Client Name</h5>
                                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" testimonial-item text-center ">
                                    {/* <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" Style="width: 80px; height: 80px;" /> */}

                                    <div className="testimonial-text bg-light text-center p-4">
                                        <h5 className="mb-0">Client Name</h5>
                                        <p className="mb-0">Tempor ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
};

export default OurClient;