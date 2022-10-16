import React from 'react';
import './login.css';
import {BsLinkedin} from "react-icons/bs";
import Button from '../../components/button/Button';

const Login = () => {
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
    </div>
  );
}

export default Login;
