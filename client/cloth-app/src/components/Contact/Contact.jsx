import React from 'react';
import {Link} from 'react-router-dom';
import "../Contact/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 
{ 
    faFacebook,
    faInstagram ,
    faYoutube,
    faAmazon,
    faSnapchat,
} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="left">
            <img src="https://images.pexels.com/photos/1183454/pexels-photo-1183454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
        </div>
        
        <div className="right">
            <div className="top">
                <h1>Contact Us</h1>
            </div>
            <div className="bottom">
                <div className="contactLeft">
                    <form action="" method="post">
                        <label htmlFor="name">
                            Name
                            <br />
                            <input type="text" name="name" id="username" /> 
                        </label>
                        <br />
                        <label htmlFor="email">
                            Email
                            <br />
                            <input type="email" name="email" id="useremail" /> 
                        </label>
                        <label htmlFor="msg">
                            Message
                            <input type="text" name="msg" id="msg" />
                        </label>
                        <br />
                        <button type="submit">Contact Us</button>
                    </form>
                </div>
                <div className="contactRight">
                    <div className="details">
                        <h2>Contact</h2>
                        <h3>clothes.com@gmail.com</h3>
                    </div>
                    <div className="address">
                        <h2>Based in</h2>
                        <h3>NYC City <br />United States</h3>
                    </div>
                    <div className="social">
                       <Link className='link'>
                            <h2><FontAwesomeIcon icon={faFacebook}/></h2>
                       </Link>
                       <Link className='link'>
                            <h2><FontAwesomeIcon icon={faInstagram}/></h2>
                       </Link>
                       <Link className='link'>
                            <h2><FontAwesomeIcon icon={faYoutube}/></h2>
                       </Link>
                       <Link className='link'>
                            <h2><FontAwesomeIcon icon={faAmazon}/></h2>
                       </Link>
                       <Link className='link'>
                            <h2><FontAwesomeIcon icon={faSnapchat}/></h2>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;
