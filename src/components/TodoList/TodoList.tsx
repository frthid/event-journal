import TodoItem from './TodoItem/TodoItem';
import classes from './TodoList.module.scss';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

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
  searchMessage: string;
  checkTodo: (id: ITodo['id']) => void;
  deleteTodo: (id: ITodo['id']) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, checkTodo, deleteTodo, searchMessage }) => {
  const [itemsPerPage] = useState(9);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = todos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(todos.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % todos.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={classes.list}>
        {currentItems.length > 0 ? (
          <div className={classes.list__items}>
            {currentItems.map((todo, index) => {
              if (!searchMessage) {
                return (
                  <TodoItem key={index} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
                );
              } else if (todo.message.toLowerCase().includes(searchMessage.toLowerCase())) {
                return (
                  <TodoItem key={index} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
                );
              }
            })}
          </div>
        ) : (
          <div className={classes.list__default}>
            <h3>Журнал пустой, создайте событие!</h3>
          </div>
        )}
      </div>
      <ReactPaginate
        breakLabel='...'
        nextLabel={<GrFormNext />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={9}
        pageCount={pageCount}
        previousLabel={<GrFormPrevious />}
        renderOnZeroPageCount={null}
        containerClassName={classes.pagination}
        pageLinkClassName={classes.pagination__link}
        previousLinkClassName={classes.pagination__link}
        nextLinkClassName={classes.pagination__link}
        activeLinkClassName={classes.pagination__link__active}
      />
    </>
  );
};

export default TodoList;
