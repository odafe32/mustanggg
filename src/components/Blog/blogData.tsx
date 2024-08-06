import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Cryptocurrency Investment Scams",
    paragraph:
      "Cryptocurrency investment scams include Initial Coin Offerings (ICOs). These are ways that new cryptocurrencies fund their startup...",
    image: "/images/blog/1.jpg",
    author: {
      name: "Mustang",
      image: "/images/blog/1.jpg",
      designation: "",
    },
    tags: ["Crytopcurrency"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Cryptocurrency Trading Scams",
    paragraph:
      "As with any type of investment, malicious individuals and scam groups have found numerous ways to defraud well-meaning investors out of their hard-earned funds...",
    image: "/images/blog/cryptoscam2.jpeg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Facebook Scams, Fake News and Bogus Bitcoins",
    paragraph:
      "One example of a crypto scam is the advertisements you may have seen on popular social media platforms. These often show up on Facebook....",
    image: "/images/blog/face.webp",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
