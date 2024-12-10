import React from 'react';
import './App.css';
import { greet } from 'test-dagents-sdk';

function App() {
  const [name, setName] = React.useState<string>('');
  const [greeting, setGreeting] = React.useState<string>('');

  const handleClick = () => {
    setGreeting(greet(name)); // Use the greet function from the SDK
  };

  return (
      <div>
        <h1>SDK Test</h1>
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Greet</button>
        {greeting && <p>{greeting}</p>}
      </div>
  );
}

export default App;
