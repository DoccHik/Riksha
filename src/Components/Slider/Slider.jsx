import React from "react";
import styles from "../../styles/modules/Slider.module.scss";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation } from "swiper";
import { swiperSlides } from "../../data/dataProject";

const Slider = () => {
  return (
    <>
      <Swiper
        className={styles["swiper"]}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {swiperSlides.map((slide) => (
          <SwiperSlide className={styles["swiper-slide"]}>
            {slide.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
