import React from "react";
import { useEffect } from "react";
import "../Product/Product.scss";
import "../Product/ProductUtil.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch.js";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { getAddedtoCart } from "../../components/Cart/cart";



const Product = () => {

  const id = useParams().id;
  const [selectImg, setselectImg] = useState("img");
  const [quantity, setquantity] = useState(1);
  const [lockAuth, setLockAuth] = useState(false);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'puzzel') {
        const newValue = e.newValue;
        if (newValue === 'true') {
          window.localStorage.setItem('puzzel', true);
          setLockAuth(true);
        } else {
          window.localStorage.setItem('puzzel', false);
          setLockAuth(false);
        }

      }

    };

    // Add the event listener
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);




  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const img = data?.attributes?.img?.data?.attributes?.url;
  const img2 = data?.attributes?.img2?.data?.attributes?.url;
  const img3 = data?.attributes?.img3?.data?.attributes?.url;
  const img4 = data?.attributes?.img4?.data?.attributes?.url;
  const img5 = data?.attributes?.img5?.data?.attributes?.url;


  return (
    <div className="product">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={img}
                alt=""
                srcSet=""
                onClick={(e) => setselectImg("img")}
              />

              <img
                src={img2}
                alt=""
                srcSet=""
                onClick={(e) => setselectImg("img2")}
              />

              <img
                src={img3}
                alt=""
                srcSet=""
                onClick={(e) => setselectImg("img3")}
              />


              <img
                src={img4}
                alt=""
                srcSet=""
                onClick={(e) => setselectImg("img4")}
              />


              <img
                src={img5}
                alt=""
                srcSet=""
                onClick={(e) => setselectImg("img5")}
              />




            </div>
            <div className="mainImg">
              <img src={data?.attributes?.[selectImg]?.data?.attributes?.url} alt="" srcSet="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">$ {data?.attributes?.price * quantity}</span>
            <p>
              {
                data?.attributes?.desc
              }
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

            <div className="quantity">
              <button
                onClick={() =>
                  setquantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setquantity((prev) => prev + 1)}>+</button>
            </div>
            <div className="buttons">
              <button id="wishlist">
                Add To WishList <FontAwesomeIcon icon={faHeart} />
              </button>
              <button id="cart" onClick={
                () => {
                  const key = window.localStorage.getItem('puzzel');
                  if (key == 'true') {
                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Product Added to Cart',
                      showConfirmButton: true,
                    });
                    getAddedtoCart(data.id, quantity);
                  } else {
                    Swal.fire({
                      position: 'center',
                      icon: 'error',
                      title: 'First Sign-In',
                      showConfirmButton: true,
                    });
                  }
                }
              }>
                Add To Cart <FontAwesomeIcon icon={faCartShopping} />
              </button>
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
        </>
      )}
    </div>
  );
};

export default Product;
