import { useState } from 'react';

const LicensePlateNumber = ({onLicensePlateChange}) => {

    const [licensePlate,setLicensePlate] = useState("AAA-HG3");
    
    function handleChange(e){
        onLicensePlateChange(e.target.value);
        setLicensePlate(e.target.value);
    }

    return (
    <div>
      <input type="Text" name="LicensePlateNumber" onChange={ handleChange }/>
      <p> The plate number is: {licensePlate}</p>
    </div>
  );
};

export default LicensePlateNumber;
