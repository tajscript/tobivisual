import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import style from "@/styles/art.module.css";
import Link from "next/link";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import bg from "@/public/assets/favicon.ico"

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

          <div className={style.body__wrapper}>
          <div className={style.image__wrapper}>
            {slice.items.map((item, index) => (
              <div className={style.image__container} key={index}>
                <PrismicNextImage field={item.image} className={style.image}/>
              </div>
            ))}
          </div>


          <div className={style.image__display}>
            <div className={style.display__wrapper}>
              <Image src={bg.src} width={500} height={500} alt="Display Digital ART" className={style.images}></Image>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtSlice;
