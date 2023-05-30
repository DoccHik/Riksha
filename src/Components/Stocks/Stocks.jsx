import React from "react";
import styles from "../../styles/modules/MainPage.module.scss";
import { stocks } from "../../data/dataProject";
import StockCard from "../StockCard/StockCard";

export const Stocks = () => {
  return (
    <>
      <section className={styles["stocks"]}>
        <div className="container">
          <h1 className={styles["stocks__title"]}>Акции</h1>
          <div className={styles["stocks-row"]}>
            {stocks.map((item) => {
              return (
                <StockCard key={item.id} background={item.background}>
                  <div>
                    <h2 className={styles["stocks-card__title"]}>
                      {item.title}
                    </h2>
                    <p className={styles["stocks-card__description"]}>
                      {item.description}
                    </p>
                  </div>
                  <div className={styles["stocks-card__cover-icon"]}>
                    <img
                      className={styles["stocks-card__icon"]}
                      src={item.icon}
                      alt="icon"
                    />
                  </div>
                </StockCard>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
