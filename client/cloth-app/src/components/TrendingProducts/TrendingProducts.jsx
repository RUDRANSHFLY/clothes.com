import React from 'react'
import "../TrendingProducts/TrendingProducts.scss";
import Card from '../Card/Card.jsx';
import { 
    useState,
    useEffect,
 } from 'react';
import axios from 'axios';
const TrendingProducts = ({type}) => {



    // const data = [
    //     {
    //         id: 5 ,
    //         img : "https://images.pexels.com/photos/8142251/pexels-photo-8142251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2 : "https://images.pexels.com/photos/8142261/pexels-photo-8142261.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //         title: "Children Wear",
    //         isNew: false,
    //         oldPrice: 700,
    //         newPrice: 400,
    //     },

    //     {
    //         id: 6 ,
    //         img : "https://images.pexels.com/photos/1661416/pexels-photo-1661416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2 : "https://images.pexels.com/photos/7255443/pexels-photo-7255443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Mens Suits",
    //         isNew: true,
    //         oldPrice: 900,
    //         newPrice: 700,
    //     },
        
    //     {
    //         id: 7 ,
    //         img : "https://images.pexels.com/photos/10080212/pexels-photo-10080212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2 : "https://images.pexels.com/photos/10080213/pexels-photo-10080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Women combo",
    //         isNew: false,
    //         oldPrice: 1299,
    //         newPrice: 1188,
    //     },

    //     {
    //         id: 8 ,
    //         img : "https://images.pexel  s.com/photos/17683998/pexels-photo-17683998/free-photo-of-young-elegant-woman-posing-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2 : "https://images.pexels.com/photos/17683996/pexels-photo-17683996/free-photo-of-young-elegant-woman-posing-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Adventorus",
    //         isNew: true,
    //         oldPrice: 2999,
    //         newPrice: 1999,
    //     }


        
    // ] 


    const [data, setdata] = useState([]);
  
    useEffect(() => {
          const fetchData = async ()=> {
              try {
                  const res = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*",{
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
    <div className='trendingProducts'>
        <div className="top">
                <h1>{type} Products</h1>
                <p>
                👕 Trending Products: Discover the Latest Fashion Must-Haves! 👖
                </p>
            </div>
            
            <div className="bottom">
                {data.map(i =>(
                    <Card item={i} key={i.id}/>
                ))} 
            </div>
    </div>
  )
}

export default TrendingProducts