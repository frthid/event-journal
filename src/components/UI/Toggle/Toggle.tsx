import classes from './Toggle.module.scss';
import {IToggleProps} from './Toggle.d';

const Toggle = ({ onClick, text, type }: IToggleProps) => {
  return (
    <button className={classes.btn} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Toggle;