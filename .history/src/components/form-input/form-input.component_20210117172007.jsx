import React from 'react';

import './form-input.component';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange}></input>
  </div>
);