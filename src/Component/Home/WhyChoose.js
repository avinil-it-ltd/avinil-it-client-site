import React from 'react';

const WhyChoose = () => {
    return (
        <div className='my-20 px-2'>
            <div className='text-center '>
                <p className='text-white text-sm '> WHY CHOOSE AVINIL </p>
                <h1 className='text-white  text-4xl font-bold '>Managed IT <span className='md:text-info lg:text-info'>services</span> <span className='text-info md:text-white lg:text-white '>customized</span> <br />for your industry</h1>
            </div>


            <div className="px-10 md:px-16 lg:px-24 my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                <div class="card ease-in py-5 duration-700 my-2 md:w-52 lg:w-72 h-64 hover:h-72 rounded-none bg-base-100 hover:bg-violet-500	 text-black hover:text-white shadow-xl">
                    <figure ><span class="material-icons text-8xl ">dvr</span></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold ">
                            Advance UI
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>


                <div class="card ease-in py-5 duration-700 my-2 md:w-52 lg:w-72 h-64 hover:h-72 rounded-none bg-base-100 hover:bg-pink-400 text-black hover:text-white shadow-xl">
                    <figure ><span class="material-icons text-8xl ">settings_suggest</span></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold ">
                        Experts in deployed UI
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>


                <div class="card ease-in py-5 duration-700 my-2 md:w-52 lg:w-72 h-64 hover:h-72 rounded-none bg-base-100 hover:bg-fuchsia-400 text-black hover:text-white shadow-xl">
                    <figure ><span class="material-icons text-8xl ">important_devices</span></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold ">
                        Responsible UI
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default WhyChoose;