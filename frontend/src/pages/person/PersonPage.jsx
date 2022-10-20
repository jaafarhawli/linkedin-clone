import React from 'react';
import './person.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import PersonHome from './PersonHome';
import PersonJobs from './PersonJobs';

const PersonPage = () => {
  return (
    <div>
      <Navbar />
      <div className='body-container'>
        <Routes>
            <Route path='/' element={<PersonHome />} />
            <Route path='/jobs' element={<PersonJobs />} />
        </Routes>
      </div>
    </div>
  );
}

export default PersonPage;
