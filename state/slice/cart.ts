import { createAction, createSlice, current, PayloadAction } from '@reduxjs/toolkit';

export const updateQuantity = createAction<{ id: string; size: string; quantity: number }>(
    'cart/updateQuantity'
  );

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

      const itemExists = state.find((cartItem) => cartItem.id === id && cartItem.size === size);
      if (itemExists) {
        itemExists.quantity += quantity;
      } else {
        state.push({ id, quantity, title, image, size, amount });
      }
    },

    incrementQuantity: (state, action: PayloadAction<{ id: string; size: string; }>) => {
        const { id, size } = action.payload;
        const item = state.find((cartItem) => cartItem.id === id && cartItem.size === size);
        if (item) {
            item.quantity++;
        }
    },

    decrementQuantity: (state, action: PayloadAction<{ id: string; size: string; }>) => {
    const { id, size } = action.payload;
      const item = state.find((cartItem) => cartItem.id === id && cartItem.size === size);
      if (item) {
        if (item.quantity === 1) {
        } else {
          item.quantity--;
        }
      }
    },

    removeFromCart: (state, action: PayloadAction<{ id: string; size: string; }>) => {
        const { id, size } = action.payload;
      const index = state.findIndex((cartItem) => cartItem.id === id && cartItem.size === size);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    
    clearCart: (state ) => {
      state.length = 0;
    },
  },

  extraReducers: (builder) => {
      builder.addCase(updateQuantity, (state, action) => {
        const { id, size, quantity } = action.payload;
        const item = state.find((cartItem) => cartItem.id === id && cartItem.size === size)
        if (item) {
            item.quantity = quantity;
        }
      })
  },
});


export const selectCart = (state: { cart: CartItem[] }) => state.cart;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;