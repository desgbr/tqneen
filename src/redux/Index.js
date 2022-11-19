import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./lib/usersSlice";
import authSlice from "./lib/auth";

const store = configureStore({
  reducer: {usersSlice, authSlice}
})

export default store