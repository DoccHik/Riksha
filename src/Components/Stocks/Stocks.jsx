import React from "react";
import styles from "../../styles/modules/MainPage.module.scss";

export const Stocks = () => {
  return (
    <>
      <section className={styles["stocks"]}>
        <div className="container">
          <h1 className={styles["stocks__title"]}>Акции</h1>
        </div>
      </section>
    </>
  );
};
