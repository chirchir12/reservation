import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SingleRoom from './Pages/SingleRoom';
import Rooms from './Pages/Rooms';
import Error from './Pages/Error';
function App() {
  return (
    <div className="Appp">
      <h1>resort hotel</h1>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/single-room" component={SingleRoom} />
    </div>
  );
}

export default App;
