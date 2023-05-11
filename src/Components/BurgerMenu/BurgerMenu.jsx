import React from "react";
import styles from "../../styles/modules/BurgerMenu.module.scss";
import { headerTopLinks } from "../../data/dataProject";
import CloseIcon from "../../assets/icons/components/CloseIcon";
import { Link } from "react-router-dom";

const BurgerMenu = ({ setShowBurgerMenu }) => {
  return (
    <>
      <div className={styles["burger-menu"]}>
        <div
          className={styles["burger-menu__close-btn"]}
          onClick={() => setShowBurgerMenu(false)}
        >
          <CloseIcon />
        </div>
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
