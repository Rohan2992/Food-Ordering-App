import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, store) => {
      state.items.push(store.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
