import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

const defaultWhos = ['World', 'Friend', 'React']; 

function App() {
  return (
    <div className="App">
      <RouletteGun />
    </div>
  );
}

export default App;
