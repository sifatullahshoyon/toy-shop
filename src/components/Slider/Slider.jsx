import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Slider.css";
import img1 from "../../assets/images/slider/1.jpg";
import img3 from "../../assets/images/slider/3.jpg";
import img4 from "../../assets/images/slider/4.jpg";
import img5 from "../../assets/images/slider/5.jpg";
import img8 from "../../assets/images/slider/8.jpg";
import img11 from "../../assets/images/slider/11.jpg";
import img12 from "../../assets/images/slider/12.jpg";
import img13 from "../../assets/images/slider/13.jpg";
import img15 from "../../assets/images/slider/15.jpg";
import img16 from "../../assets/images/slider/16.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img13} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img16} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img16} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img15} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
