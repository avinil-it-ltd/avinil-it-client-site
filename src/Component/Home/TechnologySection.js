import React from 'react';
import technology from "../../asset/Images/banner/technology-1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const TechnologySection = () => {
    return (
        <div>
            <div data-aos-duration="1000" data-aos-offset="300" data-aos="fade-up" className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp " data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                            <div className="position-relative fade-in-left h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src={technology} alt="" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="bg-white text-start text-primary pe-3">Our <span className='text-warning'>Technology</span> </h6>
                            <h1 className="mb-4">Welcome to <span className='text-danger'>Avinil It</span></h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>

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
                                    navigation={false}
                                   
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >

                                    {/* slider start here */}
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://www.freecodecamp.org/news/content/images/2023/03/HTML-Blog-Cover-1.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://austingil.com/wp-content/uploads/CSS%20Blog%20Cover.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/800px-Sass_Logo_Color.svg.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://codekitapp.com/images/help/free-bootstrap-icon@2x.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://btihen.me/post_ruby_rails/rails_6_1_tailwind_2_0_alpinejs/featured.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://miro.medium.com/v2/resize:fit:1400/0*WCfXH5nmHg-9LgIS.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://www.metaltoad.com/hubfs/Imported_Blog_Media/react-js-blog-header.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </>






                            <>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    autoplay={{
                                        reverseDirection:true,
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
                                    navigation={false}
                                   
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >

                                    {/* slider start here */}
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/2560px-Firebase_Logo.svg.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://ubunlog.com/wp-content/uploads/2020/04/about-nodejs.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://docs.convisoappsec.com/assets/images/github-1b6bd0e4b6626baba753847b04b62311.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className=" testimonial-item text-center ">
                                            <img className="p-2 mx-auto mb-3" src="https://ubiqum.com/assets/uploads/2021/12/learn-java-with-ubiqum-logo.png" alt='' Style="width: 100px; height: 80px;" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </>

                            <p className='imageCopyright'>Image Collected From internet</p>
                            <Link to="/about" className="btn btn-danger py-3 px-5 mt-2" href="">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologySection;
