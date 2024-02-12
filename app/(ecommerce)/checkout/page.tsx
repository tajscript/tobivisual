import style from "@/styles/checkout.module.css";
import Image from "next/image";
import bg from "@/public/assets/girl.jpg";
import Link from "next/link";

const page = () => {
  return (
    <section className={style.payment}>
        <div className={style.wrapper}>
            <h3>CHECKOUT</h3>

            <div className={style.item__wrapper}>
                <div className={style.item__flex}>
                    <div className={style.items}>
                        <div className={style.item}>
                            <h4>ITEM</h4>
                            <Image src={bg.src} alt="Product Image" width={300} height={300} className={style.image}></Image>
                        </div>
                        <div className={`${style.item} ${style.hide}`}>
                            <h4>TITLE</h4>
                            <h3>{ "TELL THE WOLVES I AM HOME" }</h3>
                        </div>
                    </div>

                    <div className={style.items}>
                        <div className={style.item}>
                            <h4>QUANTITY</h4>
                            <h3>{1}</h3>
                        </div>
                        <div className={style.item}>
                            <h4>PRICE</h4>
                            <h3>${20}.00</h3>
                        </div>
                    </div>
                    </div>


                    <div className={style.total}>
                        <h3>TOTAL: ${28}.00</h3>
                    </div>
                </div>
                

            <h5>HAVE AN ACCOUNT? <span><Link href="/login">LOGIN</Link></span></h5>

            <form className={style.form}>
                <div className={style.contact}>
                    <h4>CONTACT INFO</h4>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" required />
                    
                    <label htmlFor="phone">PHONE</label>
                    <input type="text" id="phone" required />
                </div>

                <div className={style.contact}>
                    <h4>SHIPPING ADDRESS</h4>
                    <label htmlFor="f_name">FIRST NAME</label>
                    <input type="text" id="f_name" required />

                    <label htmlFor="l_name">LAST NAME</label>
                    <input type="text" id="l_name" required />

                    <label htmlFor="address">ADDRESS</label>
                    <input type="text" id="address" required />

                    <label htmlFor="city">CITY</label>
                    <input type="text" id="city" required />

                    <label htmlFor="state">STATE</label>
                    <input type="text" id="state" required />

                    <label htmlFor="country">COUNTRY</label>
                    <input type="text" id="country" required />

                    <button type="submit">CONTINUE TO PAYMENT</button>
                </div>
                
            </form>

        </div>
    </section>
  )
}

export default page