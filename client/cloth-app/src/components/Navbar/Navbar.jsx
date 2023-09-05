import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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
import Cart, { isCartEmpty } from '../Cart/Cart.jsx';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import { getAuth } from "../../Auth/SignIn/SignIn.jsx";
import { useHistory } from 'react-router-use-history';

function getPuzzle() {
    return window.localStorage.getItem('puzzel');
}



const Navbar = () => {


    const [open, setopen] = useState(false);
    const [icon, seticon] = useState(false);
    const products = useSelector((state) => state.cart.products)
    let puzzel = getPuzzle();
    if (puzzel == 'true') {
        puzzel = true;
    } else {
        puzzel = false;
    }


    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'puzzel') {
                // When the 'puzzel' key in localStorage changes, update the state
                const newValue = e.newValue;
                if (newValue === 'true') {
                    window.localStorage.setItem('puzzel', true);
                } else {
                    window.localStorage.setItem('puzzel', false);
                }
            }
        };

        // Add the event listener
        window.addEventListener('storage', handleStorageChange);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);




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
                            <Link className='link' onClick={() => {
                                if (window.localStorage.getItem('puzzel') == 'false') {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'warning',
                                        title: 'First Sign-In',
                                        showConfirmButton: true,
                                    })

                                } else {
                                    const newRoute = useHistory();
                                    newRoute.push("/profile");
                                }
                            }}> <FontAwesomeIcon icon={faUser} /></Link>
                            <FontAwesomeIcon icon={faHeart} />
                            <div className='cartIcon'>
                                <FontAwesomeIcon icon={faCartShopping} onClick={
                                    () => {
                                        if (window.localStorage.getItem('puzzel') == 'false') {
                                            Swal.fire({
                                                position: 'center',
                                                icon: 'warning',
                                                title: 'First Sign-In',
                                                showConfirmButton: true,
                                            })
                                        } else {
                                            setopen(!open)
                                        }
                                    }
                                } />
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

                            if (window.localStorage.getItem('puzzel') == 'false') {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'warning',
                                    title: 'First Sign-In',
                                    showConfirmButton: true,
                                })
                            } else {
                                setopen(!open)
                            }

                        }} className='link' >Profile</Link>
                    </div>
                    <div className='item'>
                        <FontAwesomeIcon icon={faCartShopping} onClick={() => setopen(!open)} />
                        <Link onClick={() => {
                            if (window.localStorage.getItem('puzzel') == 'false') {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'warning',
                                    title: 'First Sign-In',
                                    showConfirmButton: true,
                                })
                            } else {
                                seticon(false);
                                setopen(!open);
                            }
                        }} className='link' to='/cart'>Cart</Link>
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
