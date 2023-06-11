import React, { useEffect, useState } from "react";
import styles from "../../styles/modules/MainPage.module.scss";
import { headerBottomLinks, productsCategores } from "../../data/dataProject";
import { Card } from "../Card/Card";
import { ButtonCustom } from "../Button/ButtonCustom";
import axios from "axios";

const Categories = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  // console.log(headerBottomLinks);

  useEffect(() => {
    headerBottomLinks.map((category) =>
      category.id === currentCategory
        ? setCurrentCategory(category.id)
        : setCurrentCategory(1)
    );
  }, []);

  return (
    <>
      <section className={styles["categories"]}>
        <div className="container">
          <h2 className={styles["categories__title"]}>Категории</h2>
          <ul className={styles["categories-tabs__list"]}>
            {headerBottomLinks.map((tab) => (
              <li
                key={tab.id}
                className={
                  currentCategory === tab.id
                    ? styles["categories-tabs__item-active"]
                    : styles["categories-tabs__item"]
                }
                onClick={() => setCurrentCategory(tab.id)}
              >
                <div className={styles["categories-tabs__item-icon"]}>
                  {tab.icon}
                </div>
                {tab.linkName}
              </li>
            ))}
          </ul>
          <div className={styles["categories__products"]}>
            {productsCategores &&
              productsCategores.map(
                (category) =>
                  category.id === currentCategory &&
                  category.products &&
                  category.products.map((product) => {
                    return (
                      <Card key={product.id}>
                        <div
                          className={styles["categories__products-card-img"]}
                        >
                          <img src={product.imageURL} alt="product" />
                        </div>
                        <div>
                          <small>{product.gram} грамм</small>
                          <small>{product.calories} Ккал</small>
                          <div>
                            {product.size &&
                              product.size.map((size) => <div>{size} см</div>)}
                          </div>
                        </div>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <div>
                          <h1>
                            <small>{product.oldPrice}</small>
                            {product.price}
                          </h1>
                          <ButtonCustom>Заказать</ButtonCustom>
                        </div>
                      </Card>
                    );
                  })
              )}
          </div>
          <div>
            <div>Пагинация 1...2...3</div>
            <div>Перейти в каталог </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
