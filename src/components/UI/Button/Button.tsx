import {IButtonProps} from './Button.d';
import classes from './Button.module.scss';

const Button = ({ onClick, text, type, color }: IButtonProps) => {
  return (
    <button className={`${classes.btn} ${classes[`btn__${color}`]}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;