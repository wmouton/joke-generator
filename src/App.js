import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './Hooks/useRandomJoke/useRandomJoke';

function App() {
  // const joke = useRandomJoke('Dude', 'AI');
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState('Dude');
  const [lastName, setLastName] = useState('AI');

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className='App'>
      <center>
        <h1>Joke Generator</h1>
        <h2>{joke}</h2>

        <form action=''>
          <input placeholder='first name' ref={firstNameRef} />
          <input placeholder='last name' ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;
