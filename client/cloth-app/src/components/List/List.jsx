import React from 'react'
import Card from '../Card/Card.jsx'
import "../List/List.scss"
import { 
    useState,
    useEffect,
 } from 'react';
import axios from 'axios';
const List = ({catId}) => {
    const [data, setdata] = useState([]);
    
    useEffect(() => {
 
          const fetchData = async ()=> {
              try {
                  console.log(catId);
                  const res = await axios.get(process.env.REACT_APP_API_URL+`/products?populate=*&[filters] [categories] [id] [$eq] = ${catId}`,{
                     headers : {
                      authorization : "bearer "+process.env.REACT_APP_API_TOKEN,
                     },
                  });
                  console.log(res.data.data);
                 setdata(res.data.data);
              } catch (error) {
                  console.log(error);
              }
          }
          fetchData();    
    }, []);



  return (
    <div className='list'>{data?.map(item=>(
            <Card  item={item} key={item.id}/>
    ))}</div>
  )
}

export default List;