import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./lib/usersSlice";
import authSlice from "./lib/auth";
import products from "./lib/products";

const store = configureStore({
  reducer: {usersSlice, authSlice, products}
})

export default store