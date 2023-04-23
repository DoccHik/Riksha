import React from "react";
import styles from "../../styles/modules/Header.module.scss";
// import headerLogo from "../../assets/images/logo.svg";
import PhoneIcon from "../../assets/icons/components/PhoneIcon";
import CartIcon from "../../assets/icons/components/CartIcon";
import UserIcon from "../../assets/icons/components/UserIcon";
import PizzaIcon from "../../assets/icons/components/PizzaIcon";
import { Link } from "react-router-dom";
import SushiIcon from "../../assets/icons/components/SushiIcon";
import RollIcon from "../../assets/icons/components/RollIcon";
import SetIcon from "../../assets/icons/components/SetIcon";
import WokIcon from "../../assets/icons/components/WokIcon";
import SoupIcon from "../../assets/icons/components/SoupIcon";
import SaladIcon from "../../assets/icons/components/SaladIcon";
import DessertIcon from "../../assets/icons/components/DessertIcon";
import DrinksIcon from "../../assets/icons/components/DrinksIcon";
import SaleIcon from "../../assets/icons/components/SaleIcon";
const Header = () => {
  const headerTopLinks = [
    {
      id: 1,
      linkName: "О нас",
      path: "/about",
    },
    {
      id: 2,
      linkName: "Доставка и оплата",
      path: "/delivery",
    },
    {
      id: 3,
      linkName: "Контакты",
      path: "/contacts",
    },
    {
      id: 4,
      linkName: "Бонусы",
      path: "/bonus",
    },
    {
      id: 5,
      linkName: "Вакансии",
      path: "/dashboard",
    },
  ];
  const headerBottomLinks = [
    {
      id: 1,
      linkName: "Пицца",
      path: "/pizza",
      icon: <PizzaIcon />,
    },
    {
      id: 2,
      linkName: "Суши",
      path: "/sushi",
      icon: <SushiIcon />,
    },
    {
      id: 3,
      linkName: "Роллы",
      path: "/rolls",
      icon: <RollIcon />,
    },
    {
      id: 4,
      linkName: "Сеты",
      path: "/sets",
      icon: <SetIcon />,
    },
    {
      id: 5,
      linkName: "Wok",
      path: "/wok",
      icon: <WokIcon />,
    },
    {
      id: 6,
      linkName: "Супы",
      path: "/soups",
      icon: <SoupIcon />,
    },
    {
      id: 7,
      linkName: "Салаты",
      path: "/salads",
      icon: <SaladIcon />,
    },
    {
      id: 8,
      linkName: "Десерты",
      path: "/desserts",
      icon: <DessertIcon />,
    },
    {
      id: 9,
      linkName: "Напитки",
      path: "/drinks",
      icon: <DrinksIcon />,
    },
    {
      id: 10,
      linkName: "Акции",
      path: "/sales",
      icon: <SaleIcon />,
    },
  ];
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header-top"]}>
          <div className="container">
            <div className={styles["header-top-row"]}>
              <Link to="/" className={styles["header-top__logo"]}></Link>
              <ul className={styles["header-top__menu"]}>
                {headerTopLinks.map((link) => (
                  <li key={link.id} className={styles["header-top__menu-item"]}>
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
              <div className={styles["header-top__cart"]}>
                <span className={styles["header-top__cart-summ"]}>0₽</span>
                <div className={styles["header-top__cart-info"]}>
                  <CartIcon />
                  <span className={styles["header-top__cart-count"]}>0</span>
                </div>
              </div>
              <div className={styles["header-top__user"]}>
                <UserIcon />
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
    </>
  );
};

export default Header;
