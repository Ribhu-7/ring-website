import React,{useState} from 'react'
import './Home.css'
import './media.css'
import { APIData } from './Data'
import { Link } from 'react-router-dom';

function Home() {
    const [ApiData] = useState(APIData);
  return (
    <div className='home'>
        <div className="feature">FEATURED</div>
        <div className="product">
        {
            ApiData.filter(item=>item.id<=3).map(item=>{
                return(
                <div className='productdiv pdhome'>
                    <img src={item.img} alt="cover" className='product-img-home'></img><br/><br/>
                    <h5 className='product-name'>{item.brand}</h5><br/>
                    <h6 className='product-name'>{item.name}</h6><br/>

                    <div className="buttons">
                    <Link className='btn btn-primary' to={{pathname:`/details/${item.id}`}}  >Product Details</Link> 
                    </div>
                </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Home