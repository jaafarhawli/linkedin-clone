import React from 'react';
import './person.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import PersonHome from './PersonHome';
import PersonJobs from './PersonJobs';
import PersonJob from './PersonJob';

const PersonPage = () => {
  return (
    <div>
      <Navbar />
      <div className='body-container'>
        <Routes>
            <Route path='/' element={<PersonHome />} />
            <Route path='/jobs' element={<PersonJobs />} />
            <Route path='/jobs/job' element={<PersonJob />} />
        </Routes>
      </div>
    </div>
  );
}

export default PersonPage;
