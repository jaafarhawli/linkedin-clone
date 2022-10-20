import React from 'react';
import './person.css';

const PersonHome = () => {
  return (
    <div className='home-grid'>
      <div className='home-profile flex column'>
          <div className='home-banner-container'>
            <div className='home-banner'></div>
            <div className='home-profile-pic'></div>
          </div>
          <h1 className='home-name'>{localStorage.firstname} {localStorage.lastname}</h1>
          <p>{localStorage.headline}</p>
      </div>
    </div>
  );
}

export default PersonHome;
