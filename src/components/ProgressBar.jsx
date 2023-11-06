import React from 'react';

const ProgressBar = ({ percentTodo }) => {
  const percent = percentTodo();
  return (
    <div className='progress-bar'>
      {percent >= 99.99 ? `축하합니다 👏` : `달성도 ${percent} %`}
      <div className='progress' style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
