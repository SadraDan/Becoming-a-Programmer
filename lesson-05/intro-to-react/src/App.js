import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  var [count, setCount] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
         Count is: {count}
        </div>
      <button
        onClick={() => {
          count += 1;
          setCount(count);
        }}
      >
        Increase Count
      </button>
      </header>

    </div>
  );
}

export default App;
