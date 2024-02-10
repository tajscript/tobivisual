import style from "@/styles/slug.module.css";
import Image from "next/image";
import bg from "@/public/assets/girl.jpg";
import { LiaTimesSolid } from "react-icons/lia";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";


const page = ({ params }: { params: { slug: string } }) => {
  return (
    <section className={style.slug}>
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
                            <Image src={bg.src} alt="Product Image" width={300} height={300} className={style.cart__image}></Image>
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

        {/* {params.slug} */}
        <div className={style.wrapper}>
        <div className={style.image__wrapper}>
            <Image src={bg.src} alt="Product Image" width={300} height={300} className={style.image}></Image>
        </div>

        <div className={style.details}>
            <form className={style.form}>
                    <h3>PICK A PRINT SIZE</h3>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="4x5">4 x 5</label>
                            <input type="radio" id="4x5" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${10 * 2}
                        </h6>
                    </div>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="8x10">8 x 10</label>
                            <input type="radio" id="8x10" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${10 * 4}
                        </h6>
                    </div>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="12x15">12 x 15</label>
                            <input type="radio" id="12x15" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${10 * 6}
                        </h6>
                    </div>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="20x24">20 x 24</label>
                            <input type="radio" id="20x24" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${10 * 8}
                        </h6>
                    </div>

                    <button type="submit" className={style.button}>ADD TO CART</button>
                </form>

                {/* <form className={style.form}>
                    <h3>ART SIZE</h3>
                    <div className={style.input__wrapper}>
                        <div className={style.input__container}>
                            <label htmlFor="20x24">20 x 24</label>
                            <input type="radio" id="20x24" name="radio" required />
                        </div>
                        <h6 className={style.input__amount}>
                            ${10}
                        </h6>
                    </div>
                    <button type="submit" className={style.button}>
                        ADD TO CART
                    </button>
                </form> */}
            

            <div className={style.description}>
                <div className={style.title}>
                    <h3> TELL THE WOLVES I AM HOME </h3>
                    <p> Acrylic, oil on canvas </p>
                </div>


                <p> In this captivating artwork, "Wings of Resilience," the elegant
                    silhouette of a black woman's torso takes center stage, enveloped by the intricate
                    patterns of butterflies printed on an Ankara fabric backdrop. The striking
                    juxtaposition of the human form and the vibrant Ankara fabric creates a narrative of
                    strength, beauty, and transformation.
                    The butterflies, symbolizing metamorphosis and renewal, flutter delicately in the
                    background, lending a sense of enchantment and grace to the composition. Their
                    intricate patterns mirror the complexities and intricacies of the human spirit,
                    accentuating the resilience and enduring grace inherent within the woman depicted.
                    "Wings of Resilience" serves as an ode to the indomitable spirit of the black woman,
                    celebrating her unwavering strength and ability to transform and emerge with
                    newfound grace and beauty.
                </p>
            </div>
        </div>

        </div>
    </section>
  )
}

export default page