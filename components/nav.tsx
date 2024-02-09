import style from "@/styles/nav.module.css";
import Link from "next/link";

const nav = () => {
  return (
    <nav className={style.nav}>
        <div className={style.wrapper}>
            <Link href="/" className={style.link}>HOME</Link>
            <button className={style.button}>CART <span>[10]</span></button>
            <Link href="/login" className={style.link}>LOGIN</Link>
        </div>
    </nav>
  )
}

export default nav