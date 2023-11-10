import React from 'react';
import classes from './ValueProvider.module.scss'

interface IValueSection {
  title?: string;
  labelFor: string;
  children: React.ReactNode;
}

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
