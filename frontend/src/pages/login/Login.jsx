import React from 'react';
import './login.css';
import {BsLinkedin} from "react-icons/bs";
import Button from '../../components/button/Button';
import banner from './banner.png';
import { useState, useEffect } from 'react';

const Login = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  

  return (
    <div>
      <div className='navigation flex'>
        <div className='logo flex'>
          <h1>Linked</h1>
          <BsLinkedin className='nav-logo' />
        </div>
        <div className='nav-buttons flex'>
          <Button buttonText={"Join now"} classname={"join-btn"} />
          <Button buttonText={"Sign in"} classname={"signin-btn"} />
        </div>
      </div>
      <div className='login-body flex'>
        <div className='login-content'>
          <p>Join the biggest<br />professional community</p>
            <form className='login-form flex column'>
              <input type="email" className='login-input-email' placeholder='Email' onChange={e => setUserName(e.target.value)} />
              <input type="password" className='login-input-password' placeholder='Password (8+ characters)' onChange={e => setPassword(e.target.value)} />
              <p className='login-agreement'>By clicking Agree & Join, you agree to the LinkedIn <a href="https://www.linkedin.com/legal/user-agreement?trk=homepage-basic_intl-segments-join_join-form-user-agreement">User Agreement</a>, <a href="https://www.linkedin.com/legal/privacy-policy?trk=homepage-basic_intl-segments-join_join-form-privacy-policy">Privacy Policy</a>, and <a href="https://www.linkedin.com/legal/cookie-policy?trk=homepage-basic_intl-segments-join_join-form-cookie-policy">Cookie Policy</a>.</p>
              <button type="button" className='button login-submit'>Agree & Join</button>
            </form>
        </div>
        <div className='banner-container flex'>
          <img src={banner} alt="Banner" className="login-banner" />
        </div>
      </div>
    </div>
  );
}

export default Login;
