import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Carousel from './Carousel';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Carousel ></Carousel>

            <Footer></Footer>
        </div>
    );
};

export default Home;