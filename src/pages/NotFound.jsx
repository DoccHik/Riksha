import React from "react";
import styles from "../styles/modules/NotFound.module.scss";
import notFoundPage from "../assets/images/404.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className={styles["not-found"]}>
      <div className="container">
        <img
          className={styles["not-found__image"]}
          src={notFoundPage}
          alt="404 страница не найдена"
        />
        <h1 className={styles["not-found__title"]}>Страница не найдена</h1>
        <p className={styles["not-found__description"]}>
          Извините, но страницу, которую Вы пытаетесь найти - не существует.
          Предлагаем Вам перейти на Главную страницу
        </p>
        <Link to="/">На главную</Link>
      </div>
    </section>
  );
};

export default NotFound;
