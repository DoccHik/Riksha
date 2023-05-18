import React from "react";
import Swiper, { Autoplay, Navigation } from "swiper";
import { swiperSlides } from "../data/dataProject";
import { SwiperSlide } from "swiper/react";

const SliderCustom = ({ children, ...props }) => {
  return (
    <>
      <Swiper
        // className={styles["swiper"]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        cssMode={true}
        // keyboard={true}
        // mousewheel={true}
        modules={[Navigation, Autoplay]}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {swiperSlides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            // className={styles["swiper-slide"]}
          >
            <div
            // className={styles["slide-wrapper"]}
            >
              <div>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
              <img
                // className={styles["swiper-slide__img"]}
                src={slide.imageURL}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderCustom;
