import classes from './Popup.module.scss';
import {IPopupProps} from './Popup.d';

const Popup = ({popupOpen, setPopupOpen, children}: IPopupProps) => {
  return (
    <div className={popupOpen ? `${classes.popup} ${classes.active}` : classes.popup} onClick={() => setPopupOpen(false)}>
      <div className={popupOpen ? `${classes.popup__content} ${classes.active}` : classes.popup__content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Popup
