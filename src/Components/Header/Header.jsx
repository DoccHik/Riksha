import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/modules/Header.module.scss";
// import headerLogo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import PhoneIcon from "../../assets/icons/components/PhoneIcon";
import CartIcon from "../../assets/icons/components/CartIcon";
import UserIcon from "../../assets/icons/components/UserIcon";
import { headerBottomLinks, headerTopLinks } from "../../data/dataProject";
import BurgerMenuIcon from "../../assets/icons/components/BurgerMenuIcon";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const ref = useRef(document.querySelector("body"));

  const handleShowMenuBurger = () => {
    setShowBurgerMenu(true);
  };

  useEffect(() => {
    if (showBurgerMenu) {
      ref.current.style.overflow = "hidden";
    } else {
      ref.current.style = "";
    }
  }, [showBurgerMenu]);

  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header-top"]}>
          <div className="container">
            <div className={styles["header-top-row"]}>
              <Link to="/" className={styles["header-top__logo"]}></Link>
              <ul className={styles["header-top__menu"]}>
                {headerTopLinks.map((link) => (
                  <li
                    key={link.linkName}
                    className={styles["header-top__menu-item"]}
                  >
                    {link.linkName}
                  </li>
                ))}
              </ul>
              <div className={styles["header-top__contacts"]}>
                <span>
                  <PhoneIcon /> +7 (495) 617-14-24
                </span>
                <small>c 10:00 до 23:00</small>
              </div>
              <Link to="/cart" className={styles["header-top__cart"]}>
                <span className={styles["header-top__cart-summ"]}>0₽</span>
                <div className={styles["header-top__cart-info"]}>
                  <CartIcon />
                  <span className={styles["header-top__cart-count"]}>0</span>
                </div>
              </Link>
              <Link to="/login" className={styles["header-top__user"]}>
                <UserIcon />
              </Link>
              <div
                className={styles["header-top__menu-burger"]}
                onClick={handleShowMenuBurger}
              >
                <BurgerMenuIcon />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["header-bottom"]}>
          <div className="container">
            <ul className={styles["header-bottom__menu"]}>
              {headerBottomLinks.map((link) => (
                <Link to={link.path}>
                  <li
                    key={link.id}
                    className={styles["header-bottom__menu-item"]}
                  >
                    {link.icon}
                    {link.linkName}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <BurgerMenu
        showBurgerMenu={showBurgerMenu}
        setShowBurgerMenu={setShowBurgerMenu}
      />
    </>
  );
};

export default Header;
