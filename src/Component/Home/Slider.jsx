import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";
import Slider from "react-slick";
export default class Fade extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <h2>Fade</h2>
          <Slider {...settings}>
            <div>
              <img alt='' src="https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9yZCUyMHNoaXZhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div>
            <div>
            <img alt='' src="https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9yZCUyMHNoaXZhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div>
            <div>
            <img alt='' src="https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9yZCUyMHNoaXZhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div>
            <div>
            <img alt='' src="https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9yZCUyMHNoaXZhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div>
          </Slider>
        </div>
      );
    }
  }