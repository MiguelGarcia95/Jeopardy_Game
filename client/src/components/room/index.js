import React from 'react';
// import socketIOClient from "socket.io-client";

class Room extends React.Component{
  // componentDidMount() {
  //   const socket = socketIOClient('http://localhost:5000/');
  //   socket.emit('join', 'test', error => {
  //     if (error) console.log(error)
  //   });
  //   socket.on('greeting', message => {
  //     console.log(message);
  //   })
  // }

  render() {
    return (
      <h2>Room</h2>      
    )
  }
}


export default Room;