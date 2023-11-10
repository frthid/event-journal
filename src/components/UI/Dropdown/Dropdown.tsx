import React, { useState } from 'react';
import classes from './Dropdown.module.scss';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

interface IDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({ value, onChange }) => {
  const categories = ['Низкая', 'Высокая', 'Критическая'];
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdown__btn} onClick={() => setIsActive(!isActive)}>
        <span>{value}</span>
        {!isActive ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </div>
      {isActive && (
        <div className={classes.dropdown__content}>
          {categories.map((categori, index) => (
            <div
              key={index}
              className={classes.dropdown__content__item}
              onClick={() => {
                onChange(categori);
                setIsActive(false);
              }}
            >
              {categori}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
