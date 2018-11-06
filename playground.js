var name = 'Stamp';
var age = 4;
var isSterilized = true;

function petInfo(petName, petAge, petIsSterilized) {
  var sterilized = '';

  if (petIsSterilized) {
    sterilized = 'Yes';
  } else {
    sterilized = 'False';
  }

  return (
    'Pet name is ' +
    petName +
    ', age is ' +
    petAge +
    ' and pet is sterilized: ' +
    sterilized
  );
}

console.log(petInfo(name, age, isSterilized));