import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import style from "@/styles/contact.module.css";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `ContactSlice`.
 */
export type ContactSliceProps = SliceComponentProps<Content.ContactSliceSlice>;

/**
 * Component for "ContactSlice" Slices.
 */
const ContactSlice = ({ slice }: ContactSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.contact}
    >
      <div className={style.wrapper}>
        <nav className={style.nav}>
          <button className={style.nav__home}>{slice.primary.home_text}</button>
          <Link href="/" className={style.nav__shop}>{slice.primary.shop_nav_text}</Link>
        </nav>

        <div className={style.container}>
          <h3>{slice.primary.title}</h3>

          <div className={style.commission}>
            <h4>{slice.primary.description}</h4>
            <h4>{slice.primary.email}</h4>
          </div>

          <div className={style.social__wrapper}>
            {
              slice.items.map((item, index) => (
                <div key={index} className={style.socials}>
                  <PrismicNextLink field={item.link} className={style.social}>
                    {item.label}
                  </PrismicNextLink>
                </div>
              ))
            }
          </div>

          <div className={style.shop__wrapper}>
            <Link href="/" className={style.shop__link}>{slice.primary.shop_text}</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSlice;
