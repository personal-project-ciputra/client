import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";
import './Carousel.scss'
import image from '../../../assets/969.jpg'
import image1 from '../../../assets/2678.jpg' 
import image2 from '../../../assets/4247945.jpg'


export default class PauseOnHover extends Component {

  

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className='carousel-container'>
        <div>
        <Slider {...settings}>
          <div className='image'>
            <img className='image image-1' src={image} alt=""/>
            </div>
            <div className="image">
            <img className='image image-3' src={image2} alt=""/>
            </div>
        </Slider>
        </div>
      </div>
    );
  }
}