import React from 'react'
import Card from '../Card/Card.jsx'
import useFetch from '../../hooks/useFetch.js'
import Loading from '../Loading/Loading.jsx'
import "../List/List.scss"


const List = ({ catId, maxPrice, sortPrice, subCat }) => {


  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id][$eq]=${catId}`

  // );

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}${sortPrice ? `&sort=price:${sortPrice}` : ' '}`
  );

  console.log(catId, maxPrice, sortPrice, subCat);

  return (
    <div className='list'>
      {loading
        ? <Loading />
        : data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
    </div>
  );
}

export default List;