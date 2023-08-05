import React from 'react'
import Card from '../Card/Card.jsx'
import "../List/List.scss"
const List = () => {

  const data = [
    {
        id : 9 ,
        title : "white skirt",
        img : "https://images.pexels.com/photos/1857375/pexels-photo-1857375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew : true ,
        oldPrice : 299,
        newPrice : 199,
    },

    {
        id : 10 ,
        title : "silver skirt",
        img :"https://images.pexels.com/photos/1007019/pexels-photo-1007019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew : true ,
        oldPrice : 399,
        newPrice : 299,
    },

    {
        id : 11 ,
        title : "brown skirt",
        img :"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew : true ,
        oldPrice : 399,
        newPrice : 299,
    },

    {
        id : 12 ,
        title : "plain skirt",
        img :"https://images.pexels.com/photos/1329808/pexels-photo-1329808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew : true ,
        oldPrice : 499,
        newPrice : 399,
    },

    {
        id : 13,
        title : "red skirt",
        img :"https://images.pexels.com/photos/2480450/pexels-photo-2480450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew : false ,
        oldPrice : 400,
        newPrice : 300,
    },

    {
        id : 14,
        title : "checks skirt",
        img :"https://images.pexels.com/photos/1548113/pexels-photo-1548113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew : false ,
        oldPrice : 500,
        newPrice : 300,
    },

    {
        id : 15,
        title : "yellow skirt",
        img :"https://images.pexels.com/photos/1868721/pexels-photo-1868721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew : false ,
        oldPrice : 600,
        newPrice : 499,
    },
  ];

  return (
    <div className='list'>{data?.map(item=>(
            <Card  item={item} key={item.id}/>
    ))}</div>
  )
}

export default List;