import './App.css';
import useRandomJoke from './Hooks/useRandomJoke/useRandomJoke';

function App() {
  const joke = useRandomJoke();

  return (
    <div className='App'>
      <h1>Joke Generator Setup</h1>
      <h2>{joke}</h2>
      <button>Generate Joke</button>
    </div>
  );
}

export default App;
