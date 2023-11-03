import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>My Todo List</h1>
      <form>
        <label htmlFor='title'>제목</label>
        <input type='text' />
        <label htmlFor='body'>내용</label>
        <input type='text' />
        <button>추가</button>
      </form>

      <section>
        <h2>Working... 🔥</h2>
      </section>

      <section>
        <h2>Done..! 🎉</h2>
      </section>
    </div>
  );
}

export default App;
