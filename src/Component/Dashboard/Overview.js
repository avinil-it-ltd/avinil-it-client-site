import React from 'react';
import profit from '../../asset/Images/dashboard/spending.png'
import earns from '../../asset/Images/dashboard/salary.png'
import spend from '../../asset/Images/dashboard/save-money.png'
import employee from '../../asset/Images/dashboard/programmer.png'
import profile from '../../asset/Images/dashboard/profile.png'
import Analytics from './Analytics';


const Overview = () => {
    return (
        <div>
            {/* overview top card start here  */}
            <div>

                <div class="cardBox d-flex justify-content-between ">

                    <div class="card text-center  w-25 mx-3 p-3 bg-primary text-white border-0 rounded">
                        <div class="iconBx">
                            <img Style="width:40px" src={employee} alt="" />
                        </div>
                        <div>
                            <div class="numbers">80</div>
                            <div class="cardName">Employee</div>
                        </div>
                    </div>


                    <div class="card text-center  w-25 mx-3 p-3 bg-warning text-white border-0  rounded">
                        <div class="iconBx">
                            <img Style="width:40px" src={earns} alt="" />
                        </div>
                        <div>
                            <div class="numbers">284</div>
                            <div class="cardName">Earning</div>
                        </div>
                    </div>


                    <div class="card text-center  w-25 me-3 p-3 bg-danger text-white border-0 rounded">
                        <div class="iconBx">
                            <img Style="width:40px" src={spend} alt="" />
                        </div>

                        <div>
                            <div class="numbers">1,504</div>
                            <div class="cardName">Spend</div>
                        </div>
                    </div>


                    <div class="card  text-center  w-25 ms-3 p-3 bg-success text-white border-0 rounded">
                        <div class="iconBx ">
                            <img Style="width:40px" src={profit} alt="" />
                        </div>
                        <div>
                            <div class="numbers">$7,842</div>
                            <div class="cardName">Profit</div>
                        </div>
                    </div>
                </div>

                {/* overview top card end  here  */}


                <hr />
                <div className='my-5 mx-3'>
                    <Analytics></Analytics>
                </div>

                <hr />
                {/* over view middle section */}
                <div className='d-flex mt-5'>
                    {/* recent projects details */}
                    <div className=' w-75 mx-3'>
                        <div class="details">
                            <div class="recentOrders">
                                <div class="cardHeader">
                                    <h4 className='text-primary'>Recent Orders</h4>
                                </div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Payment</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className=''>
                                            <td>AVINIL202302</td>
                                            <td>Online college website</td>
                                            <td className='text-success'>16000</td>
                                            <td className='text-primary'>Paid</td>
                                            <td className='text-danger'>Completed</td>
                                            <td className='btn btn-dark text-white bg-dark btn-sm'>Details</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex" Style="height: 200px; width:3px" className=' bg-dark'>
                        <div class="vr"></div>
                    </div>

                    {/* our employees  */}
                    <div className='w-25 ps-3 '>
                        {/* <!-- ================= New Customers ================ --> */}
                        <div class="recentCustomers">
                            <div class="cardHeader">
                                <h4 className='text-primary'>Recent Customers</h4>
                            </div>
                            <table className=''>
                                <tr >
                                    <td className='pe-2'><img Style="width:30px" src={profile} alt="" /></td>
                                    <td className='pe-2 fs-6 fw-bold'>Ajoy Barua</td>
                                    <td className='fs-6 '>01822114359</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Overview;