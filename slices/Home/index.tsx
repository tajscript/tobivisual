import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";

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
          <div className={style.real__time}>[ Abuja, 04:12 ]</div>
        <Link href="/" className={style.nav__shop}>{slice.primary.shop_text}</Link>
      </nav>


      <div className={style.home__content}>
        <div className={style.home__title}>
          <h2 className={style.home__text_l}>{slice.primary.visual_text}</h2>
          <h2 className={style.home__text_r}>{slice.primary.artist_text}</h2>
          <h2 className={style.home__text_l}>{slice.primary.visual_text}</h2>
          <h2 className={style.home__text_r}>{slice.primary.artist_text}</h2>
          <h2 className={style.home__text_l}>{slice.primary.visual_text}</h2>
          <h2 className={style.home__text_r}>{slice.primary.artist_text}</h2>
        </div>
        
        {/* <div className={style.home__background_inner} style={{ backgroundImage: 'url(' + slice.primary.background_image.url + ')' }}></div> */}

        <div className={style.home__background}>
            <PrismicNextImage field={slice.primary.background_image_3} className={`${style.background__image} ${style.image__rotate_4}`}/>
            <PrismicNextImage field={slice.primary.background_image} className={`${style.background__image} ${style.image__rotate_3}`} />
            <PrismicNextImage field={slice.primary.background_image_3} className={`${style.background__image} ${style.image__rotate_2}`} />
            <PrismicNextImage field={slice.primary.background_image_2} className={`${style.background__image} ${style.image__rotate_1}`}/>
            <PrismicNextImage field={slice.primary.background_image} className={`${style.background__image} ${style.image__rotate}`}/>
        </div>

      </div>

      <div className={style.home__description}>
         <p>I'm Tobi Adetimehin and I'm a visual artist! I make art because it is a powerful catalyst for personal growth and I aspire to share this with others through my work!</p>
      </div>

      <div className={style.footer__text}>
      <p>©TOBI ADETIMEHIN</p>
      <p>{slice.primary.scroll_text}</p>
      </div>

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
          
          <div className={style.work__description}>
          <div className={style.work__line} />
            <p>
            {slice.primary.work_description}
            </p>
          <div className={style.work__line} />
          </div>
          
        </div>

      </div>


      </div>
    </section>
  );
};

export default Home;
