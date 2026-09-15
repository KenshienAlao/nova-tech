import novaX1_1400 from "@/assets/product/x1/nova-x1-1400.webp";
import novaX1_1000 from "@/assets/product/x1/nova-x1-1000.webp";
import novaX1_700 from "@/assets/product/x1/nova-x1-700.webp";
import novaX1_500 from "@/assets/product/x1/nova-x1-500.webp";
import novaX1_350 from "@/assets/product/x1/nova-x1-350.webp";

import novaTab_1400 from "@/assets/product/tab/nova-tab-1400.webp";
import novaTab_1000 from "@/assets/product/tab/nova-tab-1000.webp";
import novaTab_700 from "@/assets/product/tab/nova-tab-700.webp";
import novaTab_500 from "@/assets/product/tab/nova-tab-500.webp";
import novaTab_350 from "@/assets/product/tab/nova-tab-350.webp";

import novaAir_1400 from "@/assets/product/air/nova-air-1400.webp";
import novaAir_1000 from "@/assets/product/air/nova-air-1000.webp";
import novaAir_700 from "@/assets/product/air/nova-air-700.webp";
import novaAir_500 from "@/assets/product/air/nova-air-500.webp";
import novaAir_350 from "@/assets/product/air/nova-air-350.webp";

import novaBuds_1400 from "@/assets/product/buds/nova-buds-1400.webp";
import novaBuds_1000 from "@/assets/product/buds/nova-buds-1000.webp";
import novaBuds_700 from "@/assets/product/buds/nova-buds-700.webp";
import novaBuds_500 from "@/assets/product/buds/nova-buds-500.webp";
import novaBuds_350 from "@/assets/product/buds/nova-buds-350.webp";

import novaWatch_1400 from "@/assets/product/watch/nova-watch-1400.webp";
import novaWatch_1000 from "@/assets/product/watch/nova-watch-1000.webp";
import novaWatch_700 from "@/assets/product/watch/nova-watch-700.webp";
import novaWatch_500 from "@/assets/product/watch/nova-watch-500.webp";
import novaWatch_350 from "@/assets/product/watch/nova-watch-350.webp";

import novaDisplay_1400 from "@/assets/product/display/nova-display-1400.webp";
import novaDisplay_1000 from "@/assets/product/display/nova-display-1000.webp";
import novaDisplay_700 from "@/assets/product/display/nova-display-700.webp";
import novaDisplay_500 from "@/assets/product/display/nova-display-500.webp";
import novaDisplay_350 from "@/assets/product/display/nova-display-350.webp";

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
    image: novaX1_1400,
  },
  {
    name: "NovaBook Air",
    type: "Ultralight Laptop",
    price: "$1,199",
    detail: "14-inch display · 18-hour battery",
    image: novaAir_1400,
  },
  {
    name: "Nova Tab Pro",
    type: '12.9" Tablet',
    price: "$699",
    detail: "Pro display · All-day battery",
    image: novaTab_1400,
  },
  {
    name: "Pulse Buds",
    type: "Wireless Earbuds",
    price: "$149",
    detail: "Adaptive audio · USB-C",
    image: novaBuds_1400,
  },
  {
    name: "Orbit Watch",
    type: "Smartwatch",
    price: "$249",
    detail: "Health insights · GPS",
    image: novaWatch_1400,
  },
  {
    name: "Studio Display 27",
    type: "4K Monitor",
    price: "$599",
    detail: "4K IPS · USB-C hub",
    image: novaDisplay_1400,
  },
];

export type Category = {
  name: string;
  description: string;
  image: string;
  imageSrcSet: string;
};

export const categories: Category[] = [
  {
    name: "Smartphones",
    description:
      "The latest devices for work, communication, and entertainment.",
    image: novaX1_1000,
    imageSrcSet: `${novaX1_350} 350w, ${novaX1_500} 500w, ${novaX1_700} 700w, ${novaX1_1000} 1000w, ${novaX1_1400} 1400w`,
  },
  {
    name: "Laptops",
    description: "Portable performance for work, school, and creativity.",
    image: novaAir_1400,
    imageSrcSet: `${novaAir_350} 350w, ${novaAir_500} 500w, ${novaAir_700} 700w, ${novaAir_1000} 1000w, ${novaAir_1400} 1400w`, // TODO: add sized variants
  },
  {
    name: "Tablets",
    description: "Flexible devices for productivity and everyday use.",
    image: novaTab_1400,
    imageSrcSet: `${novaTab_350} 350w, ${novaTab_500} 500w, ${novaTab_700} 700w, ${novaTab_1000} 1000w, ${novaTab_1400} 1400w`,
  },
  {
    name: "Audio",
    description: "Headphones and earbuds for music, calls, and focus.",
    image: novaBuds_1400,
    imageSrcSet: `${novaBuds_350} 350w, ${novaBuds_500} 500w, ${novaBuds_700} 700w, ${novaBuds_1000} 1000w, ${novaBuds_1400} 1400w`,
  },
  {
    name: "Wearables",
    description: "Smartwatches and everyday connected devices.",
    image: novaWatch_1400,
    imageSrcSet: `${novaWatch_350} 350w, ${novaWatch_500} 500w, ${novaWatch_700} 700w, ${novaWatch_1000} 1000w, ${novaWatch_1400} 1400w`,
  },
  {
    name: "Accessories",
    description: "Chargers, keyboards, cases, cables, and more.",
    image: novaDisplay_1400,
    imageSrcSet: `${novaDisplay_350} 350w, ${novaDisplay_500} 500w, ${novaDisplay_700} 700w, ${novaDisplay_1000} 1000w, ${novaDisplay_1400} 1400w`,
  },
];
