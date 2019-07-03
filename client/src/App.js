import React from 'react';
import logo from './logo.svg';
import socketIOClient from "socket.io-client";
import './App.css';

class App extends React.Component{
  componentDidMount() {
    // socket.emit('join', {}, (error) => {
    //   if (error) {
    //     alert(error);
    //   }
    // });
    const socket = socketIOClient('http://localhost:5000/');
    socket.emit('join', 'test', error => {
      console.log(error)
    });

    socket.on('greeting', message => {
      console.log(message);
    })
  }

  render() {
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
        </header>
      </div>
    );
  }
}

export default App;
