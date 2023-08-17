import React from 'react'
import "../Cart/Cart.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from '../../redux/cartReducer.js';



const Cart = () => {
  
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
 
  const totalPrice = () => {
    let total = 0 ;
    products.forEach(i => {
        (total += i.quantity * i.price )
    });
    return total.toFixed(2);
  }
  return (
    <div className='cart'>
      <h1>Products in your Cart</h1>
        {products?.map(item => (
        <div className="item" key={item.id} >
          <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt="" />
          <div className="details">
            <h1>{item?.title}</h1>
            <p>{item?.desc?.substring(0,100)}</p>
            <div className="itemPrice">
              {item.quantity} * {item.price}
            </div>
          </div>
          <FontAwesomeIcon icon={faTrashCan} className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>

      ))}
      <div className="total">
          <span>SUBTOTAL</span>
          <span> $ {totalPrice()}</span>
      </div>
      <div className="but">
      <button>Checkout</button>
      <button id="reset" onClick={() => dispatch(resetCart()) }>Reset Cart</button>

      </div>
    </div>
  )
}

export default Cart
