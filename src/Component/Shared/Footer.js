import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/Images/Logo/Avinil-Logo-1-universal.png'
const Footer = () => {
    return (
        <div>

            {/* Footer Start  */}
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            {/* <h4 className="text-white mb-3"></h4> */}
                            <div className="row g-2 pt-2">

                                {/* logo add here  */}

                                <img className='w-50' src={logo} alt="" />
                                <h5  className='text-white mt-4'>A Software Development & IT solution Company </h5 >

                                {/* <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt=""/>
                        </div> */}
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-3">Quick Link</h4>
                            <Link to="/about" className="btn btn-link" href="">About Us</Link>
                            <Link to="/contact" className="btn btn-link" href="">Contact Us</Link>
                            <Link to="/privacyPolicy" className="btn btn-link" href="">Privacy Policy</Link>
                            <Link to="/termsCondition" className="btn btn-link" href="">Terms & Condition</Link>
                            <Link to="/home" className="btn btn-link" href="">FAQs & Help</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>BGCTUB, Chattogram, Bangladesh</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+8801874819713</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+8801822114359</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>avinil.it.ltd@gmail.com</p>
                            <div className="d-flex pt-2">
                                <Link to="" Style="background: " className="btn bg-danger btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></Link>
                                <Link to="" Style="background: " className="btn bg-primary btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></Link>
                                <Link to="" Style="background:green " className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></Link>
                                <Link to="" Style="background:#FFA41B " className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-3">Subscribe Now</h4>
                            <p>Complete the subscription for our Update news and Your future Career.</p>
                            <div className="position-relative mx-auto" Style="max-width: 400px;">
                                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" Style="background: #00DFA2" className="btn text-white  py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <Link to="/home" className="border-bottom">Avinil IT LTD </Link>, All Right Reserved.

                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link to="/home"  >Home</Link>
                                    <Link to="/home"  >Cookies</Link>
                                    <Link to="/contact"  >Help</Link>
                                    <Link to="/home"  >FQAs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}


        </div>
    );
};

export default Footer;