import React from "react";
import "../Products/Products.scss";
import { Link, useParams } from "react-router-dom";

import List from "../../components/List/List";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Products = () => {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);
    const [selectsubCat, setselectsubCat] = useState([]);
    
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );


  const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setselectsubCat(
            isChecked 
            ? [...selectsubCat,value]  
            : selectsubCat.filter((item) => item !== value))
  };

 
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories </h2>
            {data?.map((item) => (
            <div className="inputItem" key={item.id} onChange={handleChange}>
              <label htmlFor={item.id}>
                {item.attributes.title}
                <input type="checkbox" name={item.id} id={item.id} value={item.id}/>
              </label>
            </div>
          ))}

          <div className="filterItem">
            <h2>Filter By Price</h2>

            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                name="price"
                id="pro_price"
                min={0}
                max={1000}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
              />
              <span>{maxPrice}</span>
            </div>
          </div>

          <div className="filterItem">
            <h2>Sort By Price</h2>

            <div className="inputItem">
              <label htmlFor="asc">
                Price ( Lowest First )
                <input
                  type="radio"
                  name="price"
                  id="asc"
                  value="asc"
                  onChange={(e) => setSort("asc")}
                  
                />
              </label>
            </div>

            <div className="inputItem">
              <label htmlFor="dsc">
                Price ( Highest First )
                <input
                  type="radio"
                  name="price"
                  id="desc"
                  value="desc"
                  onChange={(e) => setSort("desc")}
                />
              </label>
            </div>

          
          </div>
        </div>

      </div>
      <div className="right">
          <img
            className="catImg"
            src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcset=""
          />
          <List catId={catId} maxPrice={maxPrice} sortPrice={sort} subCat={selectsubCat}/>
      </div>
    </div>
  );
};

export default Products;
