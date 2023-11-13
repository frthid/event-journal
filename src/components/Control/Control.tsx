import { useState, Dispatch, SetStateAction } from 'react';
import Button from '../UI/Button/Button';
import classes from './Control.module.scss';
import Popup from '../Popup/Popup';
import TodoCreator from '../TodoCreator/TodoCreator';
import Input from '../UI/Input/Input';
import Toggle from '../UI/Toggle/Toggle';
import { AddTodoArgs } from '../../models/models';

interface ITodoControl {
  addTodo: ({
    importance,
    equipment,
    message,
    responsible,
  }: AddTodoArgs) => void;
  searchMessage: string;
  setToggle: Dispatch<SetStateAction<string>>;
  setSearchMessage: Dispatch<SetStateAction<string>>;
  toggle: string;
}

const Control: React.FC<ITodoControl> = ({ addTodo, searchMessage, setSearchMessage, setToggle, toggle}) => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  const handlePopupClick = () => {
    setPopupOpen(true);
  };

  const handleToggleClick = () => {
    setToggle((prevToggle: string) => (prevToggle === 'card' ? 'table' : 'card'));
  }

  const handleInputChange = (value: string) => {
    setSearchMessage(value)
  }

  return (
    <>
      <div className={classes.control}>
        <Toggle type='button' text={toggle === 'card' ? 'Таблица' : 'Карточки'} onClick={handleToggleClick} />
        <Input
          type='text'
          id='search'
          value={searchMessage}
          name='search'
          placeholder='Поиск'
          onChange={handleInputChange}
        />
        <Popup popupOpen={popupOpen} setPopupOpen={setPopupOpen}>
          <TodoCreator addTodo={addTodo} />
        </Popup>
        <Button type='button' text='Создать событие' onClick={handlePopupClick} />
      </div>
    </>
  );
};

export default Control;
