import logo from "./logo.svg";
import "./App.css";
import LicensePlateNumber from "./Component/LicensePlateNumber/LicensePlateNumber";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PicoPlaca from './Images/PicoPlaca.PNG';

function App() {
  const [license, setLicense] = useState({
    value: "",
    status: "",
    type: "",
  });

  useEffect(() => {
      canRoadByDay();
      canRoadByTime();
},[license]) 

  const [startDate, setStartDate] = useState(new Date());
  const [roadByDigit, setRoadByDigit] = useState("");
  const [roadByTime, setRoadByTime] = useState("");
  const [roadMessage, setRoadMessage] = useState("");
  const [flagChange,setFlagChange] = useState(true);

  useEffect(() => {
    canRoadByDay();
      canRoadByTime();
},[startDate]) 

useEffect(() => {
  canRoadByBoth();
},[flagChange]) 


  function canRoadByDay() {
    if(license.status === "valid" && (license.type === "Car (short license plate)" ||license.type === "Car (long license plate)")){
      var licenseLastDigit = license.value.substring(
        license.value.length - 1,
        license.value.length
      );
      digitVersusDayValidation(licenseLastDigit);
    }else if (license.status === "valid" && license.type === "Motorcycle"){
      var licenseLastDigit2 = license.value.substring(
        license.value.length - 2,
        license.value.length - 1
      );
      digitVersusDayValidation(licenseLastDigit2);
    }
    
    else{
      setRoadByDigit("");
    }
    setFlagChange(!flagChange);
  }
  function digitVersusDayValidation(licenseLastDigit) {
    if (startDate.getDay() == 0) {
      setRoadByDigit("No");
      //martes, jueves,sábado
    } else if (startDate.getDay() % 2 == 0 && licenseLastDigit % 2 == 0) {
      setRoadByDigit("No");
    } else if (startDate.getDay() % 2 != 0 && licenseLastDigit % 2 != 0) {
      setRoadByDigit("No");
    } else {
      setRoadByDigit("Yes");
    }
  }

  function canRoadByTime(){
    var hours = startDate.getHours();
    var minutes = startDate.getMinutes();
    if (hours < 10){
      hours = "0"+ hours;
    }
    if (minutes == 0){
      minutes = "00";
    }
    var timeString = "" + hours +minutes;
    if(timeString > "0659" && timeString < "0931" || timeString > "1559" && timeString < "1931"){
      setRoadByTime("No");
    }else{
    setRoadByTime("Yes");
    }
    setFlagChange(!flagChange);
  } 

  function canRoadByBoth(){
    if(license.status === "invalid"){
      setRoadMessage(" license plate input");
    } else if(roadByDigit=== "Yes"){
      setRoadMessage(" can road");
    } else if (roadByDigit === "No" && roadByTime === "No"){
      setRoadMessage(" can NOT road this instant");
    }else if (roadByDigit === "No" && roadByTime === "Yes"){
      setRoadMessage(" can road this instant, but be aware of the time");
    }

  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LicensePlateNumber onLicensePlateChange={setLicense} />
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            return setStartDate(date);
          }}
          showTimeSelect
        />
        <p>
           {license.type} 
          {roadMessage}
        </p>
        <img src={PicoPlaca} alt="Logo" />;
      </header>
    </div>
  );
}

export default App;
