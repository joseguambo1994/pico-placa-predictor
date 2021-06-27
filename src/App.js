import logo from './logo.svg';
import './App.css';
import LicensePlateNumber from './Component/LicensePlateNumber/LicensePlateNumber';
import Date from './Component/Date/Date';
import Time from './Component/Time/Time';
import { useState } from 'react'

function App() {
  
  const [license, setLicense] = useState({
    "value":"AAA000",
    "status": "invalid"
  });
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <LicensePlateNumber onLicensePlateChange={setLicense}/> 
      <Date />
      <Time />
      <p>
        This is the parent license: 
          {license.value + license.status}
        </p>
      </header>
      
    </div>
  );
}

export default App;
