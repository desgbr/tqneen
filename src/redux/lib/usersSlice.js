import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users:{},
  loading:false,
}
const usersSlice = createSlice({
  name:'users',
  initialState,
  reducers:{
    setUsers:(state, action) =>{
      state.users = action.payload
    }
  }
})
export const {setUsers} = usersSlice.actions
export default usersSlice.reducer