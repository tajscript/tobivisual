"use client"

import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import style from "@/styles/shop.module.css";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import Nav from "@/components/nav";

export type ShopSliceProps = SliceComponentProps<Content.ShopSliceSlice>

const ProductSection = ({ products }: { products: any[] }) => {

  return (
  <div className={style.product}>
    <Swiper 
    className={style.product__wrapper}
    modules={[ Navigation ]}
    slidesPerView={1.2}
    spaceBetween={10}
    draggable={true}
    navigation
    mousewheel={true}
    breakpoints={{
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
    }}
    cssMode={true}
    >
      {products.map((item, index) => item && (
        <SwiperSlide key={index}>
        <Link href={`/shop/${item.slug}`} className={style.product__index}>
          <PrismicNextImage field={item.data.image} className={style.image} priority />
          <h3>{item.data.title}</h3>
          <h4>₦{item.data.amount}</h4>
        </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
};

export function generateSlug(text: string) {
  return text.toString().toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')  
      .replace(/(^-|-$)/g, '') 
      .trim();
}

const ShopSlice = ({ slice }: ShopSliceProps): JSX.Element => {
  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Artworks")

  useEffect(() => {
    const fetchProducts = async () => {
      const client = createClient();

      const fetchedProducts = await Promise.all(
        slice.items.map(async (item) => {
          if (
              isFilled.contentRelationship(item.featured) && item.featured.uid
            ) {
              const productData = await client.getByUID("featuredart", item.featured.uid)
              const slug = generateSlug(productData.uid)
              return {...productData, slug}
            }
        })
      );
      setFilteredProducts(fetchedProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, [])

  // Filter Product according to Art type
  const filterProduct = (type: string) => {
    setSelectedCategory(type)

    if(type === "Artworks") {
      setFilteredProducts(products)
    } else if(type === "Traditional") {
      setFilteredProducts(products.filter((product) => product?.data.art_type === "Traditional Art"))
    } else if(type === "Digital") {
      setFilteredProducts(products.filter((product) => product?.data.art_type === "Digital Prints"))
    }
  }


  return (
    <>
      <nav className="layout__nav">
          <Nav />
      </nav>
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.shop}
    >
      <div className={style.wrapper}>
        <div className={style.title__wrapper}>
        <h4 className={style.title__display}>{selectedCategory}</h4>

        <div className={style.title__container}>
          <button className={style.button} onClick={() => filterProduct("Artworks")}>
            [ <p>{slice.primary.print}</p> ]
            </button>

          <button className={style.button} onClick={() => filterProduct("Digital")}>
            [ <p>{slice.primary.print_2}</p> ]
            </button>

          <button className={style.button} onClick={() => filterProduct("Traditional")}>
            [ <p>{slice.primary.print_3}</p> ]
            </button>
        </div>
        </div>

      <ProductSection products={filteredProducts} />

      </div>
    </section>
    </>
  );
};

export default ShopSlice;