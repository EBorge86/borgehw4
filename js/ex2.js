const Fahrenheit = prompt("Enter the temperature in Fahrenheit")
function FahrenheitToCelsius(Fahrenheit) {
  let celsius = (Fahrenheit - 32) * 5 / 9;
  console.log(`${Fahrenheit}°F is ${celsius}°C`);
}
FahrenheitToCelsius(Fahrenheit)