import React from 'react';
import quality from '../../asset/Images/specially-we-do/quality.png'
import lock from '../../asset/Images/specially-we-do/lock.png'
import api from '../../asset/Images/specially-we-do/world.png'
import infrastructure from '../../asset/Images/specially-we-do/infrastructure.png'
const SpeciallyWeDo = () => {
    return (
        <div className='lg:mx-24 md:mx-4 mx-8 my-24'>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>


                <div class="card w-80 md:w-96  lg:w-[500px]  text-white shadow-2xl">
                    <div class="card-body">
                        <div class="card-actions justify-start items-center">
                            <img className='w-14' src={quality} alt="" />
                            <span className='text-xl font-bold '>Quality Assurance System</span>
                        </div>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>


                <div class="card w-80 md:w-96  lg:w-[500px]  text-white shadow-2xl">
                    <div class="card-body">
                        <div class="card-actions justify-start items-center">
                            <img className='w-14' src={api} alt="" />
                            <span className='text-xl font-bold '>Smart Api Generation</span>
                        </div>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>


                <div class="card w-80 md:w-96  lg:w-[500px]  text-white shadow-2xl">
                    <div class="card-body">
                        <div class="card-actions justify-start items-center">
                            <img className='w-14' src={lock} alt="" />
                            <span className='text-xl font-bold '>Accurate product Testing</span>
                        </div>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>


                <div class="card w-80 md:w-96  lg:w-[500px]  text-white shadow-2xl">
                    <div class="card-body">
                        <div class="card-actions justify-start items-center">
                            <img className='w-14' src={infrastructure} alt="" />
                            <span className='text-xl font-bold '>Infrastructure Integration</span>
                        </div>
                        <p>We are using cookies for no reason.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SpeciallyWeDo;