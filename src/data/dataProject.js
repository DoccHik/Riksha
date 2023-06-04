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
import SliderImage from "../assets/images/slider-img.png";
import FreeDeliveryIcon from "../assets/icons/components/FreeDeliveryIcon";
import FastDevileryIcon from "../assets/icons/components/FastDevileryIcon";
import BonusIcon from "../assets/icons/components/BonusIcon";
import FreshProductsIcon from "../assets/icons/components/FreshProductsIcon";
import Roll1 from "../assets/images/roll-1.png";
import Roll2 from "../assets/images/roll-2.png";
import { HotIcon } from "../assets/icons/components/HotIcon";
import { SharpIcon } from "../assets/icons/components/SharpIcon";
import combo1 from "../assets/images/combo-1.png";
import combo2 from "../assets/images/combo-2.png";
import combo3 from "../assets/images/combo-3.png";
import stockIcon1 from "../assets/images/stock-1.png";
import stockIcon2 from "../assets/images/stock-2.png";
import stockIcon3 from "../assets/images/stock-3.png";
import pizza1 from "../assets/images/pizza-1.png";
import pizza2 from "../assets/images/pizza-2.png";
import pizza3 from "../assets/images/pizza-3.png";
import pizza4 from "../assets/images/pizza-4.png";
import pizza5 from "../assets/images/pizza-5.png";
import pizza6 from "../assets/images/pizza-6.png";
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

export const swiperSlides = [
  {
    id: 1,
    title: "Калифорния в подарок при первом заказе",
    description: "от 1500 ₽ ",
    imageURL: SliderImage,
  },
  {
    id: 2,
    title: "Калифорния в подарок при первом заказе",
    description: "от 1200 ₽ ",
    imageURL: SliderImage,
  },
  {
    id: 3,
    title: "Калифорния в подарок при первом заказе",
    description: "от 1500 ₽",
    imageURL: SliderImage,
  },
];

export const advantages = [
  {
    id: 1,
    title: "Бесплатная",
    image: <FreeDeliveryIcon />,
    subTitle: "доставка",
    text: "при заказе от 600 ₽",
  },
  {
    id: 2,
    title: "Доставим",
    image: <FastDevileryIcon />,
    subTitle: "за 60 мин",
    text: "или проморол за опоздание",
  },
  {
    id: 3,
    title: "Подарим",
    image: <BonusIcon />,
    subTitle: "бонусы",
    text: "бонусная система 1 ₽ = 1 бонус",
  },
  {
    id: 4,
    title: "Свежие",
    image: <FreshProductsIcon />,
    subTitle: "продукты",
    text: "Никаких заготовок!",
  },
];

export const tabsPositions = [
  {
    id: 1,
    tabName: "Топ позиции",
    tabType: "top",
    tabContent: [
      {
        id: 1,
        productName: "Ролл Филадельфия",
        gram: 200,
        calories: 130,
        structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
        image: Roll1,
        price: 219,
        oldPrice: 269,
        sharp: true,
        hot: true,
        imageSharp: <SharpIcon />,
        imageHot: <HotIcon />,
      },
      {
        id: 2,
        productName: 'Ролл "Сливочная креветка"',
        gram: 200,
        calories: 130,
        structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
        image: Roll2,
        price: 219,
        oldPrice: 224,
        sharp: false,
        hot: true,
        imageSharp: <SharpIcon />,
        imageHot: <HotIcon />,
      },
      {
        id: 3,
        productName: 'Ролл "Чикен энд Чиз"',
        gram: 200,
        calories: 130,
        structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
        image: Roll1,
        price: 199,
        oldPrice: 232,
        sharp: true,
        hot: true,
        imageSharp: <SharpIcon />,
        imageHot: <HotIcon />,
      },
      // {
      //   id: 4,
      //   productName: "Ролл Филадельфия",
      //   gram: 200,
      //   calories: 130,
      //   structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
      //   image: Roll1,
      //   price: 219,
      //   oldPrice: 269,
      //   sharp: true,
      //   hot: true,
      //   imageSharp: <SharpIcon />,
      //   imageHot: <HotIcon />,
      // },
      // {
      //   id: 5,
      //   productName: 'Ролл "Сливочная креветка"',
      //   gram: 200,
      //   calories: 130,
      //   structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
      //   image: Roll2,
      //   price: 219,
      //   oldPrice: 224,
      //   sharp: false,
      //   hot: true,
      //   imageSharp: <SharpIcon />,
      //   imageHot: <HotIcon />,
      // },
      // {
      //   id: 6,
      //   productName: 'Ролл "Чикен энд Чиз"',
      //   gram: 200,
      //   calories: 130,
      //   structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
      //   image: Roll1,
      //   price: 199,
      //   oldPrice: 232,
      //   sharp: true,
      //   hot: true,
      //   imageSharp: <SharpIcon />,
      //   imageHot: <HotIcon />,
      // },
    ],
  },
  {
    id: 2,
    tabName: "Новинки",
    tabType: "new",
    tabContent: [
      {
        id: 1,
        productName: "Ролл Филадельфия",
        gram: 200,
        calories: 130,
        structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
        image: Roll1,
        price: 219,
        oldPrice: 269,
        sharp: true,
        hot: true,
        imageSharp: <SharpIcon />,
        imageHot: <HotIcon />,
      },
      {
        id: 2,
        productName: 'Ролл "Сливочная креветка"',
        gram: 200,
        calories: 130,
        structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
        image: Roll2,
        price: 219,
        oldPrice: 269,
        sharp: false,
        hot: true,
        imageSharp: <SharpIcon />,
        imageHot: <HotIcon />,
      },
      // {
      //   id: 3,
      //   productName: 'Ролл "Чикен энд Чиз"',
      //   gram: 200,
      //   calories: 130,
      //   structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
      //   image: Roll1,
      //   price: 219,
      //   oldPrice: 269,
      //   sharp: true,
      //   hot: true,
      // },
    ],
  },
];

export const comboMenuList = [
  {
    id: 1,
    productName: "Комбо микс",
    productDescription: "Пицца Баварская; Сет Фирменный;",
    gram: 200,
    calories: 130,
    size: [30, 50],
    oldPrice: 1499,
    price: 1319,
    image: combo1,
  },
  {
    id: 2,
    productName: "Дабл пицца",
    productDescription: "Пицца Баварская; Пицца 4 Сыра; Coca-Cola (1 л)",
    gram: 200,
    calories: 130,
    size: [30, 50],
    oldPrice: 999,
    price: 899,
    image: combo2,
  },
  {
    id: 3,
    productName: "Комбо Small party",
    productDescription: "Пицца Неаполитано; Пицца Царская; Сет Суши шок;",
    gram: 200,
    calories: 130,
    size: [30, 50],
    oldPrice: 2111,
    price: 1799,
    image: combo3,
  },
];

export const stocks = [
  {
    id: 1,
    title: "Празднуй день рождения вместе с нами",
    description: "Ролл в подарок при заказе в день рождения",
    background: "#D2F6FF",
    icon: stockIcon1,
    // waves: "../assets/images/wave.png",
  },
  {
    id: 2,
    title: "Доставим заказ за 60 мин",
    description: "или проморол за опоздание",
    background: "#FFD8DA",
    icon: stockIcon2,
    // waves: "../assets/images/wave.png",
  },
  {
    id: 3,
    title: "Приведи друга",
    description: "и получи 250 ₽ на бонусный счет",
    background: "#DBFFCF",
    icon: stockIcon3,
    // waves: "../assets/images/wave.png",
  },
];

export const productsCategores = [
  {
    id: 1,
    products: [
      {
        id: 1,
        imageURL: pizza1,
        gram: 450,
        calories: 130,
        title: "Пицца “Рикша”",
        size: [30, 50],
        description:
          "соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто.",
        oldPrice: 590,
        price: 510,
      },
      {
        id: 2,
        imageURL: pizza2,
        gram: 450,
        calories: 130,
        title: "Пицца “Парма”",
        size: [30, 50],
        description:
          "соус бешамель, пармезан, сыр моцарелла, прошутто, руккола.",
        oldPrice: 699,
        price: 588,
      },
      {
        id: 3,
        imageURL: pizza3,
        gram: 450,
        calories: 130,
        title: "Пицца “Парма”",
        size: [30, 50],
        description:
          "соус бешамель, пармезан, сыр моцарелла, прошутто, руккола.",
        oldPrice: 699,
        price: 588,
      },
      {
        id: 4,
        imageURL: pizza4,
        gram: 450,
        calories: 130,
        title: "Пицца “Парма”",
        size: [30, 50],
        description:
          "соус бешамель, пармезан, сыр моцарелла, прошутто, руккола.",
        oldPrice: 699,
        price: 588,
      },
      {
        id: 5,
        imageURL: pizza5,
        gram: 450,
        calories: 130,
        title: "Пицца “Парма”",
        size: [30, 50],
        description:
          "соус бешамель, пармезан, сыр моцарелла, прошутто, руккола.",
        oldPrice: 699,
        price: 588,
      },
      {
        id: 6,
        imageURL: pizza6,
        gram: 450,
        calories: 130,
        title: "Пицца “Парма”",
        size: [30, 50],
        description:
          "соус бешамель, пармезан, сыр моцарелла, прошутто, руккола.",
        oldPrice: 699,
        price: 588,
      },
    ],
  },
  {
    id: 2,
    products: [
      {
        id: 1,
        title: "Ролл Филадельфия",
        gram: 200,
        calories: 130,
        structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
        image: Roll1,
        price: 219,
        oldPrice: 269,
        sharp: true,
        hot: true,
        imageSharp: <SharpIcon />,
        imageHot: <HotIcon />,
      },
      {
        id: 2,
        title: 'Ролл "Сливочная креветка"',
        gram: 200,
        calories: 130,
        structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
        image: Roll2,
        price: 219,
        oldPrice: 224,
        sharp: false,
        hot: true,
        imageSharp: <SharpIcon />,
        imageHot: <HotIcon />,
      },
      {
        id: 3,
        title: 'Ролл "Чикен энд Чиз"',
        gram: 200,
        calories: 130,
        structure: 'Лосось, сыр "Филадельфия", огурец, авокадо',
        image: Roll1,
        price: 199,
        oldPrice: 232,
        sharp: true,
        hot: true,
        imageSharp: <SharpIcon />,
        imageHot: <HotIcon />,
      },
    ],
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];
