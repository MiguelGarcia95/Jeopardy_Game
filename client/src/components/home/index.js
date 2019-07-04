import React, {useState} from 'react';

function Index() {
  const [roomText, setRoomText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className='app'>
      <section className='form-container'>
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

export default Index;