import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const storedActiveLink = localStorage.getItem('activeLink');
    const [activeLink, setActiveLink] = useState(storedActiveLink ? parseInt(storedActiveLink) : 0);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink);
    }, [activeLink]);


    return (
        <div>
            <Navbar></Navbar>

            <div className='container d-flex '>
                {/* side nav bar code start here  */}
                
                <div Style="width:250px;" className="list-group mt-5 " id="list-tab" role="tablist">
                    <Link to="/dashboard" className={`list-group-item list-group-item-action ${activeLink === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)} id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="Overview"> Overview </Link>
                    <Link to="/dashboard/addTeamMember" className={`list-group-item list-group-item-action ${activeLink === 1 ? 'active' : ''}`} onClick={() => handleLinkClick(1)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="Add Team Member">Add Team Member</Link>
                    <Link to="/dashboard/addClientReview" className={`list-group-item list-group-item-action ${activeLink === 2 ? 'active' : ''}`} onClick={() => handleLinkClick(2)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="Add Client Review">Add Client Review</Link>
                    <Link to="" className={`list-group-item list-group-item-action ${activeLink === 3 ? 'active' : ''}`} onClick={() => handleLinkClick(3)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="Add FAQ">Add FAQ</Link>
                    <Link to="" className={`list-group-item list-group-item-action ${activeLink === 4 ? 'active' : ''}`} onClick={() => handleLinkClick(4)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="Add Services">Add Services</Link>
                    <Link to="" className={`list-group-item list-group-item-action ${activeLink === 5 ? 'active' : ''}`} onClick={() => handleLinkClick(5)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="All Employee">All Employee</Link>
                    <Link to="" className={`list-group-item list-group-item-action ${activeLink === 6 ? 'active' : ''}`} onClick={() => handleLinkClick(6)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="All Customer">All Customer</Link>
                    <Link to="" className={`list-group-item list-group-item-action ${activeLink === 7 ? 'active' : ''}`} onClick={() => handleLinkClick(7)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="All Applications Details">All Applications Details</Link>
                    <Link to="" className={`list-group-item list-group-item-action ${activeLink === 8 ? 'active' : ''}`} onClick={() => handleLinkClick(8)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="All Contacts Details">All Contacts Details</Link>
                    <Link to="" className={`list-group-item list-group-item-action ${activeLink === 9 ? 'active' : ''}`} onClick={() => handleLinkClick(9)} id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="Add Footer Details">Add Footer Details</Link>
                </div>



                <div className='pt-5 ps-3  w-100'>
                    <Outlet/>
                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Dashboard;