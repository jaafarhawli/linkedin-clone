import React from 'react';
import './register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';


const CompanyIndustry = () => {

    const navigate = useNavigate();

    const [industry, setIndustry] = useState();
    const [tagline, setTagline] = useState();
    const [size, setSize] = useState();

    

  return (
    <div>
      <div className='person-form-container flex'>
            <form className='register-form flex column'>
                <label className='email-input'>
                  <p className='label'>Industry</p>
                  <input type="text" className='register-input' onChange={e => setIndustry(e.target.value)} />
                </label>
                <label>
                    <p className='label'>Size</p>
                    <select className='select' onChange={e => setSize(e.target.value)}>
                        <option value="1">0-1 Employees</option>
                        <option value="10">2-10 Employees</option>
                        <option value="50">11-50 Employees</option>
                        <option value="200">51-200 Employees</option>
                    </select>
                </label>
                <label>
                  <p className='label'>Tagline</p>
                  <input type="text" className='register-input' onChange={e => setTagline(e.target.value)} />
                </label>
                <button type="button" className='button register-submit' onClick={handleSubmit}>Continue</button>
            </form>
          </div>
    </div>
  );
}

export default CompanyIndustry;
