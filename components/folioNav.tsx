import style from "@/styles/folionav.module.css";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";

const page: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [dropdown, setDropDown] = useState(false)

  const handleDropdown = () => {
    setDropDown(!dropdown)
  }

  return (
    <section className={style.menu}>
        <div className={`menu__wrapper ${isOpen ? 'open' : ''}`} >
            <button className={style.close} onClick={onClose}>Close</button>
            <div className={style.link__wrapper}>
            <Link href="/"  className={style.link}>HOME</Link>
            <Link href="/about"  className={style.link}>ABOUT</Link>
            <button className={`${style.link} ${style.portfolio}`} onClick={handleDropdown}>PORTFOLIO <span><GoChevronDown /></span></button>
            <div className={`dropdown ${dropdown ? 'open' : ''}`}>
              <div className={style.dropdown__wrapper}>
              <Link href="/work"  className={style.drop_link}>TRADITIONAL ART</Link>
              <Link href="/digital-art"  className={style.drop_link}>DIGITAL ART</Link>
              <Link href="/potrait"  className={style.drop_link}>POTRAITS</Link>
              <Link href="/commission"  className={style.drop_link}>COMMISSIONS</Link>
              <Link href="/study"  className={style.drop_link}>STUDIES</Link>
              <Link href="/cover"  className={style.drop_link}>COVERS</Link>
              </div>
            </div>
            <Link href="/contact"  className={style.link}>CONTACT</Link>
            <Link href="/shop" className={style.button}>SHOP</Link>
            </div>
        </div>
    </section>
  )
}

export default page