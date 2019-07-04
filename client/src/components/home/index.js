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

      </section>

      <section className='form-divider'>
        <p>Or</p>
      </section>
      
      <section className='form-container enter-room'>
        <form onSubmit={onEnter} >
          <label htmlFor='input'>Enter Room Id</label>
          <input 
            type='text'
            id='input'
            placeholder='Enter Room Id'
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
            placeholder='Game Room'
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