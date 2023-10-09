import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import career from '../../asset/Images/banner/carrer.png'
const Career = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid w-100 bg-white  h-25" >
                <img className='w-100 h-25  no-repeat   bg-secondary bg-opacity-10' src={career} alt="" />
            </div>

            <div className="text-center wow fadeInUp pt-5" data-wow-delay="0.1s">
                <h6 className="   bg-white text-center text-primary px-3">Career</h6>
                <h1 className="mb-5">Make Your Career with us</h1>
            </div>




            {/* Career form section start here  */}

            <div className='container '>
                <form action="">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email </label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Write your Position</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="You see yourself in whatever position you want?" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Address" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Experience</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Write your Experience" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Portfolio Link </label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Live Link" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">GitHub Link</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Code Link" />
                    </div>


                    <div className="mb-3">
                        <label for="formFile" className="form-label">cv / resume</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>


                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Why do you want to join us? </label>
                        <textarea placeholder='Write Your Opinion' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="button" className="btn btn-success fs-5 w-100 p-2 fw-bold">Apply Now </button>

                </form>
            </div>




            <Footer></Footer>
        </div>
    );
};

export default Career;