import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  quantity: number;
  title: any;
  image: any;
  size: string;
  amount: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{id: string; quantity: number; title: any; image: any; size: string; amount: number}>) => {
    const { id, quantity, title, image, size, amount } = action.payload
    console.log("State:", current(state))
    console.log("Action:", action.payload)

      const itemExists = state.find((cartItem) => cartItem.id === id && cartItem.size === size);
      if (itemExists) {
        itemExists.quantity += quantity;
      } else {
        state.push({ id, quantity, title, image, size, amount });
      }
      console.log("Add To Cart", addToCart)
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.size === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.size === action.payload);
      if (item) {
        if (item.quantity === 1) {
        item.quantity
        } else {
          item.quantity--;
        }
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.size === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});


export const selectCart = (state: { cart: CartItem[] }) => state.cart;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;