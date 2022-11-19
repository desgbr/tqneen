import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

const initialState = {
  isAuth: false,
   user: (Cookies.get('user') && JSON.parse(Cookies.get('user'))) || null
  }
const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    login:(state,action) =>{
      state.isAuth = true
    },
    logOut:(state,action) =>{
      state.isAuth = false
    },
  }
})

export const {login, logOut} = authSlice.actions
export default authSlice.reducer