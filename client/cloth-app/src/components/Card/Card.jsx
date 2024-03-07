import React from 'react';
import { Link } from 'react-router-dom';
import "../Card/Card.scss";
import "./CardUtil.scss";

const Card = ({ item }) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
        <div className="image">
          {
            item.attributes.isNew && <span>New Season</span>
          }
          <img src={item?.attributes?.img?.data?.attributes?.url} className="mainImg" />
          <img src={item?.attributes?.img2?.data?.attributes?.url} className="secImg" />
        </div>
        <h2>{item.attributes.title}</h2>
        <div className="prices">
          <h3>${item.attributes.price + 20}</h3>
          <h3>${item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
