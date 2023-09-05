import React from "react";
import "../Products/Products.scss";
import "../Products/ProductsUtil.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from "react-router-dom";
import List from "../../components/List/List";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { faFilter, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [okay, setOkay] = useState(0);
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
        ? [...selectsubCat, value]
        : selectsubCat.filter((item) => item !== value))
  };




  return (
    <div className="products">
      <div className={okay ? 'search' : 'offSearch'}>

        <h1>Filters & Sort</h1>

        <h2>Product Categories </h2>
        <div className="searchItem">
          <div className="serachByCategory">
            {data?.map((item) => (
              <div className="inputcheck" key={item.id} onChange={handleChange}>
                <label htmlFor={item.id}>
                  {item.attributes.title}
                </label>
                <input type="checkbox" name={item.id} id={item.id} value={item.id} />
              </div>
            ))}
          </div>
        </div>

        <div className="serachPrice">

          <h2>Filter By Price</h2>
          <div className="filterItem">

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
        </div>
        <h2>Sort By Price</h2>
        <div className="filterItem">

          <div className="inputItem">
            <label htmlFor="asc">
              Price ( Lowest First )
            </label>
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort("asc")}

            />
          </div>

          <div className="inputItem">
            <label htmlFor="dsc">
              Price ( Highest First )
            </label>
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => setSort("desc")}
            />
          </div>


        </div>

        <button onClick={() => { setOkay(0) }}>Okay</button>

      </div>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories </h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id} onChange={handleChange}>
              <label htmlFor={item.id}>
                {item.attributes.title}
                <input type="checkbox" name={item.id} id={item.id} value={item.id} />
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
      <div className={okay ? 'newright' : 'right'}>
        <img
          className="catImg"
          src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          srcSet=""
        />
        <List catId={catId} maxPrice={maxPrice} sortPrice={sort} subCat={selectsubCat} />
        <div className="bottomButton">
          <button onClick={() => { setOkay(1) }}><FontAwesomeIcon icon={faFilter} /> Filters & Sort <FontAwesomeIcon icon={faBarsStaggered} /></button>
        </div>
      </div>

    </div>
  );
};

export default Products;
