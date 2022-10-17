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
        localStorage.setItem('token', token);
        localStorage.setItem('email', decoded.email);
        localStorage.setItem('type', decoded.userType);
        if(decoded.userType === 1) {
        try {
          const user = await axios.get(`people/person/id/${decoded.email}`, {
            headers: {
              Authorization: `bearer ${localStorage.token}`
            }
          });
          storeData(user.data);
        } catch (error) {
          console.log(error);
        }}
        else {
          try {
            const user = await axios.get(`companies/id/${decoded.email}`, {
              headers: {
                Authorization: `bearer ${localStorage.token}`
              }
            });
            storeCompanyData(user.data);
          } catch (error) {
            console.log(error);
        }}
    } catch (error) {
        console.log(error);
    }
  }

  const storeData = (data) => {
    localStorage.setItem("id", data._id);
    localStorage.setItem("firstname", data.firstname);
    localStorage.setItem("lastname", data.lastname);
    localStorage.setItem("industry", data.industry);
    localStorage.setItem("country", data.country);
    localStorage.setItem("selected_education", data.selected_education);
    localStorage.setItem("profile_url", data.profile_url);
    localStorage.setItem("banner_url", data.banner_url);
  }
  
  const storeCompanyData = (data) => {
    localStorage.setItem("id", data._id);
    localStorage.setItem("name", data.name);
    localStorage.setItem("logo_url", data.logo_url);
    localStorage.setItem("industry", data.industry);
    localStorage.setItem("size", data.size);
    localStorage.setItem("tagline", data.tagline);
    localStorage.setItem("url", data.url);
    localStorage.setItem("website", data.website);
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
