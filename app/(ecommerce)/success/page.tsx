import style from "@/styles/success.module.css";
import Image from "next/image";
import bg from "@/public/assets/girl.jpg";
import Link from "next/link";
import Nav from "@/components/nav";

const page = () => {
  return (
    <>
    <nav className="layout__nav">
      <Nav />
    </nav>
    <section className={style.success}>
        <div className={style.wrapper}>
            <h3>YOU'RE A GEM!</h3>
            <h3>YOUR PAYMENT WAS SUCCESSFUL</h3>
            <Link href="/shop" className={style.link}>[ <p>GO BACK TO SHOP</p> ]</Link>
        </div>
    </section>
    </>
  )
}

export default page