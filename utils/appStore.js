import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartslice from "./cartSlice"; // Importing the cart slice reducer

const appStore = configureStore({
    reducer: {
        cart: cartslice // Importing the cart slice reducer
}});

export default appStore ;
