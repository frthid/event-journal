import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import classes from './CustomInput.module.scss';

interface ICustomInputProps {
  value: string;
  onClick: () => void;
}

const CustomInput: React.FC<ICustomInputProps> = ({ value, onClick }) => {
  return (
    <div className={classes.date}>
      <input className={classes.date__input} value={value} onClick={onClick} readOnly />
      <span className={classes.date__btn}>
        <FaCalendarAlt />
      </span>
    </div>
  );
}

export default CustomInput;
