import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const App = () => {

  const [displayMessage, setDisplayMessage] = useState("")

  const getData = () => {
    axios.get("http://localhost:3000").then(response => {      
      const { data: { message } } = response
      setDisplayMessage(message)
    })
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { displayMessage }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
