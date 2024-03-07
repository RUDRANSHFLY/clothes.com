import React from 'react';
import { useState, useEffect } from 'react';
import "../Cart/Cart.scss";
import "../Cart/CartUtil.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { clearCart, getAllCartProducts, removeOneProduct } from './cart.js';







const Cart = () => {
  const [productListCart, setProductListCart] = useState([]);
  function isCartEmpty() {
    if (productListCart != null) {
      return productListCart.length === 0;
    } else {
      return true;
    }
  }



  useEffect(() => {
    const fetchCartProducts = async () => {
      if (window.localStorage.getItem('puzzel') === 'true') {
        const cart = await getAllCartProducts();
        setProductListCart(cart);
      }

    };
    fetchCartProducts();



    const handleStorageChange = (e) => {
      if (e.key === 'puzzel') {
        const newValue = e.newValue;
        window.localStorage.setItem('puzzel', newValue);
      }

    };

    // Add the event listener
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleDeletedItem = async (productId) => {
    await removeOneProduct(productId);
    const updatedCart = await getAllCartProducts();
    setProductListCart(updatedCart);
  }


  const totalPrice = () => {
    let total = 0;
    if (productListCart != null) {
      productListCart.forEach(i => {
        (total += i.quantity * i.attributes.price);
      });
    }
    return total.toFixed(2);
  }

  return (
    <div className='cart'>
      <h1>Products in your Cart</h1>
      {isCartEmpty() ? (
        <p>Your cart is empty</p>
      ) : (
        productListCart.map((item) => (
          <div className="item" key={item.id} >
            <img src={item.attributes.img.data.attributes.formats.thumbnail.url} alt="" />
            <div className="details">
              <h1>{item?.attributes.title.substring(0, 10)}</h1>
              <p>{item?.attributes.desc?.substring(0, 10)}</p>
              <div className="itemPrice">
                {item.quantity} * {item.attributes.price}
              </div>
            </div>
            <button id='deleteButton'>
              <FontAwesomeIcon icon={faTrashCan} className='delete' onClick={() => { handleDeletedItem(item.id) }} />
            </button>
          </div>

        ))
      )}
      {/* {productListCart.map((item) => (
        <div className="item" key={item.id} >
          <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.formats.thumbnail.url} alt="" />
          <div className="details">
            <h1>{item?.attributes.title.substring(0, 10)}</h1>
            <p>{item?.attributes.desc?.substring(0, 10)}</p>
            <div className="itemPrice">
              {item.quantity} * {item.attributes.price}
            </div>
          </div>
          <button id='deleteButton'>
            <FontAwesomeIcon icon={faTrashCan} className='delete' onClick={() => { handleDeletedItem(item.id) }} />
          </button>
        </div>

      ))} */}
      <div className="total">
        <span>SUBTOTAL</span>
        <span> $ {totalPrice()}</span>
      </div>
      <div className="but">
        <button>Checkout</button>
        <button id="reset" onClick={() => {
          clearCart();
          setProductListCart([]);
        }}>Reset Cart</button>

      </div>
    </div>
  )
}

export default Cart
