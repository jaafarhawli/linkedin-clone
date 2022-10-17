import React from 'react';
import Logo from '../../components/logo/Logo';
import './register.css';
import { Route, Routes } from 'react-router-dom';
import PersonEmail from './PersonEmail';
import PersonName from './PersonName';
import PersonLocation from './PersonLocation';


const Person = () => {

    return (
        <div className='person-register-page'>
          <div className='register-header flex padding'>
            <Logo />
          </div>
          <div className='register-title flex'>
              <h1>Make the most of your professional life</h1>
          </div>
          <Routes>
                <Route path='/' element={<PersonEmail />} />
                <Route path='/name' element={<PersonName />} />
                <Route path='/name/location' element={<PersonLocation />} />
          </Routes>
        </div>
    );
}

export default Person;
