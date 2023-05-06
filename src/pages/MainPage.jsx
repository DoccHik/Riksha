import React from "react";
import styles from "../styles/modules/MainPage.module.scss";
import Slider from "../Components/Slider/Slider";
import { swiperSlides } from "../data/dataProject";

const MainPage = () => {
  return (
    <section className={styles["main"]}>
      <div className="container">
        <div className={styles["main-slider"]}>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
