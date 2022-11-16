import { MdOutlineSpaceDashboard }from 'react-icons/md'
import { BiUserPin, BiBriefcase } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'


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