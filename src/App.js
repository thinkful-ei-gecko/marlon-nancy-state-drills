import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion';


const defaultWhos = ['World', 'Friend', 'React']; 
const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    displaying: false
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    displaying: false
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    displaying: false
  },
]

function App() {
  return (
    <div className="App">
      <Accordion sections={sections} />
    </div>
  );
}

export default App;
