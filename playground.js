const name = 'Stamp';
let age = 4;
const isSterilized = true;

// name = 'Snow';
age = 5;

const petInfo = (petName, petAge, petIsSterilized) => {
  let sterilized = '';

  if (petIsSterilized) {
    sterilized = 'Yes';
  } else {
    sterilized = 'False';
  }

  return `Pet name is ${petName}, age is ${petAge} and pet is sterilized: ${sterilized}`;
}

console.log(petInfo(name, age, isSterilized));

const add = (a, b) => a + b;
console.log(add(1, 2));

const addOne = a => a + 1;
console.log(addOne(1));

const addRandom = () => 1 + 3;
console.log(addRandom());