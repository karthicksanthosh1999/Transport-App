import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../asserts/HomePage/img1.jpg";
import img2 from "../../asserts/HomePage/img2.jpg";
import img3 from "../../asserts/HomePage/img3.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./homeslider.css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="home-swiper"
      >
        <SwiperSlide className="home-swiper-slide ">
       
          <h1 className="swiper-h4 home-slider-ani">TRANSPORT YOUR  CARGO EVERYEYWERE</h1>
          <p className="swiper-p home-slider-ani">100% GUARANTEE SAFE DELIVERY WITH OVER 30 HIGHLY MODERNIZED DELIVERY VEHICLES,
          <br/> TO LOCAL AS INTERNATIONAL GOALS</p>
        
          <img src={img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide className="home-swiper-slide ">
        <h1 className="swiper-h4 home-slider-ani">TRANSPORT YOUR  CARGO EVERYEYWERE</h1>
          <p className="swiper-p home-slider-ani">100% GUARANTEE SAFE DELIVERY WITH OVER 30 HIGHLY MODERNIZED DELIVERY VEHICLES,
          <br/> TO LOCAL AS INTERNATIONAL GOALS</p>
          <img src={img2} alt="img1" />
        </SwiperSlide>
        <SwiperSlide className="home-swiper-slide ">
        <h1 className="swiper-h4 home-slider-ani">TRANSPORT YOUR  CARGO EVERYEYWERE</h1>
          <p className="swiper-p home-slider-ani">100% GUARANTEE SAFE DELIVERY WITH OVER 30 HIGHLY MODERNIZED DELIVERY VEHICLES,
          <br/> TO LOCAL AS INTERNATIONAL GOALS</p>
          <img src={img3} alt="img1" />
        </SwiperSlide>

      </Swiper>

     
    </>
  );
}
