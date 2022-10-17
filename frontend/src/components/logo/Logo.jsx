import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import './logo.css';

const Logo = () => {
  return (
    <div className='logo flex'>
        <h1>Linked</h1>
        <BsLinkedin className='nav-logo' />
    </div>
  );
}

export default Logo;
