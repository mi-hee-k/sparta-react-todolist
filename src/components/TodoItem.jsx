import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
      <button onClick={() => toggleTodo(todo.id)}>
        {todo.isDone ? '취소' : '완료'}
      </button>
    </div>
  );
};

export default TodoItem;
