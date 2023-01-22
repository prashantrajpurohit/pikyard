import React from 'react'
import {FaSistrix} from 'react-icons/fa'
import { Link } from 'react-router-dom'
 

import "./Navbar.css"
const Navbar = () => {
  return (
    <header>
<nav>
  <Link to='/'> <img  className='logo' src='https://pikyard.in/images/logo%20pikyard%203.png' alt=''/>
</Link>    
  <ul>

   <li>    <Link to='/boilerS'>   BOILERS SPARES </Link> </li>
      <li><Link  to='/boiler'> BOILERS  </Link></li>
      <li> <Link to='/grocery'> GROCERY </Link>  </li>
      <li> <Link to='/hardware'> HARDWARE</Link></li>
      <li><Link  to='/industrial'> INDUSTRIAL </Link>  </li>

    </ul>
    <div className='search-bar' >
      <input type='text' placeholder='Search..'/>
      <button><FaSistrix/></button>
      <div className='login'><Link to='/login'>  login</Link></div>
      <div className='cart'>cart</div>
      <div className='lang'>Language</div>
    </div>
  
</nav>

    </header>
      
  )
} 

export default Navbar
