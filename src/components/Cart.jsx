import React from 'react'
import { useCart } from "react-use-cart"
import {Link } from "react-router-dom"
import './Home.css'
import './media.css'

const Cart = () => {
    const { 
        isEmpty,
        items,
        cartTotal,
        removeItem,
        emptyCart,
         } = useCart();
         if(isEmpty) return <h1 className='text-center' style={{color:'white'}}>Please add something</h1>
  return (
    <section className='py-4 container' style={{marginTop:"100px"}}>
    <div className='row justify-content-center'>
        <div className='col-12'>
            <table className='table table-light table-hover m-0;'>
                <tbody>
                {items.map((item,index)=>{
                    return(
                    <tr key={index}>
                      <td>
                        <img src={item.img} alt="product" style={{height:"15rem"}}/>
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>
                        <button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)} style={{backgroundColor:"blue"}}>Clear Item</button>
                      </td>
                    </tr>
                    )
                })}
                </tbody>
            </table>

        </div>
        <div className='col-auto ms-auto' style={{color:'white'}}>
              <h2>Total Price: $ {cartTotal}</h2>
        </div>
         <div className='col-auto'>
               <button className='btn btn-danger m-2' onClick={()=> emptyCart()} style={{backgroundColor:"purple"}}>Empty Cart</button>
               <Link to="/checkout"><button className='btn btn-primary' style={{backgroundColor:"purple"}}>Buy Item(s)</button></Link>
         </div>
    </div>
    </section>
  )
}

export default Cart