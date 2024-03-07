import React from "react";
import "../FeaturedProducts/FeaturedProducts.scss";
import "./FeaturedProductsUtil.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../Loading/Loading.jsx";

const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);


  // console.log(data);


  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Discover a diverse range of clothing options, from chic dresses to
          versatile tops, cozy sweaters, trendy bottoms, and everything in
          between. Our Featured Products collection offers an array of styles,
          colors, wear.
        </p>
      </div>

      <div className="bottom">
        {
          loading ? <Loading /> : data.map((i) => (
            <Card item={i} key={i.id} />
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;
