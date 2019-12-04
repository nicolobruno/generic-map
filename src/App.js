import React from 'react';
import './App.css';
import Map from './components/Map';
import { MAP_JSON } from './components/Map/constants';

function App() {
  return (
    <div className="App">
      <h1 className="title">Argentina</h1>
      <Map
        data={{
          map: MAP_JSON,
          width: 600,
          height: 500,
          center: [-62, -40],
          scale: 420,
          currency: "$"
        }}
      />
    </div>
  );
}

export default App;
