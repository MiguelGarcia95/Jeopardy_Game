import React from 'react';
import socketIOClient from "socket.io-client";

class Home extends React.Component {
  state = {
    roomText: '',
    idText: '',
    socket: socketIOClient('http://localhost:5000/')
  }

  componentDidMount() {
    // const socket = socketIOClient('http://localhost:5000/');
    this.state.socket.emit('join', 'test', error => {
      if (error) console.log(error)
    });
    // socket.on('greeting', message => {
    //   console.log(message);
    // })
  }

  setIdText = e => this.setState({idText: e.target.value});
  setRoomText = e => this.setState({roomText: e.target.value});
  
  onSubmit = e => {
    e.preventDefault();
    const {socket, roomText} = this.state;
    socket.emit('createRoom', roomText, error => {
      if (error) {
        return console.log(error);
      } 

      console.log(roomText);
    });
  };

  onEnter = e => {
    e.preventDefault();
  }

  render() {
    const {roomText, idText} = this.state;
    
    return (
      <section className='app'>
        <section className='instructions'>
          <h2>Instructions</h2>
          <p>
            <span>If you are joining a game, enter the Room Id you were given on the left.</span>
            <br />
            <span>If you are making a new game, enter your room name on the right.</span>
          </p>
        </section>
  
        <section className='title'>
          <h1>Trivia Game</h1>
        </section>
  
        <section className='form-divider'>
          <p>Or</p>
        </section>
        
        <section className='form-container enter-room'>
          <form onSubmit={this.onEnter} >
            <label htmlFor='input'>Join Room</label>
            <input 
              type='text'
              id='input'
              placeholder='Enter Room Id Here ...'
              value={idText} 
              autoComplete='off'
              onChange={this.setIdText} 
            />
            <button>Enter</button>
          </form>
        </section>
  
        <section className='form-container create-room'>
          <form onSubmit={this.onSubmit} >
            <label htmlFor='input'>Create Game Room</label>
            <input 
              type='text'
              id='input'
              placeholder='Enter Game Room ...'
              value={roomText} 
              autoComplete='off'              
              onChange={this.setRoomText} 
            />
            <button>Create Game</button>
          </form>
        </section>
  
      </section>
    )
  }
}

export default Home;