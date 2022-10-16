import React from 'react';
import './login.css';
import {BsLinkedin} from "react-icons/bs";
import Button from '../../components/button/Button';
import banner from '../../images/banner.png';
import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import jwt_decode from "jwt-decode";

const Login = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const form = {
        email: username,
        password: password
    };
    try {
        const data = await axios.post('auth/login', form);
        const token = data.data;
        const decoded = jwt_decode(token);
        console.log(decoded);
        // const token = data.data.authorisation.token;
        // if(token) {
        //     localStorage.setItem('token', token);
        //     localStorage.setItem('id', data.data.user._id);
        //     localStorage.setItem('name', data.data.user.name);
        //     localStorage.setItem('email', data.data.user.email);
        //     localStorage.setItem('type', data.data.user.type);
        //     setIsAuthenticated(true);
        //     if(data.data.user.type === 'admin') {
        //         setUserType('admin');
        //     }
        //     else if(data.data.user.type === 'instructor') {
        //         setUserType('instructor');
        //     }
        //     else {
        //         setUserType('student');
        //     }
        // }
    } catch (error) {
        console.log(error);
    }
  }

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
              <button type="button" className='button login-submit' onClick={handleSubmit}>Agree & Join</button>
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
