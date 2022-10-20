import React from 'react';
import './person.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import PersonHome from './PersonHome';

const PersonPage = () => {
  return (
    <div>
      <Navbar />
      <div className='body-container'>
        <Routes>
            <Route path='/' element={<PersonHome />} />
        </Routes>
      </div>
    </div>
  );
}

export default PersonPage;
