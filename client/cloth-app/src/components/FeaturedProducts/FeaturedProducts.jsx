import React from "react";
import "../FeaturedProducts/FeaturedProducts.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../Loading/Loading.jsx";

const FeaturedProducts = ({ type }) => {

        const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/5775979/pexels-photo-5775979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/5775937/pexels-photo-5775937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Full Sleves Loose",
  //     isNew: true,
  //     oldPrice: 999,
  //     newPrice: 799,
  //   },

  //   {
  //     id: 3,
  //     img: "https://images.pexels.com/photos/5086003/pexels-photo-5086003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/5086002/pexels-photo-5086002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Full Shirts",
  //     isNew: false,
  //     oldPrice: 1200,
  //     newPrice: 1100,
  //   },

  //   {
  //     id: 4,
  //     img: "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/6311612/pexels-photo-6311612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Plain T-Shirts",
  //     isNew: true,
  //     oldPrice: 2000,
  //     newPrice: 1500,
  //   },
  // ];

  
 
  
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
          loading ? Loading : data.map((i) => (
                                  <Card item={i} key={i.id} />
                              ))
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;
