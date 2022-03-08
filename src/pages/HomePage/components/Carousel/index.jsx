import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./styles.scss";

import carousel_1 from "../../../../assets/images/carousel/carousel_1.jpg";
import carousel_2 from "../../../../assets/images/carousel/carousel_2.jpg";
import carousel_3 from "../../../../assets/images/carousel/carousel_3.jpg";

const Carousel = () => (
  <Swiper
    slidesPerView={1}
    spaceBetween={30}
    effect={"fade"}
    loop={true}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation, EffectFade, Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src={carousel_1} alt="Carousel adv" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={carousel_2} alt="Carousel adv" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={carousel_3} alt="Carousel adv" />
    </SwiperSlide>
  </Swiper>
);

export default Carousel
