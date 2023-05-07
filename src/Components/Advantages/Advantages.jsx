import React from "react";
import { advantages } from "../../data/dataProject";
import styles from "../../styles/modules/MainPage.module.scss";

export const Advantages = () => {
  return (
    <div className={styles["advantages-wrapper"]}>
      {advantages.map((item) => {
        return (
          <div key={item.id} className={styles["advantages__item"]}>
            <h1 className={styles["advantages__title"]}>{item.title}</h1>
            <div className={styles["advantages__image"]}>{item.image}</div>
            <h3 className={styles["advantages__subtitle"]}>{item.subTitle}</h3>
            <span className={styles["advantages__text"]}>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
};
