import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from "react-toastify";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './layout/index'
import Login from './pages/auth/Login'
import PrivateRoutes from './utils/PrivateRoutes'
const App = () => {
const isAuth = useSelector(state => state?.authSlice?.user?.isAuth)
  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
        <Route path='/*' element={<Layout />} />
        </Route>
        <Route path='/login' element={isAuth ? <Layout/> : <Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App