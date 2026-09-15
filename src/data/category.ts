import novaPhone_1400 from "@/assets/category/smartphone/nova-smartphone-1400.webp";
import novaPhone_1000 from "@/assets/category/smartphone/nova-smartphone-1000.webp";
import novaPhone_700 from "@/assets/category/smartphone/nova-smartphone-700.webp";
import novaPhone_500 from "@/assets/category/smartphone/nova-smartphone-500.webp";
import novaPhone_350 from "@/assets/category/smartphone/nova-smartphone-350.webp";

import novaTab_1400 from "@/assets/category/tab/nova-tab-1400.webp";
import novaTab_1000 from "@/assets/category/tab/nova-tab-1000.webp";
import novaTab_700 from "@/assets/category/tab/nova-tab-700.webp";
import novaTab_500 from "@/assets/category/tab/nova-tab-500.webp";
import novaTab_350 from "@/assets/category/tab/nova-tab-350.webp";

import novaLaptop_1400 from "@/assets/category/laptop/nova-laptop-1400.webp";
import novaLaptop_1000 from "@/assets/category/laptop/nova-laptop-1000.webp";
import novaLaptop_700 from "@/assets/category/laptop/nova-laptop-700.webp";
import novaLaptop_500 from "@/assets/category/laptop/nova-laptop-500.webp";
import novaLaptop_350 from "@/assets/category/laptop/nova-laptop-350.webp";

import novaAudio_1400 from "@/assets/category/audio/nova-audio-1400.webp";
import novaAudio_1000 from "@/assets/category/audio/nova-audio-1000.webp";
import novaAudio_700 from "@/assets/category/audio/nova-audio-700.webp";
import novaAudio_500 from "@/assets/category/audio/nova-audio-500.webp";
import novaAudio_350 from "@/assets/category/audio/nova-audio-350.webp";

import novaWatch_1400 from "@/assets/category/watch/nova-watch-1400.webp";
import novaWatch_1000 from "@/assets/category/watch/nova-watch-1000.webp";
import novaWatch_700 from "@/assets/category/watch/nova-watch-700.webp";
import novaWatch_500 from "@/assets/category/watch/nova-watch-500.webp";
import novaWatch_350 from "@/assets/category/watch/nova-watch-350.webp";

import novaTv_1400 from "@/assets/category/tv/nova-tv-1400.webp";
import novaTv_1000 from "@/assets/category/tv/nova-tv-1000.webp";
import novaTv_700 from "@/assets/category/tv/nova-tv-700.webp";
import novaTv_500 from "@/assets/category/tv/nova-tv-500.webp";
import novaTv_350 from "@/assets/category/tv/nova-tv-350.webp";

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
    image: novaPhone_1400,
    imageSrcSet: `${novaPhone_350} 350w, ${novaPhone_500} 500w, ${novaPhone_700} 700w, ${novaPhone_1000} 1000w, ${novaPhone_1400} 1400w`,
  },
  {
    name: "Laptops",
    description: "Portable performance for work, school, and creativity.",
    image: novaLaptop_1400,
    imageSrcSet: `${novaLaptop_350} 350w, ${novaLaptop_500} 500w, ${novaLaptop_700} 700w, ${novaLaptop_1000} 1000w, ${novaLaptop_1400} 1400w`, // TODO: add sized variants
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
    image: novaAudio_1400,
    imageSrcSet: `${novaAudio_350} 350w, ${novaAudio_500} 500w, ${novaAudio_700} 700w, ${novaAudio_1000} 1000w, ${novaAudio_1400} 1400w`,
  },
  {
    name: "Wearables",
    description: "Smartwatches and everyday connected devices.",
    image: novaWatch_1400,
    imageSrcSet: `${novaWatch_350} 350w, ${novaWatch_500} 500w, ${novaWatch_700} 700w, ${novaWatch_1000} 1000w, ${novaWatch_1400} 1400w`,
  },
  {
    name: "TV",
    description: "TVs for entertainment, work, and gaming.",
    image: novaTv_1400,
    imageSrcSet: `${novaTv_350} 350w, ${novaTv_500} 500w, ${novaTv_700} 700w, ${novaTv_1000} 1000w, ${novaTv_1400} 1400w`,
  },
];
