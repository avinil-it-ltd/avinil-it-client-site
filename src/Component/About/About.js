import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import team from '../../asset/Images/banner/home_bg_1.png'
import friends1 from '../../asset/Images/friends3.jpg'

import ceo from '../../asset/Images/developer/avishek.png'
import cto from '../../asset/Images/developer/niloy (2).png'
import analyst from '../../asset/Images/developer/suparna.png'
import softwareDeveloper from '../../asset/Images/developer/bijon.png'
import arpita from '../../asset/Images/developer/arpita.png'
import trishna from '../../asset/Images/developer/trishna.png'
import dip from '../../asset/Images/developer/dip.png'
import ritu from '../../asset/Images/developer/ritu.png'
const About = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="container-fluid bg-white  h-50" >
                <img className='w-100  no-repeat   bg-secondary bg-opacity-10' src={team} alt="" />
            </div>

            <div className="text-center wow fadeInUp pt-5" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">About Us</h6>
                <h1 className="mb-5">Learn about us</h1>
            </div>



            {/* our identity section start here  */}
            <div className="">
                <div className="container">
                    <h2 className=''>Who <span className='text-danger fw-bolder fs-1 '> We Are </span> </h2>
                    <div className=''>
                        <p className='text-wrap fs-4'> assumenda quam magni molestias inventore distinctio illo recusandae? Officia obcaecati voluptates totam perferendis veniam numquam tenetur libero, laudantium sapiente dignissimos beatae unde sed doloribus molestias voluptas itaque reiciendis porro nam deserunt commodi. Earum vel enim excepturi! Obcaecati consequuntur voluptatum quasi minima alias repudiandae modi necessitatibus eaque natus illo?</p>
                        <div>
                            <div className="fs-4">
                                <div className="row g-5">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                        <p>ad obcaecati lectus earum sint eum repellat? Officia pariatur, doloremque repellendus soluta ex maxime! Libero quo veritatis ullam numquam asperiores, rerum et nam voluptas voluptatem officia cumque aperiam similique ut quam magni autem quae possimus adipisci doloremque. Expedita distinctio facere quibusdam similique suscipit repellendus dolorum voluptatem quod numquam natus. Molestiae illo vel incidunt culpa. Labore nisi libero veniam quasi modi perferendis ipsam quae id quisquam eius amet et error totam aliquid, placeat sint, fugit tempore nemo accusamus.</p>
                                    </div>

                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" Style="min-height: 400px;">
                                        <div className="position-relative h-100 ">
                                            <img className="img-fluid w-100 " src={friends1} alt="" Style="object-fit: cover;" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* our mission section start here */}

            <div className="py-5 ">
                <div className="container">
                    <h2 className=''>Our <span className='text-danger fw-bolder fs-1 '> Mission </span> </h2>
                    <div>
                        <ul className='fs-4'>
                            <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui suscipit itaque, explicabo eum dolores!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nostrum!</li>
                            <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui suscipit itaque, explicabo eum dolores!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nostrum!</li>
                            <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui suscipit itaque, explicabo eum dolores!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nostrum!</li>
                            <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat qui suscipit itaque, explicabo eum dolores!  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nostrum!</li>
                        </ul>
                    </div>
                </div>
            </div>





            {/* Team section  Start  */}
{/* 

image size
width 404
height 505

*/}

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Team</h6>
                        <h1 className="mb-5">Our Experties Member</h1>
                    </div>


                    <div className="row g-4">


                        <div className="col-lg-3 col-md-6 wow fadeInUp " data-wow-delay="0.3s">
                            <div className="team-item bg-light ">
                                <div className="overflow-hidden ">
                                    <img className="img-fluid " src={ceo} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" Style="margin-top: -23px;">
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary      mx-1" Style="background: #2EB67D" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary bg-danger    mx-1"  href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary     mx-1" href="" Style="backgroumd: #E5AD2D"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Avishek Devnath</h5>
                                    <small>CEO</small>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 wow fadeInUp " data-wow-delay="0.3s">
                            <div className="team-item bg-light ">
                                <div className="overflow-hidden ">
                                    <img className="img-fluid " src={cto} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" Style="margin-top: -23px;">
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary    mx-1" Style="background: #2EB67D"  href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary  bg-danger    mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary  bg-danger    mx-1"  Style="backgroumd: #E5AD2D" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Niloy Dey</h5>
                                    <small> CTO </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={analyst} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" Style="margin-top: -23px;">
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary      mx-1" Style="background: #2EB67D"  href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary  bg-danger    mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary     mx-1"  Style="backgroumd: #E5AD2D" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Suparna Dhar </h5>
                                    <small>IT Analyst</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={softwareDeveloper} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" Style="margin-top: -23px;">
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary    mx-1" Style="background: #2EB67D"  href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary  bg-danger    mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary      mx-1"  Style="backgroumd: #E5AD2D"  href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Bijon Talukder</h5>
                                    <small>Android Developer</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={arpita} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" Style="margin-top: -23px;">
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary    mx-1" Style="background: #2EB67D"  href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary  bg-danger    mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary     mx-1"  Style="backgroumd: #E5AD2D" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Arpita Dhar </h5>
                                    <small>Brand Ambassador</small>
                                </div>
                            </div>
                        </div>

                       

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid " src={trishna} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" Style="margin-top: -23px;">
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary     mx-1" Style="background: #2EB67D" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary  bg-danger    mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary    mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Trishna Nath</h5>
                                    <small>Front-End Developer</small>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={ritu} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" Style="margin-top: -23px;">
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary     mx-1" Style="background: #2EB67D" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary  bg-danger    mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary     mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Ritu Priya Chy</h5>
                                    <small>Software Developer</small>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={dip} alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" Style="margin-top: -23px;">
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary    mx-1" Style="background: #2EB67D" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary  bg-danger    mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary    mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Diprodip Das</h5>
                                    <small>Web Developer</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <Footer></Footer>
        </div>
    );
};

export default About;