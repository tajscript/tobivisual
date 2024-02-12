import style from "@/styles/account.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={style.account}>
        <div className={style.wrapper}>
            <h3>LOGIN</h3>
            <p>Don't have an account? <span><Link href="/register">CREATE ONE</Link></span></p>

            <form className={style.form}>
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" required />

                <label htmlFor="pwd">PASSWORD</label>
                <input type="password" id="pwd" required />

                <button type="submit">LOGIN</button>
            </form>

            <p>Forgot password? <span><Link href="/">RESET</Link></span></p>
        </div>
    </div>
  )
}

export default page