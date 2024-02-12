import style from "@/styles/account.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={style.account}>
        <div className={style.wrapper}>
            <h3>WELCOME <span>{ "AYOMIDE"}!</span></h3>
            <Link href="/shop" className={style.link}>[ <p>GO TO SHOP</p> ]</Link>
        </div>
    </div>
  )
}

export default page