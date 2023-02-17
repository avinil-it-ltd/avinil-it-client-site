import React from 'react';

const OurTechnology = () => {
    return (
        <div>

            {/* 
            <a href="https://ibb.co/jJ1812h"><img src="https://i.ibb.co/vXKcKG1/technology-2-removebg-preview.png" alt="technology-2-removebg-preview" border="0"></a>
<a href="https://ibb.co/Wv6JYvK"><img src="https://i.ibb.co/B2tMS2s/technology-1-removebg-preview.png" alt="technology-1-removebg-preview" border="0"></a>
 */}
            <div class="hero  ease-in py-10 md:py-20 lg:py-20 duration-700  bg-slate-900 hover:bg-white text-white hover:text-black">
                <div class="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse">
                    <img alt='' src="https://i.ibb.co/B2tMS2s/technology-1-removebg-preview.png" className='md:w-[500px] lg:w-full rounded-lg ' />
                    <div className='md:pl-5  lg:pl-10'>
                        <p className='text-sm font-bold '>OUR TECHNOLOGY</p>
                        <h1 class="text-3xl  font-bold">Avinil – <span className='text-info'>Top Software</span> Development Technology</h1>
                        <p class="py-6">Our strong passion to modern tech trends and best practices drive in the development of top-notch solutions that are perfectly tailored to provide high quality and affordable software outsourcing solutions to growing startup and enterprise companies in the world.</p>
                        <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-2'>
                            <button class="btn btn-outline btn-info btn-md rounded-sm">React Js</button>
                            <button class="btn btn-outline btn-info btn-md rounded-sm">Next Js</button>
                            <button class="btn btn-outline btn-info btn-md rounded-sm">PHP</button>
                            <button class="btn btn-outline btn-info btn-md rounded-sm">java</button>
                            <button class="btn btn-outline btn-info btn-md rounded-sm">Python</button>
                            <button class="btn btn-outline btn-info btn-md rounded-sm">Express</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTechnology;