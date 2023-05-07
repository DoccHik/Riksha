import React from "react";
import styles from "../styles/modules/MainPage.module.scss";
import Slider from "../Components/Slider/Slider";
import { swiperSlides } from "../data/dataProject";
import { Advantages } from "../Components/Advantages/Advantages";

const MainPage = () => {
  return (
    <section className={styles["main"]}>
      <div className="container">
        <div className={styles["main-slider"]}>
          <Slider />
        </div>
        <Advantages />
      </div>
    </section>
  );
};

export default MainPage;
