import React from 'react'
import {Link } from "react-router-dom";
import './Navbar.css'
import './media.css'


function Navbar() {

  return (
    <div className="head-nav">
    <div className="heading">RING STORE</div>
    <div className='navbar'>
       <div className="nav-child">
        <Link to="/"><button className='btn btn-outline-primary' style={{color:'white'}}>Home</button></Link>
       </div>
       <div className="nav-child">
        <Link to="/shop"><button className='btn btn-outline-primary' style={{color:'white'}}>Shop</button></Link>
       </div>
       <div className="nav-child">
       <Link to="/cart"><button className='btn btn-outline-primary'  style={{color:'white'}}><i class="fa-solid fa-cart-arrow-down"></i>Cart</button></Link>
       </div>
       <div className="nav-child">
        <Link to="/checkout"><button className='btn btn-outline-primary' style={{color:'white'}}>Contact</button></Link>
       </div>
    </div>
    </div>
  )
}

export default Navbar