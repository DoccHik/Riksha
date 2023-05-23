import React from "react";
import styles from "../../styles/modules/MainPage.module.scss";
import { Card } from "../Card/Card";
import { comboMenuList } from "../../data/dataProject";

export const ComboMenu = () => {
  return (
    <>
      <section className={styles["combo-menu"]}>
        <h1 className={styles["combo-menu__title"]}>Комбо меню</h1>
        <div className={styles["combo-menu-row"]}>
          {comboMenuList.map((product) => {
            return (
              <Card key={product.id}>
                <img
                  className={styles["combo-menu__card-image"]}
                  src={product.image}
                  alt={product.productName}
                />
                <div className={styles["combo-menu__card-product"]}>
                  <div className={styles["combo-menu__card-product__info"]}>
                    <div className={styles["combo-menu__card-product__netto"]}>
                      <small
                        className={styles["combo-menu__card-product__gram"]}
                      >
                        {product.gram} грамм
                      </small>
                      <small
                        className={styles["combo-menu__card-product__calories"]}
                      >
                        {product.calories} Ккал
                      </small>
                    </div>
                    <ul className={styles["combo-menu__card-product__size"]}>
                      {product.size.map((size, i) => (
                        <li
                          key={i}
                          className={
                            styles["combo-menu__card-product__size-item"]
                          }
                        >
                          {size} см
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 className={styles["combo-menu__card-title"]}>
                    {product.productName}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};
