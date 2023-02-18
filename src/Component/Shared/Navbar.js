import React from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom';
import logo from '../../asset/Images/logu-1.png'
const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    return (
        <div>
            <>
                <Drawer
                    style={{ backgroundColor: "#0F172A", color: "white" }}
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className='bla bla bla '
                >
                    <div className='text-center p-2 fw-bold fs-3'><img className='w-48 h-14' src={logo} alt="" /></div>
                    <ul class="menu  px-1">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>

                        <div class="collapse">
                            <input type="checkbox" class="peer" />
                            <div class="flex collapse-title  ">
                                <p>Services</p>
                            </div>
                            <div class="collapse-content ">
                                <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Android Development</Link></li>
                                <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Web Design</Link></li>
                                <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Web Development</Link></li>
                                <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Artificial intelligence</Link></li>
                            </div>
                        </div>

                        <li ><Link to="/career">Career</Link></li>
                        <li ><Link to="/contact">Contact</Link></li>
                    </ul>
                </Drawer>
            </>



            {/* bg-[#0F1D5A]

*/}

            <div class="navbar fixed z-50  px-4 lg:px-24 bg-slate-900  opacity-80 text-white justify-between">
                <div class="navbar-start">

                    <Link to="/home" class="normal-case text-xl "><img className='w-52' src={logo} alt="" /></Link>
                </div>


                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>

                        <li tabindex="0">
                            <p>Services</p>
                            <ul class=" bg-slate-900">
                                <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Android Development</Link></li>
                                <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Web Design</Link></li>
                                <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Web Development</Link></li>
                                <li className='py-0 my-0  text-sm'><Link className='py-0 my-0 ' to="">Artificial intelligence</Link></li>
                            </ul>
                        </li>

                        <li ><Link to="/career">Career</Link></li>
                        <li ><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>


                {/* <div class="navbar-end "> */}
                <button className='lg:hidden ' onClick={toggleDrawer}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></button>
                {/* </div> */}


            </div>
        </div>
    );
};

export default Navbar;