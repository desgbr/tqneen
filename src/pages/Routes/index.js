import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Lawyers from '../Lawyers'
import Clients from '../Clients'
import Cases from '../Cases'
import NotFound from '../404'




const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/lawyers' element={<Lawyers />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/cases' element={<Cases />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default index