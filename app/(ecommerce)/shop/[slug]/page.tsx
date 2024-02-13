"use client"

import style from "@/styles/slug.module.css";
import Image from "next/image";
import { createClient } from "@/prismicio";
import Cart from "@/components/cart";


const page = async ({ params }: { params: { slug: string } }) => {
    const client = createClient();

    const product = await client.getByUID("featuredart", params.slug)

    const increaseAmount = (product.data.amount as number);

  return (
    <section className={style.slug}>
        <Cart />
        <div className={style.wrapper}>
        <div className={style.image__wrapper}>
            <Image src={product.data.image.url || ""} alt="Product Image" width={500} height={500} className={style.image}></Image>
        </div>

        <div className={style.details}>
            {product.data.art_type === "Digital Prints" &&
                <form className={style.form}>
                    <h3>PICK A PRINT SIZE</h3>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="4x5">4 x 5</label>
                            <input type="radio" id="4x5" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${product.data.amount}
                        </h6>
                    </div>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="8x10">8 x 10</label>
                            <input type="radio" id="8x10" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${increaseAmount * 2}
                        </h6>
                    </div>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="12x15">12 x 15</label>
                            <input type="radio" id="12x15" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${increaseAmount * 3}
                        </h6>
                    </div>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="20x24">20 x 24</label>
                            <input type="radio" id="20x24" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${increaseAmount * 4}
                        </h6>
                    </div>

                    <button type="submit" className={style.button}>ADD TO CART</button>
                </form>
            }

            {product.data.art_type === "Traditional Art" &&
                <form className={style.form}>
                    <h3>ART SIZE</h3>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="size">{product.data.size}</label>
                            <input type="radio" id="size" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${product.data.amount}
                        </h6>
                    </div>
                    <button type="submit" className={style.button}>
                        ADD TO CART
                    </button>
                </form>
            }
            
            {product.data.art_type === "Traditional Art" &&
            <div className={style.description}>
                <div className={style.title}>
                    <h3> {product.data.title} </h3>
                    <p> {product.data.medium} </p>
                </div>
                <p>{product.data.description}</p>
            </div>
            }
        </div>

        </div>
    </section>
  )
}

export default page