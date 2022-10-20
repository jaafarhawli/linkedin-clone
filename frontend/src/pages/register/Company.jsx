import React from 'react';
import Logo from '../../components/logo/Logo';
import './register.css';
import { Route, Routes } from 'react-router-dom';


const Company = () => {

    return (
        <div className='person-register-page'>
          <div className='register-header flex padding'>
            <Logo />
          </div>
          <div className='register-title flex'>
              <h1>Make the most of your professional life</h1>
          </div>
          <Routes>
                <Route path='/' element={<CompanyEmail />} />
          </Routes>
        </div>
    );
}

export default Company;