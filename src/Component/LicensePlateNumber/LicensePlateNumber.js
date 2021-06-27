import { useState } from 'react';

const LicensePlateNumber = ({onLicensePlateChange}) => {

    const [licensePlate,setLicensePlate] = useState("AAA-HG3");
    const [count, setCount] = useState(0);
    const carLettersValidation = new RegExp('^[A-Z]{3}[0-9]{3}$');
    
    function handleChange(e){
        var word = "" + e.target.value;
        word = word.toUpperCase();
        if(carLettersValidation.test(word)){
            setLicensePlate(word.toUpperCase());
            onLicensePlateChange(word);
        }else{
            setLicensePlate("Invalid");
        }   
        setCount(count + 1);
        
    }

    return (
    <div>
      <input type="Text" name="LicensePlateNumber" onChange={ handleChange }
       style={{textTransform: "uppercase"}} maxLength="6"/>
      <p> The plate number is: {licensePlate}</p>
      <p> {count}</p>
    </div>
  );
};

export default LicensePlateNumber;
