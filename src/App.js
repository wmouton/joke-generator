import { useState } from 'react';
import './App.css';
import useRandomJoke from './Hooks/useRandomJoke/useRandomJoke';

function App() {
  const joke = useRandomJoke('Dude', 'AI');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className='App'>
      <center>
        <h1>Joke Generator Setup</h1>
        <h2>{joke}</h2>

        <form action=''>
          <input placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)} />
          <input placeholder='last name'  value={lastName} onChange={e => setLastName(e.target.value)} />
          <button>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;
