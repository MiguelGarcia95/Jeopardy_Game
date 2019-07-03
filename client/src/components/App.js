import React from 'react';
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
      </div>
    );
  }
}

export default App;
