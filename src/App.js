import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  // Custom Hook
  // const joke = useRandomJoke('Dude', 'AI');

  

  return (
    <div className='App'>
      <h1>Joke Generator Setup</h1>
      <h2>{joke}</h2>
      <button>Generate Joke</button>
    </div>
  );
}

export default App;
