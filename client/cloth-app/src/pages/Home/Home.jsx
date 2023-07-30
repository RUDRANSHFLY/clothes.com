import React from 'react';
import Slider from '../../components/Slider/Slider.jsx';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx';
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts.jsx';
const Home = () => {
  return (
    <div>
       <Slider/>
       <FeaturedProducts type='featured'/>
       <TrendingProducts type='Trending'/>
    </div>
  )
};

export default Home ;
