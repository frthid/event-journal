import React, { ChangeEvent } from 'react';
import classes from './Input.module.scss';
import {IInputProps} from './Input.d'

const Input: React.FC<IInputProps> = ({ type, id, value, name, placeholder, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={classes.input}
      type={type}
      id={id}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export default Input;
