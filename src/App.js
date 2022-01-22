import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const fetchJoke = async () => {
      await fetch(`http://api.icndb.com/jokes/random?firstName=L33th&lastName=AI`);
    };
  }, []);

  return (
    <div className='App'>
      <h1>Joke Generator Setup</h1>
      <button>Generate Joke</button>
    </div>
  );
}

export default App;
