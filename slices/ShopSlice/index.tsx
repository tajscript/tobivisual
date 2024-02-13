"use client"

import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import style from "@/styles/shop.module.css";
import { PrismicNextImage } from "@prismicio/next";

import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";

export type ShopSliceProps = SliceComponentProps<Content.ShopSliceSlice>

const ShopSlice = async ({ slice }: ShopSliceProps): Promise<JSX.Element> => {
  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const client = createClient();

      const fetchedProducts = await Promise.all(
        slice.items.map((item) => {
          if (
            isFilled.contentRelationship(item.featured) && item.featured.uid
            ) {
              return client.getByUID("featuredart", item.featured.uid)
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
    if(type === "All") {
      setFilteredProducts(products)
    } else if(type === "Traditional Art") {
      setFilteredProducts(products.filter((product) => product?.data.art_type === "Traditional Art"))
    } else if(type === "Digital Prints") {
      setFilteredProducts(products.filter((product) => product?.data.art_type === "Digital Prints"))
    }
  }


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={style.shop}
    >
      <div className={style.wrapper}>
        <h5 className={style.total__number}>20</h5>

        <div className={style.title__wrapper}>
        <div className={style.title__display}>ARTWORKS</div>

        <div className={style.title__container}>
          <button className={style.button} onClick={() => filterProduct("All")}>
            [ <p>{slice.primary.print}</p> ]
            </button>

          <button className={style.button} onClick={() => filterProduct("Digital Prints")}>
            [ <p>{slice.primary.print_2}</p> ]
            </button>

          <button className={style.button} onClick={() => filterProduct("Traditional Art")}>
            [ <p>{slice.primary.print_3}</p> ]
            </button>
        </div>
        </div>

      <div className={style.product}>
        <div className={style.button__container}>
          <button className={style.product__button}>
            <BsChevronLeft />
          </button>
          <button className={style.product__button}>
            <BsChevronRight />
          </button>
        </div>
      <div className={style.product__wrapper}>
          {filteredProducts?.map((item, index) => item && (
            <Link href="" key={index} className={style.product__index}>
              <PrismicNextImage field={item.data.image} className={style.image} />
              <h3>{item.data.title}</h3>
              <h4>${item.data.amount}</h4>
            </Link>
          ))}
      </div>
      </div>


      </div>
    </section>
  );
};

export default ShopSlice;


