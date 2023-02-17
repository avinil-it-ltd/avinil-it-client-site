import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Contact = () => {
    return (
        <div className='bg-slate-900'>
            <Navbar></Navbar>
            {/* <a href="https://ibb.co/x3N7HpC"><img src="https://i.ibb.co/FnFDVSx/home-bg-2.png" alt="home-bg-2" border="0"></a> */}
            <div class="hero py-8 lg:pt-32 bg-slate-900 w-full  h-[450px] md:h-[700px]  lg:h-screen" Style="background-image: url('https://i.ibb.co/FnFDVSx/home-bg-2.png'); ">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='w-0 md:w-96  lg:w-[700px]'>

                    </div>
                    {/* <img alt=" " src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className=''>
                        <div class="card  ">
                            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                            <div class="card-body">
                                <form action="">
                                    <input  className='outline-none input input-bordered input-info  w-full text-black my-2 py-2 rounded  px-2'  placeholder='Enter Your Name' type="text" name="name" id=" " />
                                    <input  className='outline-none w-full input input-bordered input-info text-black my-2 py-2 rounded  px-2'  placeholder='Enter Your Email' type="email" name="email" id="" />
                                    <textarea  className='outline-none  input-bordered input-info  text-black w-full my-2  rounded  px-2' placeholder="Describe yourself here..." name="message" id="message" cols="30" rows="5"></textarea>                                
                                    <button  className='outline-none w-full my-2 py-3 rounded  px-2 btn btn-outline btn-info font-bold'  >Send</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="mt-0 md:mt-80 w-full">
            <Footer ></Footer>
            </div>
        </div>
    );
};

export default Contact;