import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>
          License Plate Number
        </a>
        <input type="text" name="LicensePlateNumber"/>
        <input type="text" name="Date"/>
        <input type="text" name="TimePicker"/>
      </header>
      
    </div>
  );
}

export default App;
