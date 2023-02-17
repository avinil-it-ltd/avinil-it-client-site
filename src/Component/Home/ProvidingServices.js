import React from 'react';
import webDeveloper from '../../asset/Images/services/developer.png'
import webDesign from '../../asset/Images/services/design.png'
import softwareDevelopment from '../../asset/Images/services/app-development.png'
import androidAppDevelopment from '../../asset/Images/services/development.png'
import domainHosting from '../../asset/Images/services/world-wide-web.png'
import ai from '../../asset/Images/services/ai.png'
import cloudService from '../../asset/Images/services/cloud-computing.png'
import customSoftwareDevelopment from '../../asset/Images/services/programing.png'
const ProvidingServices = () => {
    return (
        <div className='lg:mx-24 md:mx-10 mx-3 py-32'>
            <p className='py-3 text-white font-bold text-sm '>WE PROVIDE FOR YOURS</p>
            <h1 className='text-3xl pb-10 font-bold text-white '>The <span className='text-info'>world’s</span> most <span className='text-info'>reliable</span> IT services </h1>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>

                <div class="card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-black duration-300  w-40 md:w-52 lg:w-52 pt-2 bg-slate-700 text-info shadow-xl">
                    <figure><img className='w-20' src={softwareDevelopment} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold">Software Development</h2>
                    </div>
                </div>


                <div class="card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-black duration-300  w-40 md:w-52 lg:w-52 pt-2 bg-slate-700 text-info shadow-xl">
                    <figure><img className='w-20' src={customSoftwareDevelopment} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold">Custom software Development </h2>
                    </div>
                </div>


                <div class="card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-black duration-300  w-40 md:w-52 lg:w-52 pt-2 bg-slate-700 text-info shadow-xl">
                    <figure><img className='w-20' src={webDesign} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold">UI/UX Design </h2>
                    </div>
                </div>


                <div class="card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-black duration-300  w-40 md:w-52 lg:w-52 pt-2 bg-slate-700 text-info shadow-xl">
                    <figure><img className='w-20' src={webDeveloper} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold">Web Development </h2>
                    </div>
                </div>


                <div class="card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-black duration-300  w-40 md:w-52 lg:w-52 pt-2 bg-slate-700 text-info shadow-xl">
                    <figure><img className='w-20' src={androidAppDevelopment} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold">Android App Development </h2>
                    </div>
                </div>


                <div class="card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-black duration-300  w-40 md:w-52 lg:w-52 pt-2 bg-slate-700 text-info shadow-xl">
                    <figure><img className='w-20' src={domainHosting} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold">Domain Hosting</h2>
                    </div>
                </div>


                <div class="card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-black duration-300  w-40 md:w-52 lg:w-52 pt-2 bg-slate-700 text-info shadow-xl">
                    <figure><img className='w-20' src={ai} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold">Artificial Intelligence </h2>
                    </div>
                </div>


                <div class="card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 hover:text-black duration-300  w-40 md:w-52 lg:w-52 pt-2 bg-slate-700 text-info shadow-xl">
                    <figure><img className='w-20' src={cloudService} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold">Cloud Services</h2>
                    </div>
                </div>

              




                

            </div>
        </div>
    );
};

export default ProvidingServices;