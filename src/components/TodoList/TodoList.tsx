import TodoItem from './TodoItem/TodoItem';
import classes from './TodoList.module.scss';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import TodoTable from './TodoTable/TodoTable';
import { ITodo } from '../../models/models';

interface ITodoListProps {
  todos: ITodo[];
  searchMessage: string;
  toggle: string;
  checkTodo: (id: ITodo['id']) => void;
  deleteTodo: (id: ITodo['id']) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  checkTodo,
  deleteTodo,
  searchMessage,
  toggle,
}) => {
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
      {toggle === 'table' && (
        <div className={classes.table}>
          {currentItems.length > 0 ? (
            <TodoTable
              currentItems={currentItems}
              searchMessage={searchMessage}
              checkTodo={checkTodo}
            />
          ) : (
            <div className={classes.default}>
              <h3>Журнал пустой, создайте событие!</h3>
            </div>
          )}
        </div>
      )}
      {toggle === 'card' && (
        <div className={classes.list}>
          {currentItems.length > 0 ? (
            <div className={classes.list__items}>
              {currentItems.map((todo, index) => {
                if (!searchMessage) {
                  return (
                    <TodoItem
                      key={index}
                      todo={todo}
                      checkTodo={checkTodo}
                      deleteTodo={deleteTodo}
                    />
                  );
                } else if (todo.message.toLowerCase().includes(searchMessage.toLowerCase())) {
                  return (
                    <TodoItem
                      key={index}
                      todo={todo}
                      checkTodo={checkTodo}
                      deleteTodo={deleteTodo}
                    />
                  );
                }
              })}
            </div>
          ) : (
            <div className={classes.default}>
              <h3>Журнал пустой, создайте событие!</h3>
            </div>
          )}
        </div>
      )}
      {currentItems.length >= itemsPerPage ? (
        <ReactPaginate
          breakLabel='...'
          nextLabel={<GrFormNext />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel={<GrFormPrevious />}
          renderOnZeroPageCount={null}
          containerClassName={classes.pagination}
          pageLinkClassName={classes.pagination__link}
          previousLinkClassName={classes.pagination__link}
          nextLinkClassName={classes.pagination__link}
          activeLinkClassName={classes.pagination__link__active}
        />
      ) : null}
    </>
  );
};

export default TodoList;
