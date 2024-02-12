import style from "@/styles/success.module.css";
import Image from "next/image";
import bg from "@/public/assets/girl.jpg";
import Link from "next/link";

const page = () => {
  return (
    <section className={style.success}>
        <div className={style.wrapper}>
            <h3>YOU'RE A GEM!</h3>
            <h3>YOUR PAYMENT IS SUCCESSFUL</h3>
        </div>

        <div className={style.container}>
            <Image src={bg.src} alt="Product Image" width={300} height={300} className={style.image}></Image>

            <Link href="/shop" className={style.link}>[ <p>GO BACK TO SHOP</p> ]</Link>
        </div>
    </section>
  )
}

export default page