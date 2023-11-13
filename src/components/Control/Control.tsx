import { useState, Dispatch, SetStateAction } from 'react';
import Button from '../UI/Button/Button';
import classes from './Control.module.scss';
import Popup from '../Popup/Popup';
import TodoCreator from '../TodoCreator/TodoCreator';
import Input from '../UI/Input/Input';
// import _ from 'lodash';

interface ITodo {
  id: number;
  date: Date | null;
  importance: string;
  equipment: string;
  message: string;
  responsible: string;
  checked: boolean;
}

interface ITodoControl {
  addTodo: ({
    importance,
    equipment,
    message,
    responsible,
  }: Omit<ITodo, 'id' | 'checked' | 'date'>) => void;
  searchMessage: string;
  setSearchMessage: Dispatch<SetStateAction<string>>;
}

const Control: React.FC<ITodoControl> = ({ addTodo, searchMessage, setSearchMessage}) => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  const handleClick = () => {
    setPopupOpen(true);
  };

  // const handleDebouncedSearch = _.debounce((value) => {
  //   console.log('пошло добро', value)
  // }, 1000)

  const handleInputChange = (value: string) => {
    // handleDebouncedSearch(value)
    setSearchMessage(value)
  }

  return (
    <>
      <div className={classes.control}>
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
        <Button type='button' text='Создать событие' onClick={handleClick} />
      </div>
    </>
  );
};

export default Control;
