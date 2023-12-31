import { useState, useEffect } from 'react';
import Button from '../../UI/Button/Button';
import classes from './TodoItem.module.scss';
import { FaUserCircle } from 'react-icons/fa';
import { ITodo } from '../../../models/models';

interface ITodoItemProps {
  todo: ITodo;
  checkTodo: (id: ITodo['id']) => void;
  deleteTodo: (id: ITodo['id']) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo, checkTodo, deleteTodo }) => {
  const [isPress, setIsPress] = useState(false);
  const { id, date, equipment, importance, message, responsible, checked } = todo;
  const formattedDate = date ? date.toLocaleString() : 'Нет даты';

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteTodo(id);
  };

  const handleCheckedClick = () => {
    checkTodo(id)
  }

  const handleMouseEnter = () => {
    setIsPress(true);
  };

  const handleMouseLeave = () => {
    setIsPress(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPress && (e.key === ' ' || e.key === 'Space')) {
        checkTodo(id);
      }
    }; 

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPress, id, checkTodo]);

  return (
    <div
      className={`${classes.item} ${checked ? classes.checked : ''}`}
      onClick={handleCheckedClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classes.item__content}>
        <div className={classes.item__content__unit}>
          <strong>Статус:</strong>
          <em
            style={{
              textDecoration: checked ? 'line-through' : 'none',
              textDecorationThickness: checked ? '1px' : 'auto',
            }}
          >
            {checked ? 'Прочитано' : 'Не прочитано'}
          </em>
        </div>
        <div className={classes.item__content__unit}>
          <strong>Дата:</strong>
          <em>{formattedDate}</em>
        </div>
        <div className={classes.item__content__unit}>
          <strong>Важность:</strong>
          <em>{importance ? importance : 'Не отмеченно'}</em>
        </div>
        <div className={classes.item__content__unit}>
          <strong>Сообщение:</strong>
          <em>{message ? message : 'Сообщения нет'}</em>
        </div>
        <div className={classes.item__content__unit}>
          <strong>Оборудование:</strong>
          <em>{equipment ? equipment : 'Оборудования нет'}</em>
        </div>
        <div className={classes.item__content__unit}>
          <strong>Ответственный:</strong>
          <em>{responsible ? responsible : 'Ответсвенного нет'}</em>
        </div>
      </div>
      <div className={classes.item__action}>
        <FaUserCircle className={classes.item__action__icon} />
        <Button text='Удалить' type='button' color='delete' onClick={handleDeleteClick} />
      </div>
    </div>
  );
};

export default TodoItem;
