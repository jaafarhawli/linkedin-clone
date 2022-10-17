import React from 'react';
import './register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonIndustry = () => {

    const navigate = useNavigate();

    const [industry, setIndustry] = useState();
    const [education, setEducation] = useState();
    const [startyear, setStartyear] = useState();
    const [endyear, setEndyear] = useState();

    const handleSubmit = async() => {
        localStorage.setItem('industry', industry);
        localStorage.setItem('education', education);
        localStorage.setItem('startyear', startyear);
        localStorage.setItem('endyear', endyear);
        navigate('/person');
    }

    const generateDates = () => {
        const arr = [];
      
        const startYear = 1980;
        const endYear = new Date().getFullYear();
      
        for (let i = endYear; i >= startYear; i--) {
          arr.push(<option key={i} value={i}>{i}</option>);
        }
      
        return arr;
      };
    

    return (
        <div>
          <div className='person-form-container flex'>
            <form className='register-form flex column'>
                <label className='email-input'>
                  <p className='label'>Industry</p>
                  <input type="text" className='register-input' onChange={e => setIndustry(e.target.value)} />
                </label>
                <label>
                  <p className='label'>Education</p>
                  <input type="text" className='register-input' onChange={e => setEducation(e.target.value)} />
                </label>
                <div className='select-container flex'>
                    <label>
                        <p className='label'>Start Year</p>
                        <select className='select' onChange={e => setStartyear(e.target.value)}>{generateDates()}</select>
                    </label>
                    <label>
                        <p className='label'>End Year</p>
                        <select className='select' onChange={e => setEndyear(e.target.value)}>
                            <option value="Present">Present</option>
                            {generateDates()}
                        </select>
                    </label>
                </div>
                <button type="button" className='button register-submit' onClick={handleSubmit}>Continue</button>
            </form>
          </div>
        </div>
    );
}

export default PersonIndustry;