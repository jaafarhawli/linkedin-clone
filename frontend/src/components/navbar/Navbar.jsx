import React from 'react';
import './navbar.css';
import {BsLinkedin} from "react-icons/bs";
import {BiSearchAlt2} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import {IoMdNotifications} from 'react-icons/io';

const Navbar = () => {
  return (
    <div className='navbar flex'>
      <div className='search-flex flex' >
        <BsLinkedin className='nav-logo' />
        <div className='search-container' >
            <input type="text" placeholder='Search' className='search-bar' />
            <BiSearchAlt2 className='search-icon' />
        </div>
      </div>
      <div className='navicons-container flex'>
          <div className='nav-icons flex column'>
              <AiFillHome className='nav-icon' />
              <p className='navicon-label'>Home</p>
          </div>
          <div className='nav-icons flex column'>
              <BsFillBriefcaseFill className='nav-icon' />
              <p className='navicon-label'>Jobs</p>
          </div>
          <div className='nav-icons flex column'>
              <IoMdNotifications className='nav-icon' />
              <p className='navicon-label'>Notifications</p>
          </div>
          <div className='nav-icons flex column'>
              <div className='profile-container'></div>
              <p className='navicon-label'>Me</p>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
