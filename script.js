//Celsius para fahrenheit = C*1.8 + 32

function celsiuspFahrenheit(){
  let celsius = prompt("Digite uma temperatura");
  let celcFah = (celsius * 1.8) + 32;
  console.log(celcFah); 
}
  

function fahrenheitCelsius(){
  let  fahrenheit = prompt("Digite uma temperatura");
  let fahCelc = (fahrenheit-32) / 1.8;
  console.log(fahCelc);
}



