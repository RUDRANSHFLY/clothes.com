import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
{
    faUser,
    faHeart
} from '@fortawesome/free-regular-svg-icons'
import 
{ 
    faCaretDown,
    faMagnifyingGlass,
    faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import Cart from '../Cart/Cart';



const Navbar = () => {

  const [open, setopen] = useState(false);

  return (
    <div className='navbar'>
      <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                    <img src='/img/en.png'  alt='not visible'/>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>
                <div className='item'>
                    <span id='curr'> INR </span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className='item'>
                    <Link className='link' to='/products/1'>Men</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/products/2'>Women</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/products/3'>Children</Link>
                </div>
            </div>
            <div className='center'>
                <Link className='link' to='/'>CLOTHES.com</Link>
            </div>
            <div className='right'>
                <div className='item'>
                    <Link className='link' to='/'>Home</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/'>About</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/'>Contact</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/'>Stores</Link>
                </div>
                <div className='icons'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <FontAwesomeIcon icon={faUser}/>
                    <FontAwesomeIcon icon={faHeart}/>
                    <div className='cartIcon'>
                        <FontAwesomeIcon icon={faCartShopping} onClick={() => setopen(!open)}/>
                        <span className='span'>0</span>
                    </div>
                </div>
            </div>
      </div>
      {open && <Cart/>}
    </div>
  )
};

export default Navbar;
