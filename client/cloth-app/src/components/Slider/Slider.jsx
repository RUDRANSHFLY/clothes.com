import React, { useState } from 'react'
import 
{ 
 useEffect
 } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import
{
    faArrowLeft,
    faArrowRight 
} from "@fortawesome/free-solid-svg-icons";
import "../Slider/Slider.scss";




const Slider = () => {


  const [currentSlide,SetCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/5019878/pexels-photo-5019878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/17208774/pexels-photo-17208774/free-photo-of-high-angle-shot-of-a-young-brunette-in-a-casual-summer-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/7945556/pexels-photo-7945556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5624276/pexels-photo-5624276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6616097/pexels-photo-6616097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17195399/pexels-photo-17195399/free-photo-of-a-woman-in-a-dress-sitting-on-the-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5483601/pexels-photo-5483601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/307006/pexels-photo-307006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6133623/pexels-photo-6133623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17299829/pexels-photo-17299829/free-photo-of-photo-of-a-woman-holding-a-baby-girl-wearing-a-pink-bow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4667543/pexels-photo-4667543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7872818/pexels-photo-7872818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17290214/pexels-photo-17290214/free-photo-of-brunette-in-long-summer-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9256867/pexels-photo-9256867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10130500/pexels-photo-10130500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6770026/pexels-photo-6770026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6076498/pexels-photo-6076498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17186084/pexels-photo-17186084/free-photo-of-pensive-young-woman-with-painted-face-standing-in-the-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide = () =>{
    SetCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }

  const nextSlide = () =>{
    SetCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1) );    
  }

  useEffect(() => {
    const slideTimer = setTimeout(nextSlide,5000);
    return () => {
      clearInterval(slideTimer)
    };
  }, [currentSlide]);
  


  return (
    <div className='slider' onMouseEnter={nextSlide}>
      <div className='container' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} />
            <img src={data[1]} />
            <img src={data[2]} />
            <img src={data[3]} />
            <img src={data[4]} />
            <img src={data[5]} />
            <img src={data[6]} />
            <img src={data[7]} />
            <img src={data[8]} />
            <img src={data[9]} />
            <img src={data[10]} />
            <img src={data[11]} />
            <img src={data[12]} />
            <img src={data[13]} />
            <img src={data[14]} />
            <img src={data[15]} />
            <img src={data[16]} />
            <img src={data[17]} />
            <img src={data[18]} />
            <img src={data[19]} />
      </div>
      <div className='icons'>
            <div className='icon'>
                <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide}/>
            </div>
            <div className='icon'>
                <FontAwesomeIcon icon={faArrowRight} onClick={nextSlide} />
            </div>
      </div>
    </div>
  )
};


export default Slider;
