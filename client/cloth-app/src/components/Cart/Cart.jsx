import React from 'react'
import "../Cart/Cart.scss"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";



const data = [
  {
    id : 9 ,
    title : "white skirt",
    desc : "hi this is desccription",
    img : "https://images.pexels.com/photos/1857375/pexels-photo-1857375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isNew : true ,
    oldPrice : 299,
    newPrice : 199,
},

{
    id : 10 ,
    title : "silver skirt",
    desc : "hi this is desccription",
    img :"https://images.pexels.com/photos/1007019/pexels-photo-1007019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isNew : true ,
    oldPrice : 399,
    newPrice : 299,
},


]


const Cart = () => {
  return (
    <div className='cart'>
      <h1>Products in your Cart</h1>
        {data?.map(item => (
        <div className="item" key={item.id} >
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0,100)}</p>
            <div className="itemPrice">
              1 * {item.newPrice}
            </div>
          </div>
          <FontAwesomeIcon icon={faTrashCan} className='delete'/>
        </div>

      ))}
      <div className="total">
          <span>SUBTOTAL</span>
          <span>$199</span>
      </div>
      <div className="but">
      <button>Checkout</button>
      <button id="reset">Reset Cart</button>

      </div>
    </div>
  )
}

export default Cart
