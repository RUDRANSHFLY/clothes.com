import React from 'react'
import "../SignIn/SignIn.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
        <div className='signin'>
        <div className="left">
            <div className='up'>
              <h2><FontAwesomeIcon icon={faPagelines} /> Cloth.com</h2>
            </div>
            <div className='down'>
              <h1>Welcome Back </h1>
              <h4>Welcome Back ! Please Enter your Details</h4>
            </div>
            <form action="" method="get">
              <label htmlFor="username">
                Username
                <br />
                <input type="text" name="username" id="username" />
              </label>
              <br />
              <label htmlFor="Password">
                Password
                <br />
                <input type="password" name="password" id="password" />
              </label>
              <br />
              <button type="submit">Sign-In</button>
            </form>
            <div className="alter">
              <h3>
                Not have an account ? <Link to={'/auth/sign-up/'}>
                  Sign-Up
                </Link>
              </h3>
            </div>
        </div>
        <div className="right">
          <img src="https://images.pexels.com/photos/9489771/pexels-photo-9489771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
        </div>

    </div>
    </div>
  )
}

export default SignIn;
