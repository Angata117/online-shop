import youtube from "/public/header/youtube.svg";
import facebook from "/public/header/facebook.svg";
import twitter from "/public/header/twitter.svg";
import instagram from "/public/header/instagram.svg";
import linkedIn from "/public/header/linkedIn.svg";
import gitHub from "/public/header/gitHub.svg";
import cart from "/public/header/cart.svg";
import heart from "/public/header/heart.svg";
import profile from "/public/header/profile.svg";
import shipping from "/public/home/benefits/shipping.svg";
import money from "/public/home/benefits/money.svg";
import headphones from "/public/home/benefits/icon-headphones.svg";
import card from "/public/home/benefits/card.svg";
import galaxy3 from "/public/home/bestSellers/galaxy3.png";
import apple4 from "/public/home/bestSellers/apple4.png";
import iphone from "/public/home/bestSellers/iphoneXS.png";
import beats from "/public/home/bestSellers/beatsDre.png";
import airpods from "/public/home/bestSellers/airpods2.png";
import garmin from "/public/home/bestSellers/garmin.png";
import turtleneck from "/public/home/bestSellers/turtleneck.png";
import speaker from "/public/home/bestSellers/speaker.png";
import phone from "/public/home/categories/phone.svg";
import camera from "/public/home/categories/Camera.svg";
import computer from "/public/home/categories/Computer.svg";
import trunk from "/public/home/categories/mens-fashion.svg";
import controller from "/public/home/categories/controller.svg";
import ball from "/public/home/categories/ball.svg";
import star from "/public/home/products/star.svg";
import shoe from "/public/home/products/shoe.png";
import smallIphone from "/public/home/products/iphone.png";
import smallTurtleneck from "/public/home/products/turtleneck1.png";
import image1 from "/public/home/blogs/image1.png";
import image2 from "/public/home/blogs/image2.png";
import image3 from "/public/home/blogs/image3.png";
export const headerImages1 = [facebook, twitter, youtube, instagram];
export const headerImages2 = [cart, heart, profile];

export const benefitsData = [
  {
    id: 1,
    heading: "Free shipping",
    description: "Free delivery for all orders",
    icon: shipping,
  },
  {
    id: 2,
    heading: "Money Guarantee",
    description: "30 days money back",
    icon: money,
  },
  {
    id: 3,
    heading: "24/7 Support",
    description: "Friendly 24/7 support",
    icon: headphones,
  },
  {
    id: 4,
    heading: "Secure Payment",
    description: "All cards accepted",
    icon: card,
  },
];
export const products = [
  {
    id: 1,
    sale: "sale",
    category: "Man Fashion",
    title: "Samsung Galaxy Watch 3",
    price: "$1,725.00",
    icon: galaxy3,
  },
  {
    id: 2,
    category: "Man Fashion",
    title: "Apple Watch 4 2020",
    price: "$1,725.00",
    icon: apple4,
  },
  {
    id: 3,
    category: "Man Fashion",
    sale: "sale",
    title: "iPhone XS Max Pro",
    price: "$1,725.00",
    icon: iphone,
  },
  {
    id: 4,
    category: "Man Fashion",
    title: "Beats by Dre C 3450",
    price: "$1,725.00",
    icon: beats,
  },
  {
    id: 5,
    category: "Man Fashion",
    title: "Airpods 2nd Gen",
    price: "$1,725.00",
    icon: airpods,
  },
  {
    id: 6,
    category: "Man Fashion",
    sale: "sale",
    title: "Garmin Watch Fit X",
    price: "$1,725.00",
    icon: garmin,
  },
  {
    id: 7,
    category: "Women Yellow Turtleneck",
    title: "Apple Watch 4 2020",
    price: "$1,725.00",
    icon: turtleneck,
  },
  {
    id: 8,
    category: "Man Fashion",
    title: "Harman Kardon Speaker",
    sale: "sale",
    price: "$1,725.00",
    icon: speaker,
  },
];
export const categories = [
  {
    id: 1,
    title: "Category Name",
    description: "2.3k items",
    icon: phone,
  },
  {
    id: 2,
    title: "Category Name",
    description: "2.3k items",
    icon: camera,
  },
  {
    id: 3,
    title: "Category Name",
    description: "2.3k items",
    icon: computer,
  },
  {
    id: 4,
    title: "Category Name",
    description: "2.3k items",
    icon: trunk,
  },
  {
    id: 5,
    title: "Category Name",
    description: "2.3k items",
    icon: controller,
  },
  {
    id: 6,
    title: "Category Name",
    description: "2.3k items",
    icon: ball,
  },
];
export const productList1 = [
  {
    id: 1,
    heading: "Popular items from cat 01",
    price: "$1,725.00",
    rating: "4,6",
    star: star,
    icon: smallIphone,
  },
  {
    id: 2,
    heading: "Popular items from cat 01",
    price: "$1,725.00",
    rating: "4,6",
    star: star,
    icon: smallIphone,
  },
  {
    id: 3,
    heading: "Popular items from cat 01",
    price: "$1,725.00",
    rating: "4,6",
    star: star,
    icon: smallIphone,
  },
];
export const productList2 = [
  {
    id: 1,
    heading: "Popular items from cat 02",
    price: "$1,725.00",
    rating: "4,6",
    star: star,
    icon: shoe,
  },
  {
    id: 2,
    heading: "Popular items from cat 02",
    price: "$1,725.00",
    rating: "4,6",
    star: star,
    icon: shoe,
  },
  {
    id: 3,
    heading: "Popular items from cat 02",
    price: "$1,725.00",
    rating: "4,6",
    star: star,
    icon: shoe,
  },
];
export const productList3 = [
  {
    id: 1,
    heading: "Popular items from cat 03",
    price: "$1,725.00",
    rating: "4,6",
    star: star,
    icon: smallTurtleneck,
  },
  {
    id: 2,
    heading: "Popular items from cat 03",
    price: "$1,725.00",
    rating: "4,6",
    star: star,
    icon: smallTurtleneck,
  },
  {
    id: 3,
    heading: "Popular items from cat 03",
    price: "$1,725.00",
    rating: "4,6",
    star: star,
    icon: smallTurtleneck,
  },
];

export const blogs = [
  {
    id: 1,
    date: "07 July 2020",
    title: "Types of Blouse In Catalog fashion",
    description:
      "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    image: image1,
  },
  {
    id: 2,
    date: "08 July 2020",
    title: "Types of Blouse In Catalog fashion",
    description:
      "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    image: image2,
  },
  {
    id: 3,
    date: "09 July 2020",
    title: "Types of Blouse In Catalog fashion",
    description:
      "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
    image: image3,
  },
];
export const footerLogos = [facebook, twitter, linkedIn, instagram, gitHub];
