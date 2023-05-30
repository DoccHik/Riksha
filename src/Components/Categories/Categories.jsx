import React from "react";
import styles from "../../styles/modules/MainPage.module.scss";
import { headerBottomLinks } from "../../data/dataProject";

const Categories = () => {
  return (
    <>
      <section className={styles["categories"]}>
        <div className="container">
          <h2 className={styles["categories__title"]}>Категории</h2>
          <ul className={styles["categories-tabs__list"]}>
            {headerBottomLinks.map((tab) => (
              <li key={tab.id} className={styles["categories-tabs__item"]}>
                <div className={styles["categories-tabs__item-icon"]}>
                  {tab.icon}
                </div>
                {tab.linkName}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Categories;
