"use client"

import style from "@/styles/checkout.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, clearCart } from "@/state/slice/cart";
import { useState } from "react";
import { PaystackButton } from 'react-paystack';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
const router = useRouter();
const dispatch = useDispatch();

const [details, setDetails] = useState({
        email: '',
        phone: '',
        f_name: '',
        l_name: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: ''
})

const cart = useSelector(selectCart)
const findItem = cart.find((item) => item)

const getTotalPrice = () => {
    return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.amount, 0
    )
}

    // Implementing Paystack
    const paystackConfig = {
        reference: (new Date()).getTime().toString(),
        email: details.email,
        amount: getTotalPrice() * 100,
        publicKey: 'pk_live_4cc1ebee2f1ce03e5f25edd4daee42e138d60f09',
        metadata: {
            custom_fields: [
                {
                    display_name: 'First Name',
                    variable_name: 'first_name',
                    value: details.f_name
                },
                {
                    display_name: 'Last Name',
                    variable_name: 'last_name',
                    value: details.l_name
                },
                {
                    display_name: 'Phone',
                    variable_name: 'phone',
                    value: details.phone
                },
                {
                    display_name: 'Email',
                    variable_name: 'email',
                    value: details.email
                },
                {
                    display_name: 'Address',
                    variable_name: 'address',
                    value: details.address
                },
                {
                    display_name: 'City',
                    variable_name: 'city',
                    value: details.city
                },
                {
                    display_name: 'State',
                    variable_name: 'state',
                    value: details.state
                },
                {
                    display_name: 'Country',
                    variable_name: 'country',
                    value: details.country
                },
                {
                    display_name: 'ZIP Code',
                    variable_name: 'zip_code',
                    value: details.zip
                }
            ]
        }
    }

    const onSuccess = () => {
        dispatch(clearCart())
        router.push("/success")
    }

    const onClose = () => {
        toast.error("We hate to see you go!")
    }

    const paystackButton = {
        ...paystackConfig,
        text: "CONTINUE TO PAYMENT",
        onSuccess: onSuccess,
        onClose: onClose
    }

   return (
    <section className={style.payment}>
        <div><Toaster /></div>
        <div className={style.wrapper}>
            <h3>CHECKOUT</h3>

            <div className={style.item__wrapper}>
            <div className={style.item__details}>
                <h4 className={style.h4}>ITEM</h4>
                <h4 className={style.hide}>TITLE</h4>
                <h4>QUANTITY</h4>
                <h4>PRICE</h4>
            </div>
            {cart.map((item) => (
                <div className={style.item__flex}>
                            <Image src={item.image} alt="Product Image" width={300} height={300} className={style.image}></Image>
                            <h3 className={style.hide}>{item.title}</h3>
                            <h3>{item.quantity}</h3>
                            <h3>₦{item.amount}</h3>
                        </div>
                    ))}

                    <div className={style.total}>
                        <h3>TOTAL: ₦{getTotalPrice()}</h3>
                    </div>
                </div>
                

            <h5>HAVE AN ACCOUNT? <span><Link href="/login">LOGIN</Link></span></h5>

            <form className={style.form}>
                <div className={style.contact}>
                    <div className={style.contact__wrapper}>
                    <h4>CONTACT INFO</h4>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" value={details.email} onChange={(e) => setDetails({...details, email: e.target.value})} required />
                    
                    <label htmlFor="phone">PHONE</label>
                    <input type="text" id="phone" value={details.phone} onChange={(e) => setDetails({...details, phone: e.target.value})} required />
                    </div>
                </div>

                <div className={style.contact}>
                    <div className={style.contact__wrapper}>
                    <h4>SHIPPING ADDRESS</h4>
                    <label htmlFor="f_name">FIRST NAME</label>
                    <input type="text" id="f_name" value={details.f_name} onChange={(e) => setDetails({...details, f_name: e.target.value})} required />

                    <label htmlFor="l_name">LAST NAME</label>
                    <input type="text" id="l_name" value={details.l_name} onChange={(e) => setDetails({...details, l_name: e.target.value})} required />

                    <label htmlFor="address">ADDRESS</label>
                    <input type="text" id="address" value={details.address} onChange={(e) => setDetails({...details, address: e.target.value})} required />

                    <label htmlFor="city">CITY</label>
                    <input type="text" id="city" value={details.city} onChange={(e) => setDetails({...details, city: e.target.value})} required />

                    <label htmlFor="state">STATE</label>
                    <input type="text" id="state" value={details.state} onChange={(e) => setDetails({...details, state: e.target.value})} required />

                    <label htmlFor="country">COUNTRY</label>
                    <select name="country" id="country" onChange={(e) => setDetails({...details, country: e.target.value})}>
                        <option defaultValue="country">Select a country</option>
                        <option value="nigeria">Nigeria</option>
                    </select>

                    <label htmlFor="zip">ZIP CODE</label>
                    <input type="text" id="zip" value={details.zip} onChange={(e) => setDetails({...details, zip: e.target.value})} />
                    </div>
                </div>

            </form>
            <PaystackButton {...paystackButton} className={style.paystack__button} />

        </div>
    </section>
  )
}

export default page