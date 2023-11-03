import React from 'react';

const AddTodo = ({ inputs, submitHandler, inputChangeHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='title'>제목</label>
      <input
        type='text'
        name='title'
        value={inputs.title}
        onChange={inputChangeHandler}
      />
      <label htmlFor='body'>내용</label>
      <input
        type='text'
        name='body'
        value={inputs.body}
        onChange={inputChangeHandler}
      />
      <button>추가</button>
    </form>
  );
};

export default AddTodo;
