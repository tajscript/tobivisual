import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import style from "@/styles/home.module.css"


/**
 * Props for `Home`.
 */
export type HomeProps = SliceComponentProps<Content.HomeSlice>;

/**
 * Component for "Home" Slices.
 */
const Home = ({ slice }: HomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.home}
    >
      <div className={style.wrapper}>

      {/* Hero Section */}
      <div className={style.home__wrapper}>
      <nav className={style.nav}>
        <button className={style.nav__home}>{slice.primary.home_text}</button>
        <Link href="/" className={style.nav__shop}>{slice.primary.shop_text}</Link>
      </nav>

      <div className={style.home__content}>
        <div className={style.home__title}>
        <PrismicRichText field={slice.primary.visual_text} />
        </div>
        <div className={style.home__background} style={{ backgroundImage: 'url(' + slice.primary.background_image.url + ')' }}></div>
      </div>

      <p>{slice.primary.scroll_text}</p>
      </div>

      {/* About Section */}
      <div className={style.about__wrapper}>
        <div className={style.about__details}>
          <div className={style.about__text}>
            <h4>{slice.primary.about_text}</h4>
          </div>

          <div className={style.about__descripton}>
            <p>{slice.primary.about_description}</p>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div className={style.work__wrapper}>
        <div className={style.work__details}>
          <div className={style.work__image}>
          <PrismicNextImage field={slice.primary.work_image} className={style.image} />
          </div>

          <p className={style.work__description}>
           {slice.primary.work_description}
          </p>
        </div>

      </div>


      </div>
    </section>
  );
};

export default Home;
