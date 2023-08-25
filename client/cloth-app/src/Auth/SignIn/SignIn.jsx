import React from 'react'
import { useState } from 'react';
import "../SignIn/SignIn.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import signauth from '../signauth.js';
import { useHistory } from 'react-router-use-history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 export function notify() {
  var n = getAuth();
  if(n){
    toast("Welcome");
  }else{
    toast("Wrong Password")
  }
}

let isAuth = false ; 
  function setAuth(auth) {
    isAuth = auth ;
  }

  export function getAuth() {
    return isAuth;
  }

const SignIn =  () => {


  const history = useHistory();
  const [auth, setauth] = useState(false);
 

  const [data, setdata] = useState({
    username : '',
    password: '',
  });


  const inputHandle = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setdata({...data,[name]:value})
  }

  async function handle(e){
      e.preventDefault();
      const r = await signauth(data);
        if(r == false){
          history.push("/auth/sign-up/");
        }else{
          history.push("/");
          setAuth(true);
        } 
   } 
  



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
            <form onSubmit={(e) => handle(e)}>
              <label htmlFor="username">
                Username
                <br />
                <input onChange={inputHandle} value={data.username} type="text" name="username" id="username" />
              </label>
              <br />
              <label htmlFor="Password">
                Password
                <br />
                <input onChange={inputHandle} value={data.password} type="password" name="password" id="password" />
              </label>
              <br />
              <button type="submit" onClick={notify()}>Sign-In</button>
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
