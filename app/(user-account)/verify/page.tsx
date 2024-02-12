import style from "@/styles/account.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className={style.account}>
        <div className={style.wrapper}>
            <h3>EMAIL VERIFICATION</h3>
            <p>We sent a code to your email, kindly check</p>

            <form className={style.form}>
                <label htmlFor="email">CODE</label>
                <input type="email" id="email" required />

                <button type="submit">VERIFY</button>
            </form>

            <p>You did not receive an email? <span><Link href="/">RESEND</Link></span></p>
        </div>
    </div>
  )
}

export default page