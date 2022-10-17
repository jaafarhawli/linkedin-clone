import React from 'react';
import Logo from '../../components/logo/Logo';
import './register.css';
import { Route, Routes } from 'react-router-dom';
import PersonEmail from './PersonEmail';
import PersonName from './PersonName';
import PersonLocation from './PersonLocation';
import PersonIndustry from './PersonIndustry';
import PersonPicture from './PersonPicture';


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
                <Route path='/name/location/picture' element={<PersonPicture />} />
                <Route path='/name/location/industry' element={<PersonIndustry />} />
          </Routes>
        </div>
    );
}

export default Person;
