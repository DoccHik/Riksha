import React, { useEffect, useState } from "react";
import styles from "../../styles/modules/MainPage.module.scss";
import { tabsPositions } from "../../data/dataProject";
import { Card } from "../Card/Card";
import { ButtonCustom } from "../Button/ButtonCustom";
import { useDispatch, useSelector } from "react-redux";
import { handlerTabsIndex } from "../../store/slices/tabsSlice";

export const Positions = () => {
  const activeTab = useSelector((state) => state.tabsReducer.activeTab);
  const dispatch = useDispatch();

  const handleTabContent = (id) => {
    dispatch(handlerTabsIndex(id));
  };

  return (
    <>
      <div className={styles["positions"]}>
        <ul className={styles["positions-tabs"]}>
          {tabsPositions.map((tab, i) => {
            return (
              <li
                key={tab.id}
                className={
                  activeTab === tab.id
                    ? styles["positions-tabs__item-active"]
                    : styles["positions-tabs__item"]
                }
                onClick={() => handleTabContent(tab.id)}
              >
                {tab.tabName}
              </li>
            );
          })}
        </ul>
        <div className={styles["positions-tabs-content"]}>
          {activeTab === 1
            ? tabsPositions.map((tab) =>
                tab.id === activeTab
                  ? tab.tabContent.map((product) => {
                      return (
                        <Card key={product.id}>
                          <div
                            className={styles["positions-tabs-content__card"]}
                          >
                            {product.sharp && (
                              <div
                                className={
                                  styles["positions-tabs-content__card-icon"]
                                }
                              >
                                {product.imageSharp}
                                <small>Острое</small>
                              </div>
                            )}
                            {product.hot && (
                              <div
                                className={
                                  styles["positions-tabs-content__card-icon"]
                                }
                              >
                                {product.imageHot}
                                <small>Горячий ролл</small>
                              </div>
                            )}
                            <img
                              src={product.image}
                              alt="Product"
                              className={
                                styles["positions-tabs-content__card-image"]
                              }
                            />
                            <div
                              className={
                                styles["positions-tabs-content__card-info"]
                              }
                            >
                              <small
                                className={
                                  styles["positions-tabs-content__card-gram"]
                                }
                              >
                                {product.gram} грамм
                              </small>
                              <small
                                className={
                                  styles[
                                    "positions-tabs-content__card-calories"
                                  ]
                                }
                              >
                                {product.calories} Ккал
                              </small>
                            </div>
                            <h3
                              className={
                                styles["positions-tabs-content__card-title"]
                              }
                            >
                              {product.productName}
                            </h3>
                            <p
                              className={
                                styles["positions-tabs-content__card-structure"]
                              }
                            >
                              {product.structure}
                            </p>
                            <div
                              className={
                                styles["positions-tabs-content__card-bottom"]
                              }
                            >
                              <div
                                className={
                                  styles["positions-tabs-content__card-price"]
                                }
                              >
                                <small>{product.oldPrice}₽</small>
                                <h3>{product.price}₽</h3>
                              </div>
                              <ButtonCustom>Заказать</ButtonCustom>
                            </div>
                          </div>
                        </Card>
                      );
                    })
                  : null
              )
            : tabsPositions.map((tab) =>
                tab.id === activeTab
                  ? tab.tabContent.map((product) => {
                      return (
                        <Card key={product.id}>
                          <div
                            className={styles["positions-tabs-content__card"]}
                          >
                            {product.sharp && (
                              <div
                                className={
                                  styles["positions-tabs-content__card-icon"]
                                }
                              >
                                {product.imageSharp}
                                <small>Острое</small>
                              </div>
                            )}
                            {product.hot && (
                              <div
                                className={
                                  styles["positions-tabs-content__card-icon"]
                                }
                              >
                                {product.imageHot}
                                <small>Горячий ролл</small>
                              </div>
                            )}
                            <img
                              src={product.image}
                              alt="Product"
                              className={
                                styles["positions-tabs-content__card-image"]
                              }
                            />
                            <div
                              className={
                                styles["positions-tabs-content__card-info"]
                              }
                            >
                              <small
                                className={
                                  styles["positions-tabs-content__card-gram"]
                                }
                              >
                                {product.gram} грамм
                              </small>
                              <small
                                className={
                                  styles[
                                    "positions-tabs-content__card-calories"
                                  ]
                                }
                              >
                                {product.calories} Ккал
                              </small>
                            </div>
                            <h3
                              className={
                                styles["positions-tabs-content__card-title"]
                              }
                            >
                              {product.productName}
                            </h3>
                            <p
                              className={
                                styles["positions-tabs-content__card-structure"]
                              }
                            >
                              {product.structure}
                            </p>
                            <div
                              className={
                                styles["positions-tabs-content__card-bottom"]
                              }
                            >
                              <div
                                className={
                                  styles["positions-tabs-content__card-price"]
                                }
                              >
                                <small>{product.oldPrice}₽</small>
                                <h3>{product.price}₽</h3>
                              </div>
                              <ButtonCustom>Заказать</ButtonCustom>
                            </div>
                          </div>
                        </Card>
                      );
                    })
                  : null
              )}
        </div>
      </div>
    </>
  );
};
