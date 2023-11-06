import React from 'react';

const AddTodo = ({
  inputs,
  submitHandler,
  inputChangeHandler,
  validationMsg,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div className='input-group'>
        <label htmlFor='title'>제목</label>
        <input
          type='text'
          name='title'
          placeholder='할 일의 제목을 입력하세요'
          value={inputs.title}
          onChange={inputChangeHandler}
        />
        <label htmlFor='body'>내용</label>
        <input
          type='text'
          name='body'
          placeholder='할 일의 내용을 입력하세요'
          value={inputs.body}
          onChange={inputChangeHandler}
        />
        <span className='error-msg'>
          {validationMsg ? '빈 칸을 채워주세요' : null}
        </span>
      </div>
      <button className='btn add-btn'>추가</button>
    </form>
  );
};

export default AddTodo;
