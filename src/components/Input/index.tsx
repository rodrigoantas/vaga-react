import React, {InputHTMLAttributes} from 'react';

import {InputContainer} from './styles'


const Input:React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {


  return (
    <InputContainer>
      <input {...props}> </input>
    </InputContainer>
  )
}

export default Input