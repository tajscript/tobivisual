import style from "@/styles/menu.module.css";
import Link from "next/link";

const page = () => {
  return (
    <section className={style.menu}>
        <div className={style.wrapper}>
            <Link href="/"  className={style.link}>HOME</Link>
            <Link href="/about"  className={style.link}>ABOUT</Link>
            <Link href="/work"  className={style.link}>WORK</Link>
            <Link href="/digital-art"  className={style.link}>DIGITAL ART</Link>
            <Link href="/contact"  className={style.link}>CONTACT</Link>
            <Link href="/shop" className={style.button}>SHOP</Link>
        </div>
    </section>
  )
}

export default page