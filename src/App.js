import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';

const defaultWhos = ['World', 'Friend', 'React']; 

function App() {
  return (
    <div className="App">
      {console.log(defaultWhos)}
      <HelloWorld whos={defaultWhos}/>

      <Bomb />
    </div>
  );
}

export default App;
