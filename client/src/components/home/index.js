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

      <section className='form-container enter-room'>
        <form onSubmit={onEnter} >
          <input 
            type='text'
            placeholder='Enter Room Key'
            value={idText} 
            onChange={(e) => setIdText(e.target.value)} 
          />

          <input type='Enter' />
        </form>
      </section>

      <section className='form-container create-room'>
        <form onSubmit={onSubmit} >
          <input 
            type='text'
            placeholder='Game Room'
            value={roomText} 
            onChange={(e) => setRoomText(e.target.value)} 
          />

          <input type='submit' />
        </form>
      </section>
      
    </section>
  )
}

export default Home;