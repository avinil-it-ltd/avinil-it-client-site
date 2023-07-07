import React from 'react';
import notFound from '../../asset/Images/notfound.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-50  mx-auto text-center' >
                <img className=' w-100 ' src={notFound} alt="" />
                
                <Link t0="/home" className='btn text-center mx-auto w-50 bg-primary text-white f-bold p-3 '> Back to Home <i className="fa fa-arrow-right ms-3"></i></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;