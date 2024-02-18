"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import style from "@/styles/contact.module.css";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import FolioNav from "@/components/folioNav";
gsap.registerPlugin(ScrollTrigger)

/**
 * Props for `ContactSlice`.
 */
export type ContactSliceProps = SliceComponentProps<Content.ContactSliceSlice>;

/**
 * Component for "ContactSlice" Slices.
 */
const ContactSlice = ({ slice }: ContactSliceProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const contactRef = useRef(null);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleNavClose = () => {
    setIsNavOpen(false)
  }

  useLayoutEffect(() => {

    let contact = gsap.context(() => {
    gsap.to(contactRef.current, {duration: 1, opacity: 1})})

    return () => {
      contact.revert();
    }

    }, [])

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.contact}
    >
      <div className={style.wrapper} ref={contactRef}>
      <FolioNav isOpen={isNavOpen} onClose={handleNavClose} />
        <nav className={style.nav}>
          <button className={style.nav__text} onClick={handleNavOpen}>{slice.primary.home_text}</button>
          <Link href="/shop" className={style.nav__text}>{slice.primary.shop_nav_text}</Link>
        </nav>

        <div className={style.container}>
          <h3>{slice.primary.title}</h3>

          <div className={style.commission}>
            <h4>{slice.primary.description}</h4>
            <h4>{slice.primary.email}</h4>
          </div>

          <div className={style.social__container}>
          <div className={style.social__wrapper}>
            {
              slice.items.map((item, index) => (
                  <PrismicNextLink field={item.link} key={index} className={style.social}>
                    {item.label}
                  </PrismicNextLink>
              ))
            }
          </div>

          <div className={style.shop__wrapper}>
            <Link href="/" className={`${style.social} ${style.flame}`}>{slice.primary.shop_text}</Link>
          </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSlice;
