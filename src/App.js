import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SingleRoom from './Pages/SingleRoom';
import Rooms from './Pages/Rooms';
import Error from './Pages/Error';
function App() {
  return (
    <>
      <h1>resort hotel</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
