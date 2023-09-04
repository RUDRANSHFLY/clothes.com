import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faHeart
} from '@fortawesome/free-regular-svg-icons'
import {
    faInfo,
    faStore,
    faPhone,
    faHouse,
    faXmark,
    faBars,
    faCaretDown,
    faMagnifyingGlass,
    faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import "./NavbarUtil.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import { getAuth } from "../../Auth/SignIn/SignIn.jsx";


const auth = getAuth();
async function getProfile() {
    if (auth == false) {
        return alert("First Sign-In");
    }
    console.log(auth);
}

// function getPuzzle() {
//     return window.localStorage.getItem('puzzel')
// }

const Navbar = () => {
    const auth = getAuth();
    const [open, setopen] = useState(false);
    const [icon, seticon] = useState(false);
    const products = useSelector((state) => state.cart.products)
    const puzzel = auth;






    return (
        <>
            <div className='navbar'>
                <div className='wrapper'>
                    <div className='left'>
                        {
                            puzzel
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
                            <Link className='link' to='/products/4/'>Men</Link>
                        </div>
                        <div className='item'>
                            <Link className='link' to='/products/5/'>Women</Link>
                        </div>
                        <div className='item'>
                            <Link className='link' to='/products/3/'>Children</Link>
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
                            <Link className='link' to='/contact-us'>Contact</Link>
                        </div>
                        <div className='item'>
                            <Link className='link' to='/stores'>Stores</Link>
                        </div>
                        <div className='icons'>
                            <Link className='link' to='/profile'> <FontAwesomeIcon icon={faUser} /></Link>
                            <FontAwesomeIcon icon={faHeart} />
                            <div className='cartIcon'>
                                <FontAwesomeIcon icon={faCartShopping} onClick={() => setopen(!open)} />
                                <span className='span'>{products.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className='humberger-menu' onClick=
                        {
                            () => {

                                seticon(!icon);

                            }
                        }>
                        <button>
                            {
                                icon ? <FontAwesomeIcon icon={faXmark} />
                                    : <FontAwesomeIcon icon={faBars} />
                            }
                        </button>

                    </div>
                </div>
                {open && <Cart />}
            </div>
            <div id='hm' className={
                !icon ? 'resnav'
                    : 'resnew'
            }>

                <div className='new-right'>
                    <div className='item'>
                        <FontAwesomeIcon icon={faHouse} />
                        <Link onClick={() => { seticon(false) }} className='link' to='/'>Home</Link>
                    </div>
                    <div className='item'>
                        <FontAwesomeIcon icon={faInfo} />
                        <Link onClick={() => { seticon(false) }} className='link' to='/about-us'>About</Link>
                    </div>
                    <div className='item'>
                        <FontAwesomeIcon icon={faPhone} />
                        <Link onClick={() => { seticon(false) }} className='link' to='/contact-us'>Contact</Link>
                    </div>
                    <div className='item'>
                        <FontAwesomeIcon icon={faStore} />
                        <Link onClick={() => { seticon(false) }} className='link' to='/stores'>Stores</Link>
                    </div>
                    <div className='item'>
                        <FontAwesomeIcon icon={faUser} />
                        <Link onClick={() => {
                            seticon(false);
                            getProfile;
                        }} className='link' to='/profile'>Profile</Link>
                    </div>
                    <div className='item'>
                        <FontAwesomeIcon icon={faCartShopping} onClick={() => setopen(!open)} />
                        <Link onClick={() => { seticon(false) }} className='link' to='/cart'>Cart</Link>
                    </div>

                </div>
                <div className='new-left'>
                    {
                        puzzel
                            ? null
                            : (
                                <>
                                    <div className='item'>
                                        <Link onClick={() => { seticon(false) }} className='link' to='/auth/sign-up'>
                                            <button className='auth'>
                                                Sign-Up
                                            </button>
                                        </Link>
                                    </div>
                                    <div className='item'>
                                        <Link onClick={() => { seticon(false) }} className='link' to='/auth/sign-in'>
                                            <button className='auth'>
                                                Sign-In
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )
                    }

                </div>
                <div className='cat'>
                    <div className='item'>
                        <Link onClick={() => { seticon(false) }} className='link' to='/products/4/'>Men</Link>
                    </div>
                    <div className='item'>
                        <Link onClick={() => { seticon(false) }} className='link' to='/products/5/'>Women</Link>
                    </div>
                    <div className='item'>
                        <Link onClick={() => { seticon(false) }} className='link' to='/products/3/'>Children</Link>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Navbar;
