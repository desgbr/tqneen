import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './layout/index'
import Login from './pages/auth/Login'
import PrivateRoutes from './utils/PrivateRoutes'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/*' element={<Layout />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App