import React from 'react';
import Slider from '../../components/Slider/Slider.jsx';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx';
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import Contact from '../../components/Contact/Contact.jsx';
const Home = () => {
  return (
    <div>
       <Slider/>
       <FeaturedProducts type='featured'/>
       <Categories/>
       <TrendingProducts type='Trending'/>
       <Contact/>
    </div>
  )
};

export default Home ;
