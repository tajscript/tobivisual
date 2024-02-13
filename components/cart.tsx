import style from "@/styles/slug.module.css";
import bg from "@/public/assets/girl.jpg";
import { LiaTimesSolid } from "react-icons/lia";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const cart = () => {
  return (
    <div className={style.cart}>
    <div className={style.cart__wrapper}>
        <div className={style.cart__nav}>
            <p>YOUR CART</p>
            <button className={style.cart__icon}>
                <LiaTimesSolid />
            </button>
        </div>

        <div className={style.cart__container}>
            <div className={style.cart__checkout}>
                <div className={style.cart__review}>
                <div className={style.cart__images}>
                    <Image src={bg.src} alt="Product Image" width={500} height={500} className={style.cart__image}></Image>
                </div>

                <div className={style.cart__details}>
                    <h3>TELL THE WOLVES I AM HOME</h3>
                    <p>4 x 5</p>
                    <h4>${25}</h4>

                    <div className={style.crement}>
                        <button><FiMinus /></button>
                        <p>{1}</p>
                        <button><FiPlus /></button>
                    </div>

                    <button className={style.remove__button}>Remove</button>
                </div>
                </div>
            </div>

            <footer className={style.checkout}>
                <div className={style.checkout__wrapper}>
                    <p>Subtotal:</p>
                    <h5>${20}</h5>
                </div>

                <Link href="/" className={style.checkout__button}>
                    CHECKOUT
                </Link>
            </footer>

        </div>

    </div>
</div>
  )
}

export default cart