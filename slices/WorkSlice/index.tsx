import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import style from "@/styles/work.module.css";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `WorkSlice`.
 */
export type WorkSliceProps = SliceComponentProps<Content.WorkSliceSlice>;

/**
 * Component for "WorkSlice" Slices.
 */
const WorkSlice = ({ slice }: WorkSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.work}
    >
      <div className={style.wrapper}>
      <nav className={style.nav}>
          <button className={style.nav__home}>{slice.primary.home_text}</button>
          <Link href="/" className={style.nav__shop}>{slice.primary.shop_text}</Link>
        </nav>

        <div className={style.container}>
          <div className={style.image__wrapper}>
          <PrismicNextImage field={slice.primary.image} className={style.featured__image} />
          </div>
          <div className={style.details}>
            <h3>{slice.primary.title}</h3>
            <h4>{slice.primary.type}</h4>
            <p>{slice.primary.description}</p>
          </div>
        </div>

        <div className={style.mission__statement}>
          <h3>{slice.primary.mission}</h3>
        </div>

        <div className={style.slices}>
          {slice.items.map((item, index) => (
          <div className={style.slice__wrapper} key={index}>
            <div className={style.slice__text}>
              <h3>{item.art}</h3>
              <h4>{item.art_type}</h4>

              <p>{item.art_description}</p>
            </div>
            <div className={style.slice__image}>
            <PrismicNextImage field={item.art_image} className={style.image} />
            </div>
          </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WorkSlice;
