import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function End() {
  return (
    <div className='end'>
      <h1>YOUR ORDER HAS BEEN PLACED. CONTINUE SHOPPING!!</h1>
      <Link to="/" style={{color:'white'}}>Home Page</Link>
    </div>
  )
}

export default End