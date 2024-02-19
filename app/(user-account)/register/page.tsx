"use client"

import style from "@/styles/account.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    f_name: '',
    l_name: '',
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
       const response = await axios.post("/api/auth/register", user);
       router.push("/login")

    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className={style.account}>
      <div><Toaster/></div>
        <div className={style.wrapper}>
            <h3>REGISTER</h3>
            <p>Please fill in your details to register</p>

            <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor="f_name">FIRST NAME</label>
                <input type="text" id="f_name" value={user.f_name} onChange={(e) => setUser({...user, f_name: e.target.value})} required />

                <label htmlFor="l_name">LAST NAME</label>
                <input type="text" id="l_name" value={user.l_name} onChange={(e) => setUser({...user, l_name: e.target.value})} required />

                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} required />

                <label htmlFor="pwd">PASSWORD</label>
                <input 
                type="password" 
                id="pwd" 
                value={user.password} 
                onChange={(e) => setUser({...user, password: e.target.value})} 
                required
                minLength={8} 
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_=\-+])[a-zA-Z\d!@#$%^&*_=\-+]+$" 
                title="Password must contain at least one lowercase and uppercase letter, one digit, and one special character"
                 />

                <button type="submit">REGISTER</button>
            </form>

            <p>Have an account? <span><Link href="/login">LOGIN</Link></span></p>
        </div>
    </div>
  )
}

export default page