import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state directly
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    }, 
    //originalState = ["pizza", "burger"]
    clearCart: (state) => {
        // console.log(state,"3");
        // console.log(current(state),"4");   
        // state= []; // This will not work as expected, it will not mutate the original state just a local copy
        // console.log(state,"2");
    //  state.items.length = 0;// state.items = []; // This is also valid // console.log(state.items,"1");
      return {items:[]}; // will return a new state[] and replace the original state ["pizza", "burger"]
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;