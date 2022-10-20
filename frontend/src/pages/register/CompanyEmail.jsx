import React from 'react';
import './register.css';
import { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const CompanyEmail = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [valid, setValid] = useState(true);
    const [error, setError] = useState();

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      }

    const handleSubmit = async() => {
        if(!isValidEmail(email)) {
            setValid(false);
            setError("Invalid Email");
            return;
        }
        if(password.length<8) {
            setValid(false);
            setError("Invalid Password");
            return;
        }
        
        try {
            await axios.get(`people/check/${email}`);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            navigate('name');

        } catch (error) {
            setValid(false);
            setError(error.message)
            console.log(error);
          }
    }

  return (
    <div>
      <div className='person-form-container flex'>
            <form className='register-form flex column'>
                <label className='email-input'>
                  <p className='label'>Email</p>
                  <input type="text" className='register-input' onChange={e => setEmail(e.target.value)} />
                  <p className={valid? 'display': 'email-error'}>{error}</p>
                </label>
                <label>
                  <p className='label'>Password (8 or more characters)</p>
                  <input type="password" className='register-input' onChange={e => setPassword(e.target.value)} />
                </label>
                <p className='register-agreement'>By clicking Agree & Join, you agree to the LinkedIn <a href="https://www.linkedin.com/legal/user-agreement?trk=homepage-basic_intl-segments-join_join-form-user-agreement">User Agreement</a>, <a href="https://www.linkedin.com/legal/privacy-policy?trk=homepage-basic_intl-segments-join_join-form-privacy-policy">Privacy Policy</a>, and <a href="https://www.linkedin.com/legal/cookie-policy?trk=homepage-basic_intl-segments-join_join-form-cookie-policy">Cookie Policy</a>.</p>
                <button type="button" className='button register-submit' onClick={handleSubmit}>Agree & Join</button>
            </form>
          </div>
            <p className='help'>Looking to create a page for a business? <a href="https://www.linkedin.com/help/linkedin/answer/a543852?trk=registration-frontend_join-form-page-help-link">Get Help</a></p>
    </div>
  );
}

export default CompanyEmail;
