import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=Dude&lastName=AI`
      )
        .then(res => res.json())
        .then(data => {
          setJoke(data.value.joke);
        });
    fetchJoke();
  }, []);

  return (
    <div className='App'>
      <h1>Joke Generator Setup</h1>
      <h2>{joke}</h2>
      <button>Generate Joke</button>
    </div>
  );
}

export default App;
