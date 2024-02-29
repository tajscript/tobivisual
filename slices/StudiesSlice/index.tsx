"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import style from "@/styles/art.module.css";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useState } from "react";
import FolioNav from "@/components/folioNav";
import CurrentTime from "@/components/currentTime";

/**
 * Props for `StudiesSlice`.
 */
export type StudiesSliceProps = SliceComponentProps<Content.StudiesSliceSlice>;

/**
 * Component for "StudiesSlice" Slices.
 */
const StudiesSlice = ({ slice }: StudiesSliceProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveItemIndex(swiper.realIndex);
  };

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleNavClose = () => {
    setIsNavOpen(false)
  }


  return (
<section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.art}
    >
      <div className={style.wrapper}>
      <FolioNav isOpen={isNavOpen} onClose={handleNavClose} />
      <nav className={style.nav}>
          <button className={style.nav__text} onClick={handleNavOpen}>{slice.primary.home_text}</button>
          <div className={style.real__time}>NG, <span><CurrentTime /></span></div>
          <Link href="/shop" className={style.nav__text}>{slice.primary.shop_text}</Link>
        </nav>

        <div className={style.art__container}>
        <div className={style.container}>
        <div className={style.art__text}>
            {slice.primary.title}
          </div>

        <Swiper
              className={style.image__wrapper}
              slidesPerView={5}
              spaceBetween={5}
              draggable={true}
              mousewheel={true}
              loop={true}
              autoplay={{
                delay: 1000,

                pauseOnMouseEnter: true
              }}
              breakpoints={{
                640: {
                  slidesPerView: 7,
                },
                768: {
                  slidesPerView: 7,
                },
                1024: {
                  slidesPerView: 7,
                },
                1440: {
                  slidesPerView: 12,
                },
              }}
              modules={[Autoplay]}
              onSlideChange={handleSlideChange}
              >
                {slice.items.map((item, index) => (
                  <SwiperSlide key={index} className={style.image__container}>
                    <PrismicNextImage field={item.image} className={style.image} priority/>
                  </SwiperSlide>
                ))}
            </Swiper>
            </div>

          {/* Display the currently active item in a larger div */}
          <div className={style.largerDiv}>
              <PrismicNextImage field={slice.items[activeItemIndex]?.image} className={style.largeImage} priority />
          </div>

          </div>
          </div>
    </section>
  );
};

export default StudiesSlice;
