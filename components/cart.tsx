import style from "@/styles/cart.module.css";
import bg from "@/public/assets/girl.jpg";
import { LiaTimesSolid } from "react-icons/lia";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { updateQuantity, decrementQuantity, incrementQuantity, removeFromCart, selectCart } from "@/state/slice/cart";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const cart: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const cartDetails = useSelector(selectCart)

    const getTotalPrice = () => {
        return cartDetails.reduce(
            (accumulator, item) => accumulator + item.quantity * item.amount, 0
        )
    }

    const handleCheckout = async () => {
        cartDetails.forEach(item => {
          dispatch(updateQuantity({
            id: item.id,
            size: item.size,
            quantity: item.quantity
          }))
        });
      
        router.push("/checkout");
      };

  return (
    <div className={style.cart}>
        <div className={`cart__wrapper ${isOpen ? 'open' : ''}`}>
        <div className={style.cart__color}></div>
        <div className={style.cart__nav}>
            <p>YOUR CART</p>
            <button className={style.cart__icon} onClick={onClose}>
                <LiaTimesSolid />
            </button>
        </div>
        {cartDetails.length === 0 ? (
            <p>Uh Oh! It's Empty Here</p> 
        ) : (
        <div className={style.cart__container}>
            <div className={style.container__cart}>
            {cartDetails.map((item) => (
            <div className={style.cart__checkout}>
                <div className={style.cart__review}>
                <div className={style.cart__images}>
                    <Image src={item.image} priority alt="Product Image" width={500} height={500} className={style.cart__image}></Image>
                </div>

                <div className={style.cart__details}>
                    <h3>{item.title}</h3>
                    <p>{item.size}</p>
                    <h4>₦{item.amount}</h4>

                    <div className={style.crement}>
                        <button onClick={() => dispatch(decrementQuantity({id: item.id, size: item.size}))}><FiMinus /></button>
                        <p>{item.quantity}</p>
                        <button onClick={() => dispatch(incrementQuantity({id: item.id, size: item.size}))}><FiPlus /></button>
                    </div>

                    <button className={style.remove__button} onClick={() => dispatch(removeFromCart({id: item.id, size: item.size}))}>
                        Remove
                    </button>
                </div>
                </div>
            </div>
            ))}
            </div>

            <footer className={style.checkout}>
                <div className={style.checkout__wrapper}>
                    <p>Subtotal:</p>
                    <h5>₦{getTotalPrice()}</h5>
                </div>

                <button className={style.checkout__button}
                onClick={handleCheckout}
                >
                    CHECKOUT
                </button>
            </footer>

        </div>
)}
</div>
</div>
  )
}

export default cart