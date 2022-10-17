import React from 'react'

const PersonPicture = () => {
  return (
    <div>
        <div className='person-form-container flex'>
            <form className='register-form flex column'>
                <label className='email-input'>
                  <p className='label'>Upload Image</p>
                  <input  type="file" />
                </label>
                <button type="button" className='button register-submit' >Continue</button>
            </form>
          </div>
    </div>
  )
}

export default PersonPicture
