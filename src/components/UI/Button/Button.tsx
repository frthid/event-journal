import {IButtonProps} from './Button.d';
import classes from './Button.module.scss';

const Button = ({ onClick, text, type, color }: IButtonProps) => {
  const className = `${classes.btn} ${classes[`btn__${color}`]}`

  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
//className={classes.btn}