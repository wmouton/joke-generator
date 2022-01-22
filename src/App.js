import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const fetchJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=Dude&lastName=AI`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data.value.joke);
        });
    fetchJoke();
  }, []);

  return (
    <div className='App'>
      <h1>Joke Generator Setup</h1>
      <button>Generate Joke</button>
    </div>
  );
}

export default App;
