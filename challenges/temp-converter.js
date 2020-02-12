console.log('tempConverter script has loaded');

// write this function!
function tempConverter(temperature, degrees) {
  if (degrees === 'farenheit') {
    //	Multiply by 9, then divide by 5, then add 32
    const temp = (temperature*9)/5+32;
    return temp;
  } else if (degrees === 'celcius') {
    //Deduct 32, then multiply by 5, then divide by 9
    const temp = ((temperature-32)*5)/9;
    return temp;
  } else {
    return degrees+' is not supported';
  }
}

// if the user wants to convert to farenheit
console.assert(tempConverter(53, 'farenheit') === 127.4, 'first');
console.assert(tempConverter(0, 'farenheit') === 32, 'second');
console.assert(tempConverter(-40, 'farenheit') === -40, 'third');

// if the user wants to convert to celcius
//it seems this part of tests is incorrect. 
//I used even online converter and these values are not in it
//console.assert(tempConverter(0, 'celcius') === 32, 'fourth');
//console.assert(tempConverter(4, 'celcius') === 39.2, 'fifth');
//console.assert(tempConverter(12.4, 'celcius') === 54.32, 'sixth');
console.assert(tempConverter(5, 'celcius') === -15, 'fourth');
console.assert(tempConverter(23, 'celcius') === -5, 'fifth');
console.assert(tempConverter(50, 'celcius') === 10, 'sixth');

// if the user inputs an invalid degree
console.assert(tempConverter(34, 'toad') === 'toad is not supported', 'seventh');
console.assert(tempConverter(2.5, '') === ' is not supported', 'eighth');
console.assert(tempConverter(500, 'Farenheit') === 'Farenheit is not supported', 'ninth');


function tempConverterHandler() {
  // prompt the user for a temperature
  const userTempStr = prompt('enter a temperature to convert');
  // cast userTempStr to a Number, and assign the value to userTemp
  const userTemp = Number(userTempStr);
  const userDegrees = prompt('would you like to convert to farenheit or celcius?');

  console.assert(typeof userTemp === 'number', "don't forget to cast userDegrees to a string!");

  // perform core logic
  // write this line!
  const result = tempConverter(userTemp, userDegrees);

  // alert result for the user
  // write this line!
  alert(result);

  // log action for the developer
  console.log('\n--- tempConverter ---');
  console.log('userTemp:', '(' + typeof userTemp + '),', userTemp);
  console.log('userDegrees:', '(' + typeof userDegrees + '),', userDegrees);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('temp-converter-button').addEventListener('click', tempConverterHandler);
