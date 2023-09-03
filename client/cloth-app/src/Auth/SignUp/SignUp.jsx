import React from 'react';
import "../SignUp/SignUp.scss";
import "../SignUp/SignUpUtil.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import auth from '../auth.js';
import { useState } from 'react';
import { useHistory } from 'react-router-use-history'
const SignUp = () => {


  const history = useHistory();

  const [data, setdata] = useState({
    username : '',
    email: '',
    password: '',
  });

  const inputHandle = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setdata({...data,[name]:value})
  }

  const handle = (e) => {
    auth(data);
    history.push("/auth/sign-in");
    e.preventDefault();
  }
  
  return (
    <div className='signup'>
        <div className="left">
            <div className='up'>
              <h2><FontAwesomeIcon icon={faPagelines} /> Cloth.com</h2>
            </div>
            <div className='down'>
              <h1>Create an account</h1>
              <h4>let's get started with your 30 day free trial</h4>
            </div>
            
            <form onSubmit={(e) => handle(e)} >
              <label htmlFor="username">
                Username
                <br />
                <input onChange={inputHandle} autocomplete='username'  type="text" value={data.username} name="username" id="username" />
              </label>
              <br />
              <label htmlFor="email">
                Email
                <br />
                <input value={data.email} autocomplete='email' onChange={inputHandle}  type="email" name="email" id="email" />
              </label>
              <br />
              <label  htmlFor="Password">
                Password
                <br />
                <input value={data.password} autocomplete="current-password" onChange={inputHandle}  type="password" name="password" id="password" />
              </label>
              <br />
              <button type="submit">Create account</button>
            </form>
            <div className="alter">
              <h3>
                Already have an account ? <br /><Link to={'/auth/sign-in/'}>
                Sign in
                </Link>
              </h3>
            </div>
        </div>
        <div className="right">
          <img src="https://images.pexels.com/photos/980145/pexels-photo-980145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
        </div>

    </div>
  )
}

export default SignUp