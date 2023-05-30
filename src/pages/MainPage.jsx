import React from "react";
import styles from "../styles/modules/MainPage.module.scss";
import Slider from "../Components/Slider/Slider";
import { Advantages } from "../Components/Advantages/Advantages";
import { Positions } from "../Components/Positions/Positions";
import { ComboMenu } from "../Components/ComboMenu/ComboMenu";
import { Stocks } from "../Components/Stocks/Stocks";
import Categories from "../Components/Categories/Categories";

const MainPage = () => {
  return (
    <section className={styles["main"]}>
      <div className="container">
        <div className={styles["main-slider"]}>
          <Slider />
          {/* <SliderCustom></SliderCustom> */}
        </div>
        <Advantages />
        <Positions />
      </div>
      <ComboMenu />
      <Stocks />
      <Categories />
    </section>
  );
};

export default MainPage;
