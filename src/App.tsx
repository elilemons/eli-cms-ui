import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          You are using environment: {process.env.NODE_ENV}</p>
          <p>The API URL is: {process.env.REACT_APP_API_URL}</p>
          <p>The server URL is: {process.env.REACT_APP_PUBLIC_SERVER_URL}</p>

      </header>
    </div>
  );
}

export default App;
