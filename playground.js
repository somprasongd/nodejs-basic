var name = 'Stamp';
var age = 4;
var isSterilized = true;

function petInfo(petName, petAge, petIsSterilized) {
  return (
    'Pet name is ' +
    petName +
    ', age is ' +
    petAge +
    ' and pet is sterilized: ' +
    petIsSterilized
  );
}

console.log(petInfo(name, age, isSterilized));