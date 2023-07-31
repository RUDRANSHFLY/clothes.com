import React from 'react';
import "../Products/Products.scss";
import { Link, useParams } from 'react-router-dom';
import List from '../../components/List/List';
import { useState } from 'react';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice,setMaxPrice] = useState(1000);
  const [sort,setSort] = useState(null);
  return (
    <div className='products'>
        <div className="left">
            <div className="filterItem">
                  <h2>Product Categories </h2>

                  <div className="inputItem">
                      <label htmlFor="tshirt">
                          T Shirt 
                          <input type="checkbox" name="tshirt" id="tshirt" />
                      </label>
                  </div>

                  <div className="inputItem">
                      <label htmlFor="shirt">
                          Shirt 
                          <input type="checkbox" name="shirt" id="shirt" />
                      </label>
                  </div>

                  <div className="inputItem">
                      <label htmlFor="coat">
                           Coat
                          <input type="checkbox" name="coat" id="coat" />
                      </label>
                  </div>

                  <div className="inputItem">
                      <label htmlFor="pents">
                           Pents
                          <input type="checkbox" name="pents" id="pents" />
                      </label>
                  </div>

                  <div className="inputItem">
                      <label htmlFor="trouser">
                          Trouser
                          <input type="checkbox" name="trouser" id="trouser" />
                      </label>
                  </div>

                  <div className="inputItem">
                      <label htmlFor="skirt">
                          Skirt
                          <input type="checkbox" name="skirt" id="skirt" />
                      </label>
                  </div>

                  <div className="inputItem">
                      <label htmlFor="saree">
                          Saree
                          <input type="checkbox" name="saree" id="saree" />
                      </label>
                  </div>

                  <div className="inputItem">
                      <label htmlFor="shorts">
                          Shorts
                          <input type="checkbox" name="shorts" id="shorts" />
                      </label>
                  </div>

                  <div className="inputItem">
                      <label htmlFor="shoes">
                          Shoes
                          <input type="checkbox" name="shoes" id="shoes" />
                      </label>
                  </div>



            </div>

            <div className="filterItem">
                  <h2>
                    Filter By Price
                  </h2>

                  <div className="inputItem">
                          <span>0</span>
                          <input type="range" name="price" id="pro_price" min={0} max={1000} onChange={(e) => {setMaxPrice(e.target.value)}} />
                          <span>{maxPrice}</span>
                  </div>

            </div>

            <div className="filterItem">
                  <h2>
                    Sort By Price
                  </h2>

                  <div className="inputItem">
                     <label htmlFor="asc">
                        Price ( Lowest First )
                        <input type="radio" name="price" id="asc" value="asc" onChange={e=>setSort("asc")}/>
                     </label>
                  </div>

                  <div className="inputItem">
                     <label htmlFor="dsc">
                       Price ( Highest First )
                       <input type="radio" name="price" id="dsc" value="dsc" onChange={e=>setSort("dsc")}/>
                     </label>
                  </div>

            </div>

        </div>

        <div className="right">
            <img className='catImg' src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort }/>
        </div>
    </div>
  )
};

export default Products;
