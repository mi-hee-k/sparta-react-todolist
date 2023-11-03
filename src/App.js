import { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  });

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '리액트1',
      body: '내용1',
      isDone: false,
    },
    {
      id: 2,
      title: '리액트2',
      body: '내용2',
      isDone: false,
    },
    {
      id: 3,
      title: '리액트3',
      body: '내용3',
      isDone: true,
    },
  ]);

  const inputChangeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='App'>
      <h1>My Todo List</h1>
      <form>
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

      <section>
        <h2>Working... 🔥</h2>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <button>삭제하기</button>
                <button>완료</button>
              </div>
            );
          }
        })}
      </section>

      <section>
        <h2>Done..! 🎉</h2>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <button>삭제하기</button>
                <button>완료</button>
              </div>
            );
          }
        })}
      </section>
    </div>
  );
}

export default App;
