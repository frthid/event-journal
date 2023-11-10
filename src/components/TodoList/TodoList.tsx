import TodoItem from "./TodoItem/TodoItem";
import classes from './TodoList.module.scss';

interface ITodo {
  id: number;
  date: Date | null;
  importance: string;
  equipment: string;
  message: string;
  responsible: string;
  checked: boolean;
}


interface ITodoListProps {
  todos: ITodo[];
  checkTodo: (id: ITodo['id']) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, checkTodo }) => {
  return (
    <div className={classes.list}>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} checkTodo={checkTodo} />
      ))}
    </div>
  );
};

export default TodoList;