import Control from '../components/Control/Control';
import TodoList from '../components/TodoList/TodoList';
import { useState } from 'react';

const DEFAULT_TODO_LIST = [
  {
    id: 1,
    date: null,
    importance: 'Низкая',
    equipment: 'Травмат',
    message: 'Помогите',
    responsible: 'Федосеев',
    checked: true,
  },
  {
    id: 2,
    date: null,
    importance: 'Высокая',
    equipment: 'Пила',
    message: 'Я мастер спорта',
    responsible: 'Рогов',
    checked: false,
  },
];

// const DEFAULT_TODO_LIST = [{}];

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
  console.log(todos);

  const addTodo = ({
    date,
    importance,
    equipment,
    message,
    responsible,
  }: Omit<ITodo, 'id' | 'checked'>) => {
    setTodo([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        date,
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
      <Control addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default MainPage;
