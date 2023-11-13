import React, { useState } from 'react';
import ValueProvider from '../ValueProvider/ValueProvider';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Dropdown from '../UI/Dropdown/Dropdown';
import classes from './TodoCreator.module.scss';
import { AddTodoArgs, DEFAULT_TODO, ITodo } from '../../models/models';

interface ITodoControl {
  addTodo: ({importance, equipment, message, responsible}: AddTodoArgs) => void;
}

const TodoCreator: React.FC<ITodoControl> = ({ addTodo }) => {
  const [todo, setTodo] = useState<ITodo>(DEFAULT_TODO);
  const {importance, equipment, message, responsible} = todo;

  const handleTodoChange = (name: keyof ITodo, value: string | Date | null) => {
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const onClick = () => {
    addTodo({
      importance: importance,
      equipment: equipment,
      message: message,
      responsible: responsible,
    })
    setTodo(DEFAULT_TODO)
  }

  return (
    <section className={classes.section}>
      <ValueProvider title='Важность' labelFor='importance'>
        <Dropdown
          value={importance}
          onChange={(value) => handleTodoChange('importance', value)}
        />
      </ValueProvider>
      <ValueProvider title='Оборудование' labelFor='equipment'>
        <Input
          type='text'
          id='equipment'
          value={equipment}
          name='equipment'
          placeholder='Введите оборудование'
          onChange={(value) => handleTodoChange('equipment', value)}
        />
      </ValueProvider>
      <ValueProvider title='Сообщение' labelFor='message'>
        <Input
          type='text'
          id='message'
          value={message}
          name='message'
          placeholder='Оставьте сообщение'
          onChange={(value) => handleTodoChange('message', value)}
        />
      </ValueProvider>
      <ValueProvider title='Ответственный' labelFor='responsible'>
        <Input
          type='text'
          id='responsible'
          value={responsible}
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
