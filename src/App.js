import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  });

  const [todos, setTodos] = useState([]);

  const inputChangeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: inputs.title,
      body: inputs.body,
      isDone: false,
    };
    setTodos([newTodo, ...todos]);
    setInputs({
      title: '',
      body: '',
    });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  };

  return (
    <div className='App'>
      <h1>My Todo List</h1>
      <AddTodo
        inputs={inputs}
        submitHandler={submitHandler}
        inputChangeHandler={inputChangeHandler}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        title='Working... 🔥'
        isDone={false}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        title='Done...! 🎉'
        isDone={true}
      />
    </div>
  );
}

export default App;
