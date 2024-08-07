import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Scams",
    path: "/blog-details",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },

  {
    id: 5,
    title: "Support",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Reviews",
        path: "/Testimonials",
        newTab: false,
      },
      {
        id: 52,
        title: "Frequently Asked Questions",
        path: "/faqs",
        newTab: false,
      },
    ],
  },
];
export default menuData;
