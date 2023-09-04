import React from 'react';
import "../Profile/Profile.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-use-history';
import {
  faUser,
  faKey,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { getUserEmail, getUserId } from '../../hooks/userEntry';
import { setAuth } from '../SignIn/SignIn';

let userName;
let userEmail;
let userPassword;

export async function setData(username, userpassword) {
  userName = username;
  userPassword = userpassword;
  userEmail = await getUserEmail(username);
}

function getSignOut() {

  localStorage.removeItem('puzzel');
  localStorage.removeItem('username');
  localStorage.removeItem('password');
}




const Profile = () => {

  const history = useHistory();

  return (
    <div className='profile'>
      <div className="profilediv">
        <div className="divuser">
          <h1><FontAwesomeIcon id='user' icon={faUser}></FontAwesomeIcon></h1>
          <h1>UserName :- </h1>
          <h1 id='clothuser'>{userName}</h1>
        </div>
        <div className="divuser">
          <h1><FontAwesomeIcon id='user' icon={faEnvelope}></FontAwesomeIcon></h1>
          <h1>Email :- </h1>
          <h1 id='clothuser'>{userEmail}</h1>
        </div>
        <div className="divuser">
          <h1><FontAwesomeIcon id='user' icon={faKey}></FontAwesomeIcon></h1>
          <h1>Password :- </h1>
          <h1 id='clothuser'>{userPassword}</h1>
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