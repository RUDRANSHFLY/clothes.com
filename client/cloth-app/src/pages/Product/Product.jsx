import React from 'react';
import "../Product/Product.scss";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
}from '@fortawesome/free-regular-svg-icons'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";


const Product = () => {

  const [selectImg , setselectImg] = useState(0);
  const [quantity, setquantity] = useState(1);

  const data = [
    "https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1076598/pexels-photo-1076598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1070745/pexels-photo-1070745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/874142/pexels-photo-874142.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]


  return (
    <div className='product'>
        <div className="left">
            <div className="images">
              <img src={data[0]} alt="" srcset="" onClick={e=>setselectImg(0)} />
              <img src={data[1]} alt="" srcset="" onClick={e=>setselectImg(1)} />
              <img src={data[2]} alt="" srcset="" onClick={e=>setselectImg(2)} />
              <img src={data[3]} alt="" srcset="" onClick={e=>setselectImg(3)} />
              <img src={data[4]} alt="" srcset="" onClick={e=>setselectImg(4)} />
            </div>
            <div className="mainImg">
              <img src={data[selectImg]} alt="" srcset="" />
            </div>
        </div>
        <div className="right">
            <h1>Black Plan Tshirt</h1>
            <span className='price'>${(599 * quantity)}</span>
              <p>
                this is item description and this is demo for this prodcut to tesst it 
              </p>
            <div className="size">
              <h2>SELECT SIZE</h2> 
              <h3>Size Chart</h3>
            </div>
            <div className="sizes">
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XLL</button>
              </div>
              
              <div className='quantity'>
                <button onClick={()=>setquantity((prev) => (prev===1 ? 1 : prev - 1 ) )}>-</button>
                {quantity}
                <button onClick={()=>setquantity((prev) =>prev+1)}>+</button>
            </div>
            <div className="buttons">
              <button id='wishlist'>Add To WishList <FontAwesomeIcon icon={faHeart}/></button>
              <button id='cart'>Add To Cart <FontAwesomeIcon icon={faCartShopping}/></button>
            </div>
            <div className="buyButton">
                <button>Buy Now</button>
            </div>
            <div className="info">
              <span>Vendor : Polo</span>
              <span>Product Type : T-shirt</span>
              <span>Tag : Tshirt, Dc ,heroses</span>
              <hr />
              <div className="details">
                <span>Description</span>
                <hr />
                <span>Additional Information</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
        </div>
    </div>
  )
};

export default Product;
