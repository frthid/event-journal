import React from 'react';
import classes from './ValueProvider.module.scss'
import {IValueSection} from './ValueProvider.d';

const ValueProvider: React.FC<IValueSection> = ({ children, title = '', labelFor }) => {
  return (
    <section className={classes.section}>
      <label htmlFor={labelFor} className={classes.section__label}>
        {title}
      </label>
      {children}
    </section>
  );
};

export default ValueProvider;
