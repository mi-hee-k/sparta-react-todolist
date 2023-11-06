import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ProgressBar from './components/ProgressBar';
import ClearAll from './components/ClearAll';

function App() {
  const [validationMsg, setValidationMsg] = useState(false);
  const [todos, setTodos] = useState([]);
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  });

  const inputChangeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputs.title.length === 0 || inputs.body.length === 0) {
      setValidationMsg(true);
      return;
    }
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
    setValidationMsg(false);
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

  const deleteTodo = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }
  };

  const clearTodo = () => {
    setTodos([]);
  };

  const percentTodo = () => {
    const todosPercent = todos.filter((todo) => todo.isDone).length;
    return todos.length ? ((todosPercent / todos.length) * 100).toFixed(2) : 0;
  };

  return (
    <div className='App'>
      <h1>My Todo List</h1>
      <AddTodo
        inputs={inputs}
        submitHandler={submitHandler}
        inputChangeHandler={inputChangeHandler}
        validationMsg={validationMsg}
      />

      <ProgressBar percentTodo={percentTodo} />

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

      <ClearAll clearTodo={clearTodo} />
    </div>
  );
}

export default App;
