import React from 'react';
import './App.css';
import Home from './Pages/Home';
import SingleRoom from './Pages/SingleRoom';
import Rooms from './Pages/Rooms';
import Error from './Pages/Error';
function App() {
  return (
    <div className="Appp">
      <h1>resort hotel</h1>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </div>
  );
}

export default App;
