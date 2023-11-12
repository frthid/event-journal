import React, { ChangeEvent } from 'react';
import classes from './Input.module.scss';

interface IInputProps {
  id: string;
  value: string;
  type: string;
  name: string;
  placeholder?: string; 
  onChange: (value: string) => void;
}

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
