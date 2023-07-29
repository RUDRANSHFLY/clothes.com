import React from 'react';
import Slider from '../../components/Slider/Slider.jsx';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx';
const Home = () => {
  return (
    <div>
       <Slider/>
       <FeaturedProducts type='featured'/>
    </div>
  )
};

export default Home ;
