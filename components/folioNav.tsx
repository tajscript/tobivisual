import style from "@/styles/folionav.module.css";
import Link from "next/link";

const page: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <section className={style.menu}>
        <div className={`menu__wrapper ${isOpen ? 'open' : ''}`} >
            <button className={style.close} onClick={onClose}>Close</button>
            <div className={style.link__wrapper}>
            <Link href="/"  className={style.link}>HOME</Link>
            <Link href="/about"  className={style.link}>ABOUT</Link>
            <Link href="/work"  className={style.link}>WORK</Link>
            <Link href="/digital-art"  className={style.link}>DIGITAL ART</Link>
            <Link href="/contact"  className={style.link}>CONTACT</Link>
            <Link href="/shop" className={style.button}>SHOP</Link>
            </div>
        </div>
    </section>
  )
}

export default page