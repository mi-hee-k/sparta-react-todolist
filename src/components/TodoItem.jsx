import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className='todo-card'>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <button onClick={() => deleteTodo(todo.id)} className='btn delete-btn'>
        삭제하기
      </button>
      <button onClick={() => toggleTodo(todo.id)} className='btn toggle-btn'>
        {todo.isDone ? '취소' : '완료'}
      </button>
    </div>
  );
};

export default TodoItem;
