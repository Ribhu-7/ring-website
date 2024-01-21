import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { APIData } from './Data'
import {useCart} from "react-use-cart"
import { Link } from 'react-router-dom'
import './Home.css'
import './media.css'

function Details() {
  const {idx}=useParams();
  console.log(idx);
  const [ApiData] = useState(APIData);
  const { addItem }= useCart();

  return (
    <div>
      
      <div className="product">
        {
            ApiData.filter(item=>item.id==idx).map(item=>{
                return(
                <div className='productdiv prod'>
                    <img src={item.img} alt="cover" className='product-img-prod'></img><br/><br/>
                    <h5>Brand :  {item.brand}</h5><br/>
                    <h6>Name :  {item.name}</h6><br/>
                    <span className='description'>{item.description}</span>
                    <h5>Price : ${item.price}<del style={{color:"red"}}></del></h5><br/><br/>
                    <div className="buttons">
                    <Link to='/checkout'><button className='btn btn-primary' onClick={()=>{addItem(item)}}>Purchase</button></Link>
                    <Link to='/cart'><button className='btn btn-primary atc' onClick={()=>{addItem(item)}}>Add to Cart</button></Link>
                    </div>
                </div>
                )
            })
        }
        </div> 
    
    </div>
  )
}

export default Details