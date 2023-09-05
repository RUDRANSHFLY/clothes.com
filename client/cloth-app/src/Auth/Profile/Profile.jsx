import React from 'react';
import { useEffect } from 'react';
import "../Profile/Profile.scss";
import "../Profile/ProfileUtil.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-use-history';
import {
  faUser,
  faKey,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';


function getcurrentUserName() {
  return window.localStorage.getItem('username');
}

function getcurrentUserEmail() {
  return window.localStorage.getItem('email');
}

function getcurrentUserPassword() {
  return window.localStorage.getItem('password');
}
function getSignOut() {

  localStorage.setItem('puzzel', false);
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  localStorage.removeItem('email');
}







const Profile = () => {

  const history = useHistory();

  useEffect(() => {
    const handleStorageChange = async (e) => {
      if (e.key === 'username') {
        const newValue = e.newValue;
        window.localStorage.setItem('username', newValue);
      }
      if (e.key === 'password') {
        const newValue = e.newValue;
        window.localStorage.setItem('password', newValue);
      }
      if (e.key === 'email') {
        const newValue = e.newValue;
        window.localStorage.setItem('email', newValue);
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
    <div className='profile'>
      <div className="profilediv">
        <div className="divuser">
          <h1><FontAwesomeIcon id='user' icon={faUser}></FontAwesomeIcon></h1>
          <br />
          <h1>UserName :- </h1>
          <h1 id='clothuser'>{getcurrentUserName()}</h1>
        </div>
        <div className="divuser">
          <h1><FontAwesomeIcon id='email' icon={faEnvelope}></FontAwesomeIcon></h1>
          <h1>Email :- </h1>
          <h1 id='clothuser'>{getcurrentUserEmail()}</h1>
        </div>
        <div className="divuser">
          <h1><FontAwesomeIcon id='password' icon={faKey}></FontAwesomeIcon></h1>
          <h1>Password :- </h1>
          <h1 id='clothuser'>{getcurrentUserPassword()}</h1>
        </div>
        <button onClick={() => {
          getSignOut();
          history.push("/auth/sign-in");
        }}>Sign-Out</button>
      </div>
    </div>
  )
}

export default Profile;