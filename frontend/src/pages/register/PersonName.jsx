import React from 'react';
import './register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonName = () => {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();

    const handleSubmit = async() => {
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
       navigate('location');
    }
    

    return (
        <div>
          <div className='person-form-container flex'>
            <form className='register-form flex column'>
                <label className='email-input'>
                  <p className='label'>First name</p>
                  <input type="text" className='register-input' onChange={e => setFirstname(e.target.value)} />
                </label>
                <label>
                  <p className='label'>Last name</p>
                  <input type="text" className='register-input' onChange={e => setLastname(e.target.value)} />
                </label>
                <button type="button" className='button register-submit' onClick={handleSubmit}>Continue</button>
            </form>
          </div>
        </div>
    );
}

export default PersonName;