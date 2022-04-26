import './App.css';
import useRandomJoke from './Hooks/useRandomJoke/useRandomJoke';

function App() {
  const joke = useRandomJoke('Dude', 'AI');

  return (
    <div className='App'>
      <center>
        <h1>Joke Generator Setup</h1>
        <h2>{joke}</h2>
        <button>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
