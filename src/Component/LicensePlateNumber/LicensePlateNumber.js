import { useState } from 'react';

const LicensePlateNumber = ({onLicensePlateChange}) => {

    const [licensePlate,setLicensePlate] = useState("AAA-HG3");
    const carShortValidation = new RegExp('^[A-Z]{3}[0-9]{3}$');
    const carLongValidation = new RegExp('^[A-Z]{3}[0-9]{4}$');
    const motoValidation = new RegExp('^[A-Z]{2}[0-9]{3}[A-Z]{1}$');
    
    function handleChange(e){
        var licenseString = "" + e.target.value;
        licenseString = licenseString.toUpperCase();
        if(carShortValidation.test(licenseString)){
            setLicensePlate(licenseString.toUpperCase());
            onLicensePlateChange({
                "value":licenseString,
                "status": "valid",
                "type":"Car (short license plate)",
            });
        }else if(carLongValidation.test(licenseString)){
            setLicensePlate(licenseString.toUpperCase());
            onLicensePlateChange({
                "value":licenseString,
                "status": "valid",
                "type":"Car (long license plate)",
            });
        }else if (motoValidation.test(licenseString)){
            setLicensePlate(licenseString.toUpperCase());
            onLicensePlateChange({
                "value":licenseString,
                "status": "valid",
                "type":"Motorcycle",
            });
        }
        else{
            setLicensePlate("Invalid");
            onLicensePlateChange({
                "value":licenseString,
                "status": "invalid",
                "type": "invalid",
            });
        }         
    }

    return (
    <div>
      <input type="Text" name="LicensePlateNumber" onChange={ handleChange }
       style={{textTransform: "uppercase"}} maxLength="7"/>  
    </div>
  );
};

export default LicensePlateNumber;
