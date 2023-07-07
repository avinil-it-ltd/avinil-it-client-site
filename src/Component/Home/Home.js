import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import Carousel from './Carousel';
import HomeServices from './HomeServices';
import TechnologySection from './TechnologySection';
import OurClient from './OurClient';
import Gallary from './Gallary';
import Evaluation from './Evaluation';
import Faq from './Faq';

const Home = () => {
    return (
        <div className='bg-white'>
            {/* <Loading></Loading> */}

            <Navbar></Navbar>

            <Carousel></Carousel>

            <HomeServices></HomeServices>

            <TechnologySection></TechnologySection>

            <Gallary></Gallary>

            <OurClient></OurClient>

            <Faq></Faq>
            
            {/* <Evaluation></Evaluation> */}

            <Footer></Footer>
        </div>
    );
};

export default Home;