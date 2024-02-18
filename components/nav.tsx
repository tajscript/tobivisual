"use client"

import style from "@/styles/nav.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCart } from "@/state/slice/cart";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Cart from "./cart";

const nav = () => {
  const [cookieValue, setCookieValue] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const cart = useSelector(selectCart)
  const router = useRouter()
  const cartRef = useRef<HTMLDivElement>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
    setIsOverlayVisible(!isCartOpen);
  }

  const handleCartClose = () => {
    setIsCartOpen(false)
    setIsOverlayVisible(false);
  }

  const getItemsCount = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity, 0
    )
  }

  const handleLogout = async () => {
    try {
      await axios.get('api/auth/logout')
      setIsLoggedIn(false)
      router.push("/login")
    } catch (error) {
      console.log("Logout Error:", error)
    }
  }

  useEffect(() => {
    const fetchCookie = async () => {
      try {
        const response = await fetch('/api/cookie');
        const data = await response.json();
        console.log("Data:", data.token)
        setCookieValue(data.token);
        setIsLoggedIn(!!data.token)
      } catch (error) {
        console.error('Error fetching cookie:', error);
      }
    };
    fetchCookie();
  }, []);


  // Handle Click outside cart
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className={style.nav}>
      <div ref={cartRef}>
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      </div>
        {isOverlayVisible && (
          <div className="overlay" onClick={handleCartClose}></div>
        )}
        <div className={style.wrapper}>
            <Link href="/" className={style.link}>HOME</Link>
            <button className={style.button} onClick={handleCartClick}>CART <span>[{getItemsCount()}]</span></button>

            {isLoggedIn ? (
              <button onClick={handleLogout}>LOGOUT</button>
              ) : (
                <Link href="/login">LOGIN</Link>
            )}
        </div>
    </nav>
  )
}

export default nav