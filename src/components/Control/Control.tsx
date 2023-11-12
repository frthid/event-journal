import { useState } from 'react';
import Button from '../UI/Button/Button'
import classes from './Control.module.scss';
import Popup from '../Popup/Popup';
import TodoCreator from '../TodoCreator/TodoCreator';
// import Input from '../UI/Input/Input';

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
  addTodo: ({importance, equipment, message, responsible}: Omit<ITodo, 'id' | 'checked' | 'date'>) => void;
}

const Control: React.FC<ITodoControl> = ({addTodo}) => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false)

  const handleClick = () => {
    setPopupOpen(true)
  }

  return (
    <>
    <div className={classes.control}>
      {/* <Input /> */}
      <Popup popupOpen={popupOpen} setPopupOpen={setPopupOpen}>
        <TodoCreator addTodo={addTodo} />
      </Popup>
      <Button type='button' text='Создать событие'onClick={handleClick}/>
    </div>  
    </>
  )
}

export default Control