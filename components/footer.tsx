import style from "@/styles/nav.module.css";
import Link from "next/link";

const footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.wrapper}>
            <div className={style.link}>©TOBI ADETIMEHIN</div>
            <div className={style.link}>MADE BY - <span><Link href="https://twitter.com/tajscript" target="_blank">TAJ</Link></span></div>
        </div>
    </footer>
  )
}

export default footer