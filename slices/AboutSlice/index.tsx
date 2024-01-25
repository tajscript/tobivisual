import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import style from "@/styles/about.module.css";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { TbAsterisk } from "react-icons/tb";

/**
 * Props for `AboutSlice`.
 */
export type AboutSliceProps = SliceComponentProps<Content.AboutSliceSlice>;

/**
 * Component for "AboutSlice" Slices.
 */
const AboutSlice = ({ slice }: AboutSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.about}
    >
      <div className={style.wrapper}>
        <nav className={style.nav}>
          <button className={style.nav__home}>{slice.primary.home_text}</button>
          <Link href="/" className={style.nav__shop}>{slice.primary.shop_text}</Link>
        </nav>

        <div className={style.container}>
          <div className={style.title}>
            <h2>{slice.primary.title}</h2>
            <div className={style.stretch__line}></div>
            <h2>{slice.primary.title_2}</h2>
          </div>

          <div className={style.about__details}>
            <div className={style.image__wrapper}>
            <PrismicNextImage field={slice.primary.image} className={style.image} />
            </div>
            <div className={style.description}>
              <p>{slice.primary.image_description}</p>
            </div>
          </div>

          <div className={style.visual__container}>
              <div className={style.visual__text}>
                <h3>{slice.primary.visual_text}</h3>
                <h3 className={style.visual__text_r}>{slice.primary.artist_text}</h3>
              </div>

            <div className={style.visual__description}>
              <div className={style.icon}>
                <TbAsterisk />
              </div>
              <p>{slice.primary.visual_description}</p>
            </div>
          </div>

          <div className={style.details__about}>
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
