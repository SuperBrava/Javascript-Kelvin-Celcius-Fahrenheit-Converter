// value of Kelvin
var kelvin = 0;
console.log(kelvin);

// value of Celcius
var celcius =  kelvin - 273;
console.log(celcius);

// value of Fahrenheit, rounded down using .floor
var fahrenheit = Math.floor(celcius * (9/5) + 32);
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

