import PizzaIcon from "../assets/icons/components/PizzaIcon";
import SushiIcon from "../assets/icons/components/SushiIcon";
import RollIcon from "../assets/icons/components/RollIcon";
import SetIcon from "../assets/icons/components/SetIcon";
import WokIcon from "../assets/icons/components/WokIcon";
import SoupIcon from "../assets/icons/components/SoupIcon";
import SaladIcon from "../assets/icons/components/SaladIcon";
import DessertIcon from "../assets/icons/components/DessertIcon";
import DrinksIcon from "../assets/icons/components/DrinksIcon";
import SaleIcon from "../assets/icons/components/SaleIcon";
import BurgerMenuIcon from "../assets/icons/components/BurgerMenuIcon";

export const headerTopLinks = [
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

export const headerBottomLinks = [
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

export const burgerMenuIcon = <BurgerMenuIcon />;
