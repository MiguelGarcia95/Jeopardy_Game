import React, {useState} from 'react';

function Home() {
  const [roomText, setRoomText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className='app'>
      <section className='form-container enter-room'>

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