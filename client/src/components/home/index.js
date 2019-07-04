import React, {useState} from 'react';

function Home() {
  const [roomText, setRoomText] = useState("");
  const [idText, setIdText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
  };

  const onEnter = e => {
    e.preventDefault();
  }

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
        <form onSubmit={onEnter} >
          <label htmlFor='input'>Join Room</label>
          <input 
            type='text'
            id='input'
            placeholder='Enter Room Id Here ...'
            value={idText} 
            onChange={(e) => setIdText(e.target.value)} 
          />

          <button>Enter</button>
        </form>
      </section>

      <section className='form-container create-room'>
        <form onSubmit={onSubmit} >
          <label htmlFor='input'>Create Game Room</label>
          <input 
            type='text'
            id='input'
            placeholder='Enter Game Room ...'
            value={roomText} 
            onChange={(e) => setRoomText(e.target.value)} 
          />
          <button>Create Game</button>
        </form>
      </section>

    </section>
  )
}

export default Home;