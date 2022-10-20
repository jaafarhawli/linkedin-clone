import React from 'react';
import './register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyName = () => {

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [website, setWebsite] = useState();

    const handleSubmit = async() => {
        localStorage.setItem('name', name);
        localStorage.setItem('website', website);
       navigate('location');
    }

  return (
    <div>
      <div className='person-form-container flex'>
            <form className='register-form flex column'>
                <label className='email-input'>
                  <p className='label'>Name</p>
                  <input type="text" className='register-input' onChange={e => setName(e.target.value)} />
                </label>
                <label>
                  <p className='label'>Website</p>
                  <input type="text" className='register-input' onChange={e => setWebsite(e.target.value)} />
                </label>
                <button type="button" className='button register-submit' onClick={handleSubmit}>Continue</button>
            </form>
          </div>
    </div>
  );
}

export default CompanyName;
