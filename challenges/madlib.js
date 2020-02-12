console.log('madlib script has loaded');

// write this function!
function madlib(Noun, Verb, Adj) {
  if (Noun.length>Verb.length) {
    stroka = "the "+Adj+" "+Noun+" loves to "+Verb+" in the summer";
    return stroka;
  } else {
    stroke = "when the "+Adj+" rain falls, "+Noun+" begins to "+Verb;
    return stroka;
  }

}

// if the noun is longer than the verb
console.assert(madlib('horse', 'walk', 'red') === 'the red horse loves to walk in the summer', 'first');
console.assert(madlib('schoolbus', 'drive', 'flat') === 'the flat schoolbus loves to drive in the summer', 'second');
console.assert(madlib('steel', 'melt', 'smooth') === 'the smooth steel loves to melt in the summer', 'third');

// else the verb is longer than the noun
console.assert(madlib('steel', 'freeze', 'smooth') === 'when the smooth rain falls, steel begins to freeze', 'fourth');
console.assert(madlib('mice', 'wander', 'orange') === 'when the orange rain falls, mice begins to wander', 'fifth');
console.assert(madlib('car', 'migrate', 'scratchy') === 'when the scratchy rain falls, car begins to migrate', 'sixth');


function madlibHandler() {
  // prompt the user for a noun, verb and adjective
  const userNoun = prompt('enter a noun');
  const userVerb = prompt('enter a verb');
  const userAdj = prompt('enter an adjective');

  // perform core logic
  const result = madlib(userNoun, userVerb, userAdj);

  // alert result for the user
  alert(result);

  // log action for the developer
  console.log('\n--- madlib ---');
  console.log('userNoun:', '(' + typeof userNoun + '),', userNoun);
  console.log('userNoun length:', userNoun.length);
  console.log('userVerb:', '(' + typeof userVerb + '),', userVerb);
  console.log('userVerb length:', userVerb.length);
  console.log('userAdj:', '(' + typeof userAdj + '),', userAdj);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('madlib-button').addEventListener('click', madlibHandler);
