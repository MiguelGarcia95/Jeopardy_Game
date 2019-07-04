import React from 'react';
import {BrowserRouter , Route, Switch} from  'react-router-dom'
// import socketIOClient from "socket.io-client";
import Home from './home';
import Room from './room';
import Page404 from './page404';
import './App.css';

// class App extends React.Component{
//   componentDidMount() {
//     const socket = socketIOClient('http://localhost:5000/');
//     socket.emit('join', 'test', error => {
//       if (error) console.log(error)
//     });
//     socket.on('greeting', message => {
//       console.log(message);
//     })
//   }
// }


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/:roomId" component={Room} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
