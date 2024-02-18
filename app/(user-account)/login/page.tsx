"use client"
import style from "@/styles/account.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const page = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {

      const response = await axios.post("/api/auth/login", user);
      toast.success("Login Successful")
      router.push("/shop")

    } catch (error: any) {
      toast.error(error.message)
    } 
    }
  
  return (
    <div className={style.account}>
      <div><Toaster/></div>
        <div className={style.wrapper}>
            <h3>LOGIN</h3>
            <p>Don't have an account? <span><Link href="/register">CREATE ONE</Link></span></p>

            <form className={style.form} onSubmit={handleLogin}>
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} required />

                <label htmlFor="pwd">PASSWORD</label>
                <input type="password" id="pwd" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} required />

                <button type="submit">LOGIN</button>
            </form>

            <p>Forgot password? <span><Link href="/">RESET</Link></span></p>
        </div>
    </div>
  )
}

export default page