import React, { useState } from 'react';
import ValueProvider from '../ValueProvider/ValueProvider';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Dropdown from '../UI/Dropdown/Dropdown';
import Datepicker from '../UI/DatePicker/Datepicker';
import classes from './TodoCreator.module.scss';

interface ITodo {
  id: number;
  date: Date | null;
  importance: string;
  equipment: string;
  message: string;
  responsible: string;
  checked: boolean;
}

const DEFAULT_TODO = {
  id: 1,
  date: null,
  importance: '',
  equipment: '',
  message: '',
  responsible: '',
  checked: false,
};

interface ITodoControl {
  addTodo: ({date, importance, equipment, message, responsible}: Omit<ITodo, 'id' | 'checked' >) => void;
}

const TodoCreator: React.FC<ITodoControl> = ({ addTodo }) => {
  const [todo, setTodo] = useState<ITodo>(DEFAULT_TODO);

  const handleTodoChange = (name: keyof ITodo, value: string | Date | null) => {
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const onClick = () => {
    addTodo({
      date: todo.date,
      importance: todo.importance,
      equipment: todo.equipment,
      message: todo.message,
      responsible: todo.responsible,
    })
    setTodo(DEFAULT_TODO)
  }

  return (
    <section className={classes.section}>
      <ValueProvider title='Дата' labelFor='date'>
        <Datepicker value={todo.date} onChange={(value) => handleTodoChange('date', value)} />
      </ValueProvider>
      <ValueProvider title='Важность' labelFor='importance'>
        <Dropdown
          value={todo.importance}
          onChange={(value) => handleTodoChange('importance', value)}
        />
      </ValueProvider>
      <ValueProvider title='Оборудование' labelFor='equipment'>
        <Input
          type='text'
          id='equipment'
          value={todo.equipment}
          name='equipment'
          placeholder='Введите оборудование'
          onChange={(value) => handleTodoChange('equipment', value)}
        />
      </ValueProvider>
      <ValueProvider title='Сообщение' labelFor='message'>
        <Input
          type='text'
          id='message'
          value={todo.message}
          name='message'
          placeholder='Оставьте сообщение'
          onChange={(value) => handleTodoChange('message', value)}
        />
      </ValueProvider>
      <ValueProvider title='Ответственный' labelFor='responsible'>
        <Input
          type='text'
          id='responsible'
          value={todo.responsible}
          name='responsible'
          placeholder='ФИО'
          onChange={(value) => handleTodoChange('responsible', value)}
        />
      </ValueProvider>
      <div className={classes.section__btn}>
        <Button
          type='button'
          text='Добавить'
          onClick={onClick}
        />
      </div>
    </section>
  );
};

export default TodoCreator;
