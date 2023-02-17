import React, { useState } from 'react';
// import CountUp from 'react-countup/build/CountUp';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
// import ReactVisibilitySensor from 'react-visibility-sensor';
import VisibilitySensor from "react-visibility-sensor";
const HappyClients = () => {


  const [viewPortEntered, setViewPortEntered] = useState(false);


  return (
    <div>
      {/* <img alt='' src="https://i.ibb.co/vXKcKG1/technology-2-removebg-preview.png" className='max-w-sm rounded-lg ' /> */}


      <div class="hero min-h-screen ease-in py-5 duration-700 bg-[#F4F9EB] hover:bg-slate-900 text-black hover:text-white ">
        <div class="hero-content flex-col lg:flex-row">
          <img alt='' src="https://i.ibb.co/vXKcKG1/technology-2-removebg-preview.png" class="w-[500px] rounded-lg " />
          <div>
            <h1 class="text-3xl font-bold">Many years of <span className='text-info'>Experience</span></h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <div className='grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3  mb-6 '>
              <div>
                <div class="card  p-0 shadow-xl">
                  <div class="card-body">
                    <p className='text-md font-bold '>Experience</p>
                    <h1 className='text-2xl font-bold   text-info'>
                      <CountUp duration={2.00} start={viewPortEntered ? null : 0} end={5} suffix="+">
                        {({ countUpRef }) => (
                          <VisibilitySensor
                            onChange={(isVisible) => {
                              if (isVisible) {
                                setViewPortEntered(true);
                              }
                            }}
                            delayedCall
                          >
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                  </div>
                </div>
              </div>


              <div>
                <div class="card   shadow-xl">
                  <div class="card-body">
                    <p className='text-md font-bold '>Happy Clients</p>
                    <h1 className="text-2xl font-bold  text-info">
                      <CountUp start={viewPortEntered ? null : 0} end={500} suffix="+">
                        {({ countUpRef }) => (
                          <VisibilitySensor
                            onChange={(isVisible) => {
                              if (isVisible) {
                                setViewPortEntered(true);
                              }
                            }}
                            delayedCall
                          >
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                  </div>
                </div>
              </div>


              <div>
                <div class="card   shadow-xl">
                  <div class="card-body">
                    <p className='text-md font-bold '>Completed Projects</p>
                    <h1 className="text-2xl font-bold  text-info">
                    <CountUp start={viewPortEntered ? null : 0} end={720} suffix="+">
                      {({ countUpRef }) => (
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true);
                            }
                          }}
                          delayedCall
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    </h1>
                  </div>
                </div>
              </div>
            </div>


            <Link to="/about" class="btn btn-info btn-outline ">Explore More ...</Link>
          </div>
        </div>
      </div>



     
    </div>
  );
};

export default HappyClients;