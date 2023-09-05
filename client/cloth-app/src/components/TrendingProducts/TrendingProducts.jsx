import React from 'react'
import "../TrendingProducts/TrendingProducts.scss";
import "../TrendingProducts/TrendingProductsUtil.scss";
import Card from '../Card/Card.jsx';
import useFetch from '../../hooks/useFetch.js';
import Loading from '../Loading/Loading.jsx';
const TrendingProducts = ({ type }) => {





  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);



  return (
    <div className='trendingProducts'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          👕 Trending Products: Discover the Latest Fashion Must-Haves! 👖
        </p>
      </div>

      <div className="bottom">
        {loading ? <Loading /> : data.map(i => (
          <Card item={i} key={i.id} />
        ))
        }
      </div>
    </div>
  )
}

export default TrendingProducts