export const NAVLINK = [
  {
    name: "Home",
    link: "/",
    navigation: "showBurgerMenu",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const FOOTERHELP = ["Payment Options", "Returns", "Privacy Policies"];

const date = new Date();
import articleimg from "../assets/images/article.png";
export const ARTICLE = [
  {
    id: 1,
    image: articleimg,
    owner: "Admin",
    time: `${date.getDay()} Oct ${date.getFullYear()}`,
    tag: "Handmade",
    title: "Exploring new ways of decorating",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id: 2,
    image: articleimg,
    owner: "Admin",
    time: `${date.getDay()} Oct ${date.getFullYear()}`,
    tag: "Wood",
    title: "Handmade pieces that took time to make",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    id: 3,
    image: articleimg,
    owner: "Admin",
    time: `${date.getDay()} Oct ${date.getFullYear()}`,
    tag: "Good",
    title: "Handmade pieces that took time to make",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
];

export const CATEGORIES = [
  {
    name: "Crafts",
    count: 2,
  },
  {
    name: "Design",
    count: 8,
  },
  {
    name: "Handmade",
    count: 1,
  },
  {
    name: "Interior",
    count: 0,
  },
  {
    name: "Wood",
    count: 6,
  },
];

import img from "../assets/images/post.png";

export const POST = [
  {
    id: 1,
    img,
    title: "Going all-in with millennial design",
    time: `${date.getDay()} Aug ${date.getFullYear()}`,
  },
  {
    id: 2,
    img,
    title: "Going all-in with millennial design",
    time: `${date.getDay()} Aug ${date.getFullYear()}`,
  },
  {
    id: 3,
    img,
    title: "Going all-in with millennial design",
    time: `${date.getDay()} Aug ${date.getFullYear()}`,
  },
  {
    id: 4,
    img,
    title: "Going all-in with millennial design",
    time: `${date.getDay()} Aug ${date.getFullYear()}`,
  },
  {
    id: 5,
    img,
    title: "Going all-in with millennial design",
    time: `${date.getDay()} Aug ${date.getFullYear()}`,
  },
];
