import React from 'react';
import Logo from '../../components/logo/Logo';
import './register.css';
import { useState } from 'react';
import axios from '../../api/axios';

const Person = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [valid, setValid] = useState(true);

    const handleSubmit = async() => {
        try {
            const user = await axios.get(`people/check/${email}`)

        } catch (error) {
            setValid(false);
            console.log(error);
          }
    }
    

    return (
        <div className='person-register-page'>
          <div className='register-header flex padding'>
            <Logo />
          </div>
          <div className='register-title flex'>
              <h1>Make the most of your professional life</h1>
          </div>
          <div className='person-form-container flex'>
            <form className='register-form flex column'>
                <label className='email-input'>
                  <p className='label'>Email</p>
                  <input type="text" className='register-input' onChange={e => setEmail(e.target.value)} />
                  <p className={valid? 'display': 'email-error'}>This email is already taken</p>
                </label>
                <label>
                  <p className='label'>Password (6 or more characters)</p>
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

export default Person;
