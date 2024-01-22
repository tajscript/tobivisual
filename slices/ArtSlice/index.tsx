import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import style from "@/styles/art.module.css";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ArtSlice`.
 */
export type ArtSliceProps = SliceComponentProps<Content.ArtSliceSlice>;

/**
 * Component for "ArtSlice" Slices.
 */
const ArtSlice = ({ slice }: ArtSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.art}
    >
      <div className={style.wrapper}>
      <nav className={style.nav}>
          <button className={style.nav__home}>{slice.primary.home_text}</button>
          <Link href="/" className={style.nav__shop}>{slice.primary.shop_text}</Link>
        </nav>

        <div className={style.container}>
          <div className={style.art__text}>
            <h4>DIGITAL</h4>
            <h4>ART</h4>
          </div>

          <div className={style.image__wrapper}>
            {slice.items.map((item, index) => (
              <div className={style.image__container} key={index}>
                <div className={style.images}>
                <PrismicNextImage field={item.image} className={style.image}/>
                </div>
                <div className={style.images}>
                <PrismicNextImage field={item.image_2} className={style.image}/>
                </div>
                <div className={style.images}>
                <PrismicNextImage field={item.image_3} className={style.image}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtSlice;
