const name = 'Stamp';
let age = 4;
const isSterilized = true;

// name = 'Snow';
age = 5;

function petInfo(petName, petAge, petIsSterilized) {
  let sterilized = '';

  if (petIsSterilized) {
    sterilized = 'Yes';
  } else {
    sterilized = 'False';
  }

  return `Pet name is ${petName}, age is ${petAge} and pet is sterilized: ${sterilized}`;
}

console.log(petInfo(name, age, isSterilized));