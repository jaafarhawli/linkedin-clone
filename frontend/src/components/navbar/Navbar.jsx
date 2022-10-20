import React from 'react';
import './navbar.css';
import {BsLinkedin} from "react-icons/bs";
import {BiSearchAlt2} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import {IoMdNotifications} from 'react-icons/io';
import {NavLink} from 'react-router-dom';

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
          <NavLink to='/person' key={1}  className='nav-link' >
            <div className='nav-icons flex column' activeclassname='active'>
                <AiFillHome className='nav-icon' />
                <p className='navicon-label'>Home</p>
            </div>
          </NavLink>
          <NavLink to='jobs' key={2} className='nav-link'>
            <div className='nav-icons flex column' activeclassname='active'>
                <BsFillBriefcaseFill className='nav-icon' />
                <p className='navicon-label'>Jobs</p>
            </div>
          </NavLink>
          <NavLink to='notifications' key={3} className='nav-link' activeclassname='active'>
            <div className='nav-icons flex column'>
                <IoMdNotifications className='nav-icon' />
                <p className='navicon-label'>Notifications</p>
            </div>
          </NavLink>
          <NavLink to='profile' key={4} className='nav-link' activeclassname='active'>
            <div className='nav-icons flex column'>
                <div className='profile-container'></div>
                <p className='navicon-label'>Me</p>
            </div>
          </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
