import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleTodo, title, isDone }) => {
  const filteredTodos = isDone
    ? todos.filter((todo) => todo.isDone)
    : todos.filter((todo) => !todo.isDone);
  return (
    <section>
      <h2>{title}</h2>
      <div className='todo-group'>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
