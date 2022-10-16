import React from 'react';
import './button.css'

const Button = ({buttonText, classname}) => {
  return (
    <button className={`button ${classname}`}>
        {buttonText}
    </button>
  );
}

export default Button;
