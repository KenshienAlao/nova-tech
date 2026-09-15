import novaX1_1400 from "@/assets/featured-product/x1/nova-x1-1400.webp";
import novaX1_1000 from "@/assets/featured-product/x1/nova-x1-1000.webp";
import novaX1_700 from "@/assets/featured-product/x1/nova-x1-700.webp";
import novaX1_500 from "@/assets/featured-product/x1/nova-x1-500.webp";
import novaX1_350 from "@/assets/featured-product/x1/nova-x1-350.webp";

import novaBookair_1400 from "@/assets/featured-product/bookair/nova-bookair-1400.webp";
import novaBookair_1000 from "@/assets/featured-product/bookair/nova-bookair-1000.webp";
import novaBookair_700 from "@/assets/featured-product/bookair/nova-bookair-700.webp";
import novaBookair_500 from "@/assets/featured-product/bookair/nova-bookair-500.webp";
import novaBookair_350 from "@/assets/featured-product/bookair/nova-bookair-350.webp";

import novaTabpro_1400 from "@/assets/featured-product/tabpro/nova-tabpro-1400.webp";
import novaTabpro_1000 from "@/assets/featured-product/tabpro/nova-tabpro-1000.webp";
import novaTabpro_700 from "@/assets/featured-product/tabpro/nova-tabpro-700.webp";
import novaTabpro_500 from "@/assets/featured-product/tabpro/nova-tabpro-500.webp";
import novaTabpro_350 from "@/assets/featured-product/tabpro/nova-tabpro-350.webp";

import novaBuds_1400 from "@/assets/featured-product/buds/nova-buds-1400.webp";
import novaBuds_1000 from "@/assets/featured-product/buds/nova-buds-1000.webp";
import novaBuds_700 from "@/assets/featured-product/buds/nova-buds-700.webp";
import novaBuds_500 from "@/assets/featured-product/buds/nova-buds-500.webp";
import novaBuds_350 from "@/assets/featured-product/buds/nova-buds-350.webp";

import novaOrbitwatch_1400 from "@/assets/featured-product/watch/nova-watch-1400.webp";
import novaOrbitwatch_1000 from "@/assets/featured-product/watch/nova-watch-1000.webp";
import novaOrbitwatch_700 from "@/assets/featured-product/watch/nova-watch-700.webp";
import novaOrbitwatch_500 from "@/assets/featured-product/watch/nova-watch-500.webp";
import novaOrbitwatch_350 from "@/assets/featured-product/watch/nova-watch-350.webp";

import novaVision_1400 from "@/assets/featured-product/vision/nova-vision-1400.webp";
import novaVision_1000 from "@/assets/featured-product/vision/nova-vision-1000.webp";
import novaVision_700 from "@/assets/featured-product/vision/nova-vision-700.webp";
import novaVision_500 from "@/assets/featured-product/vision/nova-vision-500.webp";
import novaVision_350 from "@/assets/featured-product/vision/nova-vision-350.webp";

export type Product = {
  name: string;
  type: string;
  price: string;
  detail: string;
  image: string;
  imageSrcSet: string;
};

export const products: Product[] = [
  {
    name: "Nova X1",
    type: "Premium Smartphone",
    price: "$799",
    detail: "6.7-inch OLED · 256GB",
    image: novaX1_1400,
    imageSrcSet: `${novaX1_350} 350w, ${novaX1_500} 500w, ${novaX1_700} 700w, ${novaX1_1000} 1000w, ${novaX1_1400} 1400w`,
  },
  {
    name: "NovaBook Air",
    type: "Ultralight Laptop",
    price: "$1,199",
    detail: "14-inch display · 18-hour battery",
    image: novaBookair_1400,
    imageSrcSet: `${novaBookair_350} 350w, ${novaBookair_500} 500w, ${novaBookair_700} 700w, ${novaBookair_1000} 1000w, ${novaBookair_1400} 1400w`,
  },
  {
    name: "Nova Tab Pro",
    type: '12.9" Tablet',
    price: "$699",
    detail: "Pro display · All-day battery",
    image: novaTabpro_1400,
    imageSrcSet: `${novaTabpro_350} 350w, ${novaTabpro_500} 500w, ${novaTabpro_700} 700w, ${novaTabpro_1000} 1000w, ${novaTabpro_1400} 1400w`,
  },
  {
    name: "Pulse Buds",
    type: "Wireless Earbuds",
    price: "$149",
    detail: "Adaptive audio · USB-C",
    image: novaBuds_1400,
    imageSrcSet: `${novaBuds_350} 350w, ${novaBuds_500} 500w, ${novaBuds_700} 700w, ${novaBuds_1000} 1000w, ${novaBuds_1400} 1400w`,
  },
  {
    name: "Orbit Watch",
    type: "Smartwatch",
    price: "$249",
    detail: "Health insights · GPS",
    image: novaOrbitwatch_1400,
    imageSrcSet: `${novaOrbitwatch_350} 350w, ${novaOrbitwatch_500} 500w, ${novaOrbitwatch_700} 700w, ${novaOrbitwatch_1000} 1000w, ${novaOrbitwatch_1400} 1400w`,
  },
  {
    name: "Nova TV X1",
    type: "4K TV",
    price: "$599",
    detail: "4K IPS · USB-C hub",
    image: novaVision_1400,
    imageSrcSet: `${novaVision_350} 350w, ${novaVision_500} 500w, ${novaVision_700} 700w, ${novaVision_1000} 1000w, ${novaVision_1400} 1400w`,
  },
];
