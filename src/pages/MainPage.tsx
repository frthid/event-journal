import Control from '../components/Control/Control';
import TodoList from '../components/TodoList/TodoList';
import { useState } from 'react';

const DEFAULT_TODO_LIST: ITodo[] = [];

interface ITodo {
  id: number;
  date: Date | null;
  importance: string;
  equipment: string;
  message: string;
  responsible: string;
  checked: boolean;
}

const MainPage = () => {
  const [todos, setTodo] = useState<ITodo[]>(DEFAULT_TODO_LIST);
  const [searchMessage, setSearchMessage] = useState<string>('');

  const addTodo = ({
    importance,
    equipment,
    message,
    responsible,
  }: Omit<ITodo, 'id' | 'checked' | 'date'>) => {
    setTodo([
      ...todos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        date: new Date(),
        importance,
        equipment,
        message,
        responsible,
        checked: false,
      },
    ]);
  };

  const checkTodo = (id: ITodo['id']) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: ITodo['id']) => {
    setTodo([...todos.filter(todo => todo.id !== id)])
  }

  return (
    <div>
      <Control addTodo={addTodo} searchMessage={searchMessage} setSearchMessage={setSearchMessage}/>
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} searchMessage={searchMessage} />
    </div>
  );
};

export default MainPage;
