import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import style from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`w-8 h-8 absolute right-3 top-[50%] translate-y-[-50%] z-30`}
    >
      <FaAngleRight className={`${style.carouselArrow}`} onClick={onClick} />
    </div>
  );
}

function PreviousArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`w-8 h-8 absolute left-3 top-[50%] translate-y-[-50%] z-30`}
    >
      <FaAngleLeft className={`${style.carouselArrow}`} onClick={onClick} />
    </div>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: style.carouselContainer,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    appendDots: (dots) => (
      <div>
        <ul className={`mb-[30px] lg:mb-[60px]`}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div className={`${style.carouselItem}`}>
            <img
              className={style.imgContainer}
              src={require("../../assets/images/wide.png")}
            />
          </div>
          <div className={`${style.carouselItem}`}>
            <img
              className={style.imgContainer}
              src={require("../../assets/images/mobile.png")}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
