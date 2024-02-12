import style from "@/styles/account.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={style.account}>
        <div className={style.wrapper}>
            <h3>REGISTER</h3>
            <p>Please fill in your details to register</p>

            <form className={style.form}>
                <label htmlFor="f_name">FIRST NAME</label>
                <input type="text" id="f_name" required />

                <label htmlFor="l_name">LAST NAME</label>
                <input type="text" id="l_name" required />

                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" required />

                <label htmlFor="pwd">PASSWORD</label>
                <input type="password" id="pwd" required />

                <button type="submit">REGISTER</button>
            </form>

            <p>Have an account? <span><Link href="/">LOGIN</Link></span></p>
        </div>
    </div>
  )
}

export default page