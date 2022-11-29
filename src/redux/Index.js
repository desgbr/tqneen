import { configureStore } from "@reduxjs/toolkit";
import users from "./lib/users";
import authSlice from "./lib/auth";
import products from "./lib/products";

const store = configureStore({
  reducer: {users, authSlice, products}
})

export default store