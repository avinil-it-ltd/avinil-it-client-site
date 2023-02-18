import React from 'react';
import Slider from './Slider';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Carousel from './Carousel';
import GetInTouch from './GetInTouch';
import HappyClients from './HappyClients';
import OurTechnology from './OurTechnology';
import ProvidingServices from './ProvidingServices';
import SpeciallyWeDo from './SpeciallyWeDo';
import WhyChoose from './WhyChoose';



const Home = () => {
    return (
        <div className='bg-slate-900  '>
            <Navbar></Navbar>

            <Carousel ></Carousel>

            <ProvidingServices></ProvidingServices>

            <OurTechnology></OurTechnology>

            <WhyChoose></WhyChoose>

            <GetInTouch></GetInTouch>

            <HappyClients></HappyClients>
            
           <SpeciallyWeDo></SpeciallyWeDo>

            {/* <Slider></Slider> */}
            
            <Footer></Footer>
        </div>
    );
};

export default Home;