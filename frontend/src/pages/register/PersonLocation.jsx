import React from 'react';
import './register.css';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list'



const PersonLocation = () => {

    const navigate = useNavigate();

    const [location, setLocation] = useState();
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = location => {
        setLocation(location);
      }

    const handleSubmit = async() => {
        console.log(location.label);
        localStorage.setItem('location', location.label);
        navigate('picture');
    }
    

    return (
        <div>
          <div className='person-form-container flex'>
            <form className='register-form flex column'>
                <label className='email-input'>
                  <p className='label'>Location</p>
                  <Select  options={options} value={location} onChange={changeHandler} />
                </label>
                <button type="button" className='button register-submit' onClick={handleSubmit}>Continue</button>
            </form>
          </div>
        </div>
    );
}

export default PersonLocation;