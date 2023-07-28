import React from 'react'
import '../Footer/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div className='item'>
                <h1>Categories</h1>
                <span>Men</span>
                <span>Women</span>
                <span>Shoes</span>
                <span>Accesories</span>
                <span>New Arrivals</span>
            </div>
            <div className='item'>
                <h1>Links</h1>
                <span>FAQ</span>                    
                <span>Pages</span>                    
                <span>Stores</span>                    
                <span>Compare</span>
                <span>Cookies</span>                    
            </div>
            <div className='item'>
                <h1>About Us</h1>
                <span>
                    Welcome to our cloth selling website, where style meets comfort! We are passionate about providing you with the latest fashion trends and high-quality garments that elevate your wardrobe 
                </span>
            </div>
            <div className='item'>
                <h1>Contact</h1>
                <span>
                We would love to hear from you! If you have any questions, comments, or feedback regarding our exquisite collection of clothing, 
                </span>
            </div>
        </div>    
        <div className='bottom'>
          <div className='left'>
              <span className='logo'>CLOTHES.com</span>
              <span className='copyright'>
                  © Copyright 2025. All Right Reserved
              </span>
          </div>
          <div className='right'>
                <img src='/img/payment.png' alt='unable to load' />
          </div>
        </div>     
    </div>
  )
};

export default Footer;
