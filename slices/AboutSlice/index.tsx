"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import style from "@/styles/about.module.css";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { TbAsterisk } from "react-icons/tb";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import FolioNav from "@/components/folioNav";
gsap.registerPlugin(ScrollTrigger)


/**
 * Props for `AboutSlice`.
 */
export type AboutSliceProps = SliceComponentProps<Content.AboutSliceSlice>;

/**
 * Component for "AboutSlice" Slices.
 */
const AboutSlice = ({ slice }: AboutSliceProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const aboutRef = useRef(null);
  const lineRef = useRef(null);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleNavClose = () => {
    setIsNavOpen(false)
  }

  useLayoutEffect(() => {

    let about = gsap.context(() => {
    gsap.to(aboutRef.current, {duration: 1, opacity: 1})})

    gsap.to(lineRef.current, {
      scaleX: 10,
      duration: 5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    })

    gsap.fromTo("#details", {
      yPercent: 25
    }, {
      scrollTrigger: {
          trigger: "#details", 
          scrub: 2, 
          end: "bottom top"
      },
      yPercent: 0,
      duration: 2,
      yoyo: true,
    })

    return () => {
      about.revert();
    }

    }, [])


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.about}
    >
      <div className={style.wrapper} ref={aboutRef}>
      <FolioNav isOpen={isNavOpen} onClose={handleNavClose} />
        <nav className={style.nav}>
          <button className={style.nav__text} onClick={handleNavOpen}>{slice.primary.home_text}</button>
          <Link href="/shop" className={style.nav__text}>{slice.primary.shop_text}</Link>
        </nav>

        <div className={style.container}>
          <div className={style.title}>
            <h2>{slice.primary.title}</h2>
            <h2>{slice.primary.title_2}</h2>
          </div>
          <div className={style.stretch__line} ref={lineRef}></div>

          <div className={style.about__details} id="details">
            <div className={style.image__wrapper}>
            <PrismicNextImage field={slice.primary.image} className={style.image} />
            </div>
            <div className={style.description}>
              <p>{slice.primary.image_description}</p>
            </div>
          </div>

          <div className={style.visual__container}>
              <div className={style.visual__text}>
                <h3 id="text_l">{slice.primary.visual_text}</h3>
                <h3 className={style.visual__text_r} id="text_r">{slice.primary.artist_text}</h3>
              </div>

            <div className={style.visual__description}>
              <div className={style.icon}>
                <TbAsterisk />
              </div>
              <p>{slice.primary.visual_description}</p>
            </div>
          </div>

          <div className={style.details__about} id="details__about">
            <div className={style.detail__text}>
              <p>{slice.primary.description}</p>
            </div>

            <div className={style.detail__image}>
              <PrismicNextImage field={slice.primary.footer_image} className={style.r__image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSlice;
