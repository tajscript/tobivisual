"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import style from "@/styles/art.module.css";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css/scrollbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import FolioNav from "@/components/folioNav";
import CurrentTime from "@/components/currentTime";
gsap.registerPlugin(ScrollTrigger)

/**
 * Props for `ArtSlice`.
 */
export type ArtSliceProps = SliceComponentProps<Content.ArtSliceSlice>;

/**
 * Component for "ArtSlice" Slices.
 */
const ArtSlice = ({ slice }: ArtSliceProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const artRef = useRef(null);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleNavClose = () => {
    setIsNavOpen(false)
  }

  useLayoutEffect(() => {

    let art = gsap.context(() => {
    gsap.to(artRef.current, {duration: 1, delay: 0.5, opacity: 1})})

    return () => {
      art.revert();
    }

    }, [])

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.art}
    >
      <div className={style.wrapper} ref={artRef}>
      <FolioNav isOpen={isNavOpen} onClose={handleNavClose} />
      <nav className={style.nav}>
          <button className={style.nav__text} onClick={handleNavOpen}>{slice.primary.home_text}</button>
          <div className={style.real__time}>NG, <span><CurrentTime /></span></div>
          <Link href="/" className={style.nav__text}>{slice.primary.shop_text}</Link>
        </nav>

        <div className={style.container}>
          <div className={style.art__text}>
            <h4>DIGITAL</h4>
            <h4>ART</h4>
          </div>

          <Swiper 
              ref={artRef}
              className={style.image__wrapper}
              slidesPerView={1.2}
              spaceBetween={10}
              draggable={true}
              mousewheel={true}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 30,
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              modules={[Scrollbar, Autoplay]}
              scrollbar
              >
                {slice.items.map((item, index) => (
                  <SwiperSlide key={index} className={style.image__container}>
                    <PrismicNextImage field={item.image} className={style.image}/>
                  </SwiperSlide>
                ))}
            </Swiper>

          </div>
          </div>
    </section>
  );
};

export default ArtSlice;
