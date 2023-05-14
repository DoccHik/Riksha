import React from "react";
import styles from "../../styles/modules/BurgerMenu.module.scss";
import { headerBottomLinks, headerTopLinks } from "../../data/dataProject";
import CloseIcon from "../../assets/icons/components/CloseIcon";
import { Link } from "react-router-dom";

const BurgerMenu = ({ showBurgerMenu, setShowBurgerMenu }) => {
  return (
    <>
      <div
        className={
          showBurgerMenu ? styles["burger-menu-active"] : styles["burger-menu"]
        }
      >
        <div
          className={styles["burger-menu__close-btn"]}
          onClick={() => setShowBurgerMenu(false)}
        >
          <CloseIcon />
        </div>
        <ul className={styles["burger-menu__products-links"]}>
          {headerBottomLinks.map((link) => {
            return (
              <div key={link.id}>
                <Link to={link.path} onClick={() => setShowBurgerMenu(false)}>
                  <div className={styles["burger-menu__products-links-item"]}>
                    <div className={styles["burger-menu__products-links-icon"]}>
                      {link.icon}
                    </div>
                    <span
                      className={styles["burger-menu__products-links-name"]}
                    >
                      {link.linkName}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </ul>
        <ul className={styles["burger-menu__list"]}>
          {headerTopLinks.map((link) => (
            <li
              key={link.id}
              className={styles["burger-menu__list-item"]}
              onClick={() => setShowBurgerMenu(false)}
            >
              <Link to={link.path}>{link.linkName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
