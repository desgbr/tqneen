import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { HiMenuAlt1 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/lib/auth'
import Cookies from 'js-cookie'

const Navbar = ({toggle, show}) => {
  const dispatch = useDispatch()
  const handleLogOut = () =>{
    Cookies.remove('user')
    dispatch(logOut())
  }
  return (
    <div className='nav-bar'>
      <div className="toggle-sidebar" onClick={toggle}>
        {show ? <MdClose/> : <HiMenuAlt1/>}
      </div>
      <div className="search">
        <input type="text" placeholder='Search...' />
        <span className="icon"><FaSearch /></span>
      </div>
      <div className="user-settings">
        <h5 className='m-0' onClick={handleLogOut}>Ahmed Gabr</h5>
        <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="user" />
      </div>
    </div>
  )
}

export default Navbar