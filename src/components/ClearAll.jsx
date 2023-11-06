import React from 'react';

const ClearAll = ({ clearTodo }) => {
  return (
    <div className='clear-btn-group'>
      <button className='btn clear-btn' onClick={clearTodo}>
        모두 지우기
      </button>
    </div>
  );
};

export default ClearAll;
