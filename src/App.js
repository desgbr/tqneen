import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout/index'
import Login from './pages/auth/Login'
import PrivateRoutes from './utils/PrivateRoutes'
const App = () => {
const {isAuth} = useSelector(state => state.authSlice)
  useEffect(()=>{
    console.log(isAuth);
  }, [isAuth])
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/*' element={<Layout />} />
        </Route>
        <Route path='/login' element={isAuth ? <Layout/> : <Login />} />
      </Routes>
    </Router>
  )
}

export default App