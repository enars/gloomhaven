import React, { useState } from 'react';
import './App.css';
import Card from './Card'
import ActionCardBar from './ActionCardBar'

function App() {
  const basicCards = {
    deck: ['+1', '+1', '+1', '0', '0', '-1'],
    discard: []
  };
  
  const [actionCards, setActionCards] = useState(basicCards);

  return (
    <div className="App">
      <header className="App-header">
        <Card></Card>
        <ActionCardBar></ActionCardBar>
      </header>
    </div>
  );
}

export default App;
