import React, {useState} from 'react';

function Index() {
  const [roomText, setRoomText] = useState("");

  return (
    <section className='app'>
      {roomText}
      <input placeholder='Game Room' onChange={(e) => setRoomText(e.target.value)} />
    </section>
  )
}

export default Index;