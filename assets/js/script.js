let temperatureReading,error;

window.addEventListener('load', ()=>{
    temperatureReading=document.getElementById('temperature_reading');
    error=document.getElementById('error');
    eventHandler();
});

eventHandler=()=>{
    btnConvert=document.getElementById('convert');
    btnConvert.addEventListener('click', controlInput);
}
/*---Control input and call callReading function or get error--*/
controlInput=()=>{
    getTemperature=document.getElementById('degree').value;
    getTemperature!=='' ? callReading(getTemperature) : error.innerHTML='Wrong Lettur!', degree.focus() ;
}
/*-----------Get the reading and call the relevant function----*/
callReading=(getTemperature)=>{
    conversioneDegree=document.getElementById('conversion_degree');
    conversioneType=document.getElementById('conversion_type'); 
    conversioneDegree.value==='celsius' && conversioneType.value === 'fahrenheit'
     ? fahrenheitConversion(getTemperature) : conversioneDegree.value==='fahrenheit' && conversioneType.value === 'celsius'
        ? celsiusConversion(getTemperature) : error.innerHTML="Not Conversion"; 
}
/*--------Fahrenheit Conversion--------------------------------*/
fahrenheitConversion=(getTemperature)=>{
    error.innerHTML="";
    temperatureReading.innerHTML = (((getTemperature * 9)/5 + 32)).toFixed(3)+"\n°F";
}
/*-----------Celsius Conversion--------------------------------*/
celsiusConversion=(getTemperature)=>{
    error.innerHTML="";
    temperatureReading.innerHTML=(((getTemperature - 32)/1.8)).toFixed(3)+"\n°C";
}
