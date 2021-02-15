import { DivProjets, H1,DivCarousel } from "../styled-components/Projets";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import logo from "../assets/icons/logo.png"

export default class AutoPlayMethods extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <div>
            <Slider {...settings}>
                <img src={logo}  alt=""/>
            </Slider>
          </div>
        );
      }
    }
    
    
  