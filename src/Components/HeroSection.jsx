
// components/SwiperSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';


// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const HeroSection = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide>
        <h1>Hello motki</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1>Hello motki</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1>Hello motki</h1>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
