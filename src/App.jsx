import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Details from './components/Details'
import {Routes , Route} from "react-router-dom"
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart'
import Checkout from './components/Checkout'
import End from './components/End'
import './components/media.css'

function App() {

  return (
    <>
     <CartProvider>
     
     <Navbar/> 
    
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/shop' element={<Shop/>}/>
     <Route path='/details/:idx' element={<Details/>}/>  
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/checkout" element={<Checkout/>}/>
     <Route path="/end" element={<End/>}/>
    </Routes>      
    </CartProvider>
    </>
  )
}

export default App
