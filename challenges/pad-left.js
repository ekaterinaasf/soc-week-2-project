console.log('padLefts script has loaded');

// write this function!
function padLeft(string, length) {
  if (string.length>=length){
    return string;
  } else {
    return "-".repeat(length-string.length)+string;
  }
}

// if the string is already as long as or longer than the length
console.assert(padLeft('farenheit', 3) === 'farenheit', 'first');
console.assert(padLeft('celcius', 7) === 'celcius', 'second');
console.assert(padLeft('', 0) === '', 'third');

// if the string is too short
console.assert(padLeft('', 2) === '--', 'fourth');
console.assert(padLeft('abc', 6) === '---abc', 'fifth');
console.assert(padLeft('computers', 10) === '-computers', 'sixth');


function padLeftHandler() {
  // prompt the user for a noun, verb and adjective
  const userString = prompt('enter a string to pad');

  const userLengthStr = prompt('what is the shortest this string should be?');
  // cast userLengthStr to a Number, and assign the value to userLength
  const userLength = Number(userLengthStr);

  //console.assert(typeof userLength === 'number', "don't forget to cast userLength to a string!");
  //userLength has to be a Number

  // perform core logic
  // write this line!
  const result = padLeft(userString, userLength);

  // alert result for the user
  // write this line!
  alert(result);

  // log action for the developer
  console.log('\n--- padLeft ---');
  console.log('userString:', '(' + typeof userString + '),', userString);
  console.log('userLength:', '(' + typeof userLength + '),', userLength);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('pad-left-button').addEventListener('click', padLeftHandler);
