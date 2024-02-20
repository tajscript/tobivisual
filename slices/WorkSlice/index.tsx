"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import style from "@/styles/work.module.css";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import FolioNav from "@/components/folioNav";
gsap.registerPlugin(ScrollTrigger)

/**
 * Props for `WorkSlice`.
 */
export type WorkSliceProps = SliceComponentProps<Content.WorkSliceSlice>;

/**
 * Component for "WorkSlice" Slices.
 */
const WorkSlice = ({ slice }: WorkSliceProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const workRef = useRef(null);
  
  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleNavClose = () => {
    setIsNavOpen(false)
  }

  useLayoutEffect(() => {
    let work = gsap.context(() => {
    gsap.to(workRef.current, {duration: 1, opacity: 1})})

    gsap.utils.toArray<HTMLElement>('#details').forEach((item) => {
      gsap.fromTo(
        item,
        {
          xPercent: -50,
        },
        {
          scrollTrigger: {
            trigger: item,
            scrub: true
          },
          duration: 1,
          ease: 'power3',
          yoyo: true,
          xPercent: 0,
        }
      );
    });


    gsap.utils.toArray<HTMLElement>('#images').forEach((item) => {
      gsap.fromTo(
        item,
        {
          xPercent: 50,
        },
        {
          scrollTrigger: {
            trigger: item,
            scrub: true
          },
          duration: 1,
          ease: 'power3',
          yoyo: true,
          xPercent: 0,
        }
      );
    });

    gsap.utils.toArray<HTMLElement>('#line').forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            scrub: true,
        },
        scaleX: 25,
        duration: 2.5,
        delay: 1.5,
        yoyo: true,
    })
    });

    

    gsap.to("#mission", {
        scrollTrigger: {
            trigger: "#mission",
            scrub: true,
            end: "bottom bottom",
        },
        backgroundColor: "black",
        color: "white",
        duration: 2,
        yoyo: true
    })

    gsap.fromTo("#mission-text", {
      yPercent: 50
    }, {
      scrollTrigger: {
          trigger: "#mission", 
          scrub: true, 
      },
      yPercent: 0,
      duration: 1,
      yoyo: true,
    })

    return () => {
      work.revert();
    }

    }, [])


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.work}
    >
      <div className={style.wrapper} ref={workRef}>
      <FolioNav isOpen={isNavOpen} onClose={handleNavClose} />

      <nav className={style.nav}>
          <button className={style.nav__text} onClick={handleNavOpen}>{slice.primary.home_text}</button>
          <Link href="/shop" className={style.nav__text}>{slice.primary.shop_text}</Link>
        </nav>

        <div className={style.container}>
          <div className={style.details}>
            <h3>{slice.primary.title}</h3>
            <h4>{slice.primary.type}</h4>
            <p>{slice.primary.description}</p>
          </div>
          <div className={style.image__wrapper} style={{ backgroundImage: 'url(' + slice.primary.image.url + ')' }}>
          </div>
        </div>

        <div className={style.mission__statement} id="mission">
          <h3 id="mission-text">{slice.primary.mission}</h3>
        </div>

        <div className={style.slices}>
          {slice.items.map((item, index) => (
          <div className={style.slice__wrapper} key={index} id="slice">
            <div className={style.slice__details} id="details">
              <h3>{item.art}</h3>
              <h4>{item.art_type}</h4>
              <p>{item.art_description}</p>
            </div>
            <div className={style.slice__image} id="images">
            <PrismicNextImage field={item.art_image} className={style.image__slice} priority />
            </div>
            <div className={style.line} id="line"></div>
          </div>
          ))}
          
        </div>


      </div>
    </section>
  );
};

export default WorkSlice;
