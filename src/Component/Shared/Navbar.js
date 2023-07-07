import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/Images/avinil-logo.png'
import logo2 from '../../asset/Images/logo2.png'
import avinil from '../../asset/Avinil-Logo-1-universal.png'
const Navbar = () => {
    return (
        <div>
            {/* <!-- Navbar Start --> */}
            <nav Style=" "className="navbar  container navbar-expand-lg navbar-light  sticky-top p-0">
                <Link to="/" Style="" className="navbar-brand d-flex align-items-center ms-2">
                    <h2 className="m-0 text-primary"> <img className='w-25' src={avinil} alt="" /> </h2>
                    {/* <h2 className="m-0 text-primary" ><i className="fa fa-book me-3"></i>Avinil IT LTD</h2> */}
                    {/* <div className='d-flex  align-items-center justify-content-center'><img className='w-25 ' src={logo2} alt="" /> <span className='text-danger fs-2 fw-bolder'>IT</span> </div> */}
                {/* <img className='w-25' src={avinil} alt="" /> */}
                </Link>
                <button type="button" className="navbar-toggler me-2" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/home" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <div className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                            <div className="dropdown-menu fade-down m-0">
                                <Link to=" " className="dropdown-item">Our Team</Link>
                                <Link to="" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link  to="/career" className="nav-item nav-link">Career</Link>
                    </div>
                    <Link to="/contact" className="btn btn-danger text-white py-4 px-lg-5 d-none d-lg-block">Contact<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;