import novaX1Image from "@/assets/product-nova-x1.webp";
import novaBookImage from "@/assets/product-novabook-air.webp";
import novaTabImage from "@/assets/product-nova-tab.webp";
import pulseBudsImage from "@/assets/product-pulse-buds.webp";
import orbitWatchImage from "@/assets/product-orbit-watch.webp";
import studioDisplayImage from "@/assets/product-studio-display.webp";

export type Product = {
  name: string;
  type: string;
  price: string;
  detail: string;
  image: string;
};

export const products: Product[] = [
  {
    name: "Nova X1",
    type: "Premium Smartphone",
    price: "$799",
    detail: "6.7-inch OLED · 256GB",
    image: novaX1Image,
  },
  {
    name: "NovaBook Air",
    type: "Ultralight Laptop",
    price: "$1,199",
    detail: "14-inch display · 18-hour battery",
    image: novaBookImage,
  },
  {
    name: "Nova Tab Pro",
    type: '12.9" Tablet',
    price: "$699",
    detail: "Pro display · All-day battery",
    image: novaTabImage,
  },
  {
    name: "Pulse Buds",
    type: "Wireless Earbuds",
    price: "$149",
    detail: "Adaptive audio · USB-C",
    image: pulseBudsImage,
  },
  {
    name: "Orbit Watch",
    type: "Smartwatch",
    price: "$249",
    detail: "Health insights · GPS",
    image: orbitWatchImage,
  },
  {
    name: "Studio Display 27",
    type: "4K Monitor",
    price: "$599",
    detail: "4K IPS · USB-C hub",
    image: studioDisplayImage,
  },
];

export const categories = [
  {
    name: "Smartphones",
    description:
      "The latest devices for work, communication, and entertainment.",
    image: novaX1Image,
  },
  {
    name: "Laptops",
    description: "Portable performance for work, school, and creativity.",
    image: novaBookImage,
  },
  {
    name: "Tablets",
    description: "Flexible devices for productivity and everyday use.",
    image: novaTabImage,
  },
  {
    name: "Audio",
    description: "Headphones and earbuds for music, calls, and focus.",
    image: pulseBudsImage,
  },
  {
    name: "Wearables",
    description: "Smartwatches and everyday connected devices.",
    image: orbitWatchImage,
  },
  {
    name: "Accessories",
    description: "Chargers, keyboards, cases, cables, and more.",
    image: studioDisplayImage,
  },
];
