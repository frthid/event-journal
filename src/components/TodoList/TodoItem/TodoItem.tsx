import Button from '../../UI/Button/Button';
import classes from './TodoItem.module.scss';
import { FaUserCircle } from 'react-icons/fa';

interface ITodo {
  id: number;
  date: Date | null;
  importance: string;
  equipment: string;
  message: string;
  responsible: string;
  checked: boolean;
}

interface ITodoItemProps {
  todo: ITodo;
  checkTodo: (id: ITodo['id']) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo, checkTodo }) => {
  const { date, equipment, importance, message, responsible, checked } = todo;
  const formattedDate = date ? date.toLocaleString() : 'Нет даты';

  return (
    <div className={classes.item} onClick={() => checkTodo(todo.id)}>
      <div className={classes.item__content}>
        <div className={classes.item__content__unit}>
          <strong>Статус:</strong>
          <em style={{ textDecoration: checked ? 'line-through' : 'none' }}>
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
        <Button text='Удалить' type='button' color='delete' />
      </div>
    </div>
  );
};

export default TodoItem;