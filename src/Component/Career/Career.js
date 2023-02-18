import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Career = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="hero h-[300px] md:h-[500px]  w-full " Style="background-image: url(https://i.ibb.co/NmV5Qt3/carrer.png);">
                <div class="hero-overlay bg-opacity-50"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md ">
                        <h1 class="mb-5 text-5xl font-bold ">Hi Candidate</h1>
                        <p class="mb-5 text-xl font-bold ">Are you want to join our team? </p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>




            <div class="card  my-10 flex-shrink-0  w-80 md:w-[600px] lg:w-[800px] mx-auto shadow-2xl bg-base-100">
                <div class="card-body">
                    <form class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered" />



                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" class="input input-bordered" />



                        <label class="label">
                            <span class="label-text">Mobile</span>
                        </label>
                        <input type="tel" placeholder="Mobile" class="input input-bordered" />



                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Address" class="input input-bordered" />



                        <label class="label">
                            <span class="label-text">Message(Optional) </span>
                        </label>
                        <input type="text" placeholder="What's in your mind" class="input input-bordered" />


                        <label class="label">
                            <span class="label-text">Portfolio link</span>
                        </label>
                        <input type="text" placeholder="Link" class="input input-bordered" />


                        <label class="label">
                            <span class="label-text">Git Hub</span>
                        </label>
                        <input type="text" placeholder="Link " class="input input-bordered" />


                        <label class="label">
                            <span class="label-text">Linkedin</span>
                        </label>
                        <input type="text" placeholder="Link" class="input input-bordered" />


                        <label class="label">
                            <span class="label-text">CV or Resume</span>
                        </label>
                        <input type="file" />


                        <button className='btn mt-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 outline-none w-full my-2 py-3 rounded  px-2 btn btn-outline font-bold'>Submit</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Career;