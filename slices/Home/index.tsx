"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import CurrentTime from "@/components/currentTime";
import { useLayoutEffect, useRef, useState } from "react";
import FolioNav from "@/components/folioNav";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import style from "@/styles/home.module.css"


/**
 * Props for `Home`.
 */
export type HomeProps = SliceComponentProps<Content.HomeSlice>;

/**
 * Component for "Home" Slices.
 */
const Home = ({ slice }: HomeProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const colorRef = useRef(null);
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const imageRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const aboutRef = useRef(null);
  const workDetailsRef = useRef(null);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleNavClose = () => {
    setIsNavOpen(false)
  }
  
  useLayoutEffect(() => {

    let hero = gsap.context(() => {
      gsap.to(heroRef.current, {duration: 1, opacity: 1})})


      gsap.fromTo(imageRef.current, {x: 0, y: 0}, {duration: 1.5, delay: 1.5, x: 10, y: -10 })

      gsap.fromTo(imageRef1.current, {x: 0, y: 0}, {duration: 1.5, delay: 2, x: 20, y: -20 })

      gsap.fromTo(imageRef2.current, {x: 0, y: 0}, {duration: 1.5, delay: 2.5, x: 30, y: -30 })

      gsap.fromTo(imageRef3.current, {x: 0, y: 0}, {duration: 1.5, delay: 3, x: 40, y: -40 })
    

    gsap.fromTo(aboutRef.current, {
      yPercent: 30
    }, {
      scrollTrigger: {
          trigger: colorRef.current, 
          scrub: 1, 
      },
      yPercent: 0,
      duration: 2,
      yoyo: true,
    })

    gsap.fromTo(workDetailsRef.current, {xPercent: -50}, {
      scrollTrigger: {
          trigger: workRef.current, 
          scrub: 1, 
      },
      xPercent: 0,
      duration: 2,
      yoyo: true,
    })

    gsap.fromTo("#work_desc", {xPercent: 80}, {
      scrollTrigger: {
          trigger: aboutRef.current, 
          scrub: 1, 
      },
      xPercent: 0,
      duration: 2,
      yoyo: true,
    })

    gsap.to("#visual", {
      xPercent: 100, 
      repeat: -1, 
      duration: 10, 
      ease: "none",
      yoyo: true
  });

    return () => {
        hero.revert();
    }

    }, [])

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.home}
    >
      <div className={style.wrapper}  ref={heroRef}>
        <FolioNav isOpen={isNavOpen} onClose={handleNavClose} />

      {/* Hero Section */}
      <div className={style.home__wrapper} id="home">
      <nav className={style.nav}>
        <button onClick={handleNavOpen} className={style.nav__text}>{slice.primary.home_text}</button>
          <div className={style.real__time}>NG, <span><CurrentTime /></span></div>
        <Link href="/shop" className={style.nav__text}>{slice.primary.shop_text}</Link>
      </nav>

      <div className={style.home__content}>
        <div className={style.home__title} id="visual">
          <h2 className={style.home__text_l}>{slice.primary.visual_text}</h2>
          <h2 className={style.home__text_r}>{slice.primary.artist_text}</h2>
          <h2 className={style.home__text_l}>{slice.primary.visual_text}</h2>
          <h2 className={style.home__text_r}>{slice.primary.artist_text}</h2>
          <h2 className={style.home__text_l}>{slice.primary.visual_text}</h2>
          <h2 className={style.home__text_r}>{slice.primary.artist_text}</h2>
          <h2 className={style.home__text_l}>{slice.primary.visual_text}</h2>
          <h2 className={style.home__text_r}>{slice.primary.artist_text}</h2>
          <h2 className={style.home__text_l}>{slice.primary.visual_text}</h2>
          <h2 className={style.home__text_r}>{slice.primary.artist_text}</h2>
          <h2 className={style.home__text_l}>{slice.primary.visual_text}</h2>
          <h2 className={style.home__text_r}>{slice.primary.artist_text}</h2>
        </div>

        <div className={style.home__background}>
            <div className={`${style.background__image} ${style.image__rotate_4}`} ref={imageRef3}>
            <PrismicNextImage field={slice.primary.background_image_3} priority className={style.image}  />
            </div>
            <div className={`${style.background__image} ${style.image__rotate_3}`} ref={imageRef2}>
            <PrismicNextImage field={slice.primary.background_image} priority className={style.image}  />
            </div>
            <div className={`${style.background__image} ${style.image__rotate_2}`} ref={imageRef1}>
            <PrismicNextImage field={slice.primary.background_image_3} priority className={style.image} />
            </div>
            <div className={`${style.background__image} ${style.image__rotate_1}`} ref={imageRef}>
            <PrismicNextImage field={slice.primary.background_image_2} priority className={style.image}/>
            </div>
            <div className={style.background__image}>
            <PrismicNextImage field={slice.primary.background_image} priority className={style.image}/>
            </div>
        </div>

      </div>

      <div className={style.home__description}>
         <p>I'm Tobi Adetimehin, a visual artist. I make art because it is a powerful catalyst for personal growth and I aspire to share this with others through my work!</p>
      </div>

      <div className={style.footer__text}>
      <p>©TOBI ADETIMEHIN</p>
      <p>{slice.primary.scroll_text}</p>
      </div>

      </div>

      {/* About Section */}
      <div className={style.about__wrapper} id="about" ref={colorRef}>
        <div className={style.about__details} ref={aboutRef}>
          <Link href="/about" className={style.about__text}>
            <h4>{slice.primary.about_text}</h4>
          </Link>

          <div className={style.about__descripton}>
            <p>{slice.primary.about_description}</p>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div className={style.work__wrapper} id="work" ref={workRef}>
        <div className={style.work__details}>
          
          <div className={style.work__description} id="work_desc">
            <div className={style.work__desc}>
              <div className={style.work__line} id="line" />
                <p>
                  {slice.primary.work_description}
                </p>
              <div className={style.work__line} id="line" />
            </div>
          </div>

          <div className={style.work__image} ref={workDetailsRef}>
            <PrismicNextImage field={slice.primary.work_image} priority className={style.work_image} />
          </div>
          
        </div>

      </div>


      </div>
    </section>
  );
};

export default Home;
