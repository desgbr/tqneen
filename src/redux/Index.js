import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./lib/usersSlice";

const store = configureStore({
  reducer: usersSlice
})

export default store