import { MdOutlineSpaceDashboard }from 'react-icons/md'
import { BiUserPin, BiBriefcase } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { RiGamepadLine } from 'react-icons/ri'
import { HiShoppingBag } from 'react-icons/hi'


export const sidebarLinks = [
  {
    id:1,
    name:'Dashboard',
    path:'/',
    icon: <MdOutlineSpaceDashboard/>
  },
  {
    id:2,
    name:'Lawyers',
    path:'/lawyers',
    icon: <BiUserPin />
  },
  {
    id:3,
    name:'Clients',
    path:'/clients',
    icon: <FiUsers/>
  },
  {
    id:4,
    name:'Cases',
    path:'/cases',
    icon: <BiBriefcase />
  },
  {
    id:5,
    name:'404',
    path:'/settings',
    icon: <MdOutlineSpaceDashboard/>
  },

]


// dashboard data
export const dashboardData = {
  cards:[
    {
      id:0,
      count:178,
      title:'Save products',
      icon: <FaHeart/>,
      color:'blue'
    },
    {
      id:1,
      count:20,
      title:'Stock products',
      icon: <RiGamepadLine />,
      color:'yellow'
    },
    {
      id:2,
      count:190,
      title:'Sales Products',
      icon: <HiShoppingBag />,
      color:'orange'
    },
    {
      id:3,
      count:12,
      title:'Job Application',
      icon: <BiBriefcase />,
      color:'purple'
    },
  ]
}