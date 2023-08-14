import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faUser,
faHeart
} from '@fortawesome/free-regular-svg-icons'
import {
faCaretDown,
faMagnifyingGlass,
faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import {getAuth} from "../../Auth/SignIn/SignIn.jsx";



const Navbar = () => {
       
    const auth = getAuth();
    const [open, setopen] = useState(false);
    const products = useSelector((state) => state.cart.products)

   
 


    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    {
                        auth
                            ? null
                            : (
                                <>
                                    <div className='item'>
                                        <Link className='link' to='/auth/sign-up'>
                                            <button className='auth'>
                                                Sign-Up
                                            </button>
                                        </Link>
                                    </div>
                                    <div className='item'>
                                        <Link className='link' to='/auth/sign-in'>
                                            <button className='auth'>
                                                Sign-In
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )
                    }
                    <div className='item'>
                        <Link className='link' to='/products/3/'>Men</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/products/2/'>Women</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/products/1/'>Children</Link>
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
                        <Link className='link' to='/about-us'>About</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Stores</Link>
                    </div>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faHeart} />
                        <div className='cartIcon'>
                            <FontAwesomeIcon icon={faCartShopping} onClick={() => setopen(!open)} />
                            <span className='span'>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>

            {open && <Cart />}
        </div>
    )
};

export default Navbar;
