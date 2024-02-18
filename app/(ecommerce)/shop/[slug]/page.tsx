"use client"

import style from "@/styles/slug.module.css";
import Image from "next/image";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/slice/cart";
import Nav from "@/components/nav";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";


const page = ({ params }: { params: { slug: string } }) => {
    const [artSize, setArtSize] = useState("")
    const [increaseAmount, setIncreaseAmount] = useState<number>(0)
    const [product, setProduct] = useState<any>(null)
    const [cartPopUp, setCartPopUp] = useState(false)
    console.log("ART SIZE:", artSize)
    
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const productData = await client.getByUID("featuredart", params.slug);
            setProduct(productData);
            const amount = productData.data.amount as number;
            setIncreaseAmount(amount);
        }
        fetchData();
    }, [params.slug])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

            let amount = 0;
        switch (artSize) {
            case '4x5':
                amount = product.data.amount * 1;
                break;
            case '8x10':
                amount = product.data.amount * 2;
                break;
            case '12x15':
                amount = product.data.amount * 3;
                break;
            case '20x24':
                amount = product.data.amount * 4;
                break;
            default:
                amount = product.data.amount;
        }


        dispatch(addToCart({
            id: product.id,
            quantity: 1,
            title: product.data.title,
            image: product.data.image.url,
            size: artSize,
            amount: amount,
        }))
        
        // Pop up for adding items to cart
        setCartPopUp(true)

        setTimeout(() => {
            setCartPopUp(false);
          }, 3000);
    }

  return (
    <>
    <nav className="layout__nav">
        <Nav />
    </nav>
    <section className={style.slug}>
        <div><Toaster /></div>
        <div className={style.wrapper}>
        <div className={style.image__wrapper}>
            <Image src={product?.data.image.url || ""} alt="Product Image" width={500} height={500} className={style.image}></Image>
        </div>

        <div className={style.details}>
            {product?.data.art_type === "Digital Prints" &&
                <form className={style.form} onSubmit={handleSubmit}>
                    <h3>PICK A PRINT SIZE</h3>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="4x5">4 x 5</label>
                            <input type="radio" id="4x5" name="radio" value="4x5" onChange={(event) => setArtSize(event.target.value)} required />
                        </div>
                        <h6 className={style.input__amount}>
                        ₦{increaseAmount}
                        </h6>
                    </div>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="8x10">8 x 10</label>
                            <input type="radio" id="8x10" placeholder="8 x 10" name="radio" value="8x10" onChange={(event) => setArtSize(event.target.value)} required />
                        </div>
                        <h6 className={style.input__amount}>
                            ₦{increaseAmount * 2}
                        </h6>
                    </div>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="12x15">12 x 15</label>
                            <input type="radio" id="12x15" name="radio" value="12x15" onChange={(event) => setArtSize(event.target.value)} required />
                        </div>
                        <h6 className={style.input__amount}>
                            ₦{increaseAmount * 3}
                        </h6>
                    </div>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="20x24">20 x 24</label>
                            <input type="radio" id="20x24" name="radio" value="20x24" onChange={(event) => setArtSize(event.target.value)} required />
                        </div>
                        <h6 className={style.input__amount}>
                            ₦{increaseAmount * 4}
                        </h6>
                    </div>

                    <button type="submit" className={style.button}>ADD TO CART</button>
                </form>
            }

            {product?.data.art_type === "Traditional Art" &&
                <form className={style.form} onSubmit={handleSubmit}>
                    <h3>ART SIZE</h3>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="size">{product.data.size}</label>
                            <input type="radio" id="size" name="radio" value={product.data.size || undefined} onChange={(event) => setArtSize(event.target.value)} required />
                        </div>
                        <h6 className={style.input__amount}>
                            ₦{product.data.amount}
                        </h6>
                    </div>
                    <button type="submit" className={style.button}>
                        ADD TO CART
                    </button>
                </form>
            }
            
            {product?.data.art_type === "Traditional Art" &&
            <div className={style.description}>
                <div className={style.title}>
                    <h3> {product.data.title} </h3>
                    <p> {product.data.medium} </p>
                </div>
                <p>{product.data.description}</p>
            </div>
            }
        </div>


        {cartPopUp && (
        <div className={style.cart__pop}>
                <p>An item has been added to your cart</p>
                <Link href="/checkout" className={style.cart__link}>Checkout now!</Link>
            </div>
        )}
        </div>

    </section>
    </>
  )
}

export default page