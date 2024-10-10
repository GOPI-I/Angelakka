import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_light from '../../assets/search-w.png'
import search_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import { Link } from 'react-router-dom'




const Navbar = ({theme,setTheme}) => {
  const toogle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }




  return (
    <div className='navbar'>
      {/* <img src={theme == 'light' ? logo_light : logo_dark} alt='' className='logo'/> */} 
      <ul>
      <li><Link to="/home">Home</Link></li>
        <li><Link to="/tours">Tours</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search'/>
        <img src={theme == 'light' ?search_light : search_dark} alt=''/>


      </div>
      <img onClick={()=>{toogle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt='' className='toogle_icon'/>





    </div>
  )
}

export default Navbar