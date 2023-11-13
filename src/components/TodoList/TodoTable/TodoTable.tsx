import React from 'react';
import classes from './TodoTable.module.scss';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

interface ITodo {
  id: number;
  date: Date | null;
  importance: string;
  equipment: string;
  message: string;
  responsible: string;
  checked: boolean;
}


interface ITodoTableProps {
  currentItems: ITodo[];
  searchMessage: string;
  checkTodo: (id: ITodo['id']) => void;
}

const TodoTable: React.FC<ITodoTableProps> = ({currentItems, searchMessage, checkTodo}) => {

  return (
    <table className={classes.table}>
    <thead>
      <tr>
        <th>Статус</th>
        <th>Дата</th>
        <th>Важность</th>
        <th>Оборудование</th>
        <th>Сообщение</th>
        <th>Ответственный</th>
      </tr>
    </thead>
    {currentItems.map((todo, index) => {
      const formattedDate = todo.date ? todo.date.toLocaleString() : 'Нет даты';
      if (!searchMessage) {
        return (
          <tbody key={index}>
            <tr onClick={() => checkTodo(todo.id)}>
              <td>{todo.checked ? <GrCheckboxSelected /> : <GrCheckbox/>}</td>
              <td>{formattedDate}</td>
              <td>{todo.importance}</td>
              <td>{todo.equipment}</td>
              <td>{todo.message}</td>
              <td>{todo.responsible}</td>
            </tr>
          </tbody>
        );
      } else if (todo.message.toLowerCase().includes(searchMessage.toLowerCase())) {
        return (
          <tbody key={index}>
            <tr>
              <td>{todo.checked}</td>
              <td>{formattedDate}</td>
              <td>{todo.equipment}</td>
              <td>{todo.importance}</td>
              <td>{todo.message}</td>
              <td>{todo.responsible}</td>
            </tr>
          </tbody>
        );
      }
    })}
  </table>
  );
};

export default TodoTable;
