import React from 'react';
import HelloWorld from './state-drills/HelloWorld';

const defaultWhos = ['World', 'Friend', 'React']; 

function App() {
  return (
    <div className="App">
      {console.log(defaultWhos)}
      <HelloWorld whos={defaultWhos}/>
    </div>
  );
}

export default App;
