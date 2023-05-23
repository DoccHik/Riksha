import React from "react";
import styles from "../../styles/modules/MainPage.module.scss";
import { Card } from "../Card/Card";
import { comboMenuList } from "../../data/dataProject";
import { ButtonCustom } from "../Button/ButtonCustom";

export const ComboMenu = () => {
  return (
    <>
      <section className={styles["combo-menu"]}>
        <div className="container">
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
                      <div
                        className={styles["combo-menu__card-product__netto"]}
                      >
                        <small
                          className={styles["combo-menu__card-product__gram"]}
                        >
                          {product.gram} грамм
                        </small>
                        <small
                          className={
                            styles["combo-menu__card-product__calories"]
                          }
                        >
                          {product.calories} Ккал
                        </small>
                      </div>
                      <ul className={styles["combo-menu__card-product__size"]}>
                        {product.size.map((size, i) => (
                          <>
                            {size === 50 && (
                              <span
                                className={
                                  styles["combo-menu__card-product__size-plus"]
                                }
                              >
                                +150₽
                              </span>
                            )}
                            <li
                              key={i}
                              className={
                                styles["combo-menu__card-product__size-item"]
                              }
                            >
                              {size} см
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                    <h1 className={styles["combo-menu__card-title"]}>
                      {product.productName}
                    </h1>
                    <p className={styles["combo-menu__card-description"]}>
                      {product.productDescription}
                    </p>
                    <div className={styles["combo-menu__card-bottom"]}>
                      <h1 className={styles["combo-menu__card-price"]}>
                        <small>{product.oldPrice} ₽</small>
                        {product.price} ₽
                      </h1>
                      <ButtonCustom>Заказать</ButtonCustom>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
