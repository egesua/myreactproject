import Counter from './components/Counter';
import './App.css';

function App() {

  const username = "Ali"

  return (
    <div className="App">
      <header className="App-header">
        <h1>Merhaba {username ? username : "anonymus"}!</h1>
      
      <hr/>
      <p className="highlight">
        React started!
      </p>
      </header>
      <Counter />
    </div>
  );
}

export default App;
