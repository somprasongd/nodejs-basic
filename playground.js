const pet = {
  name: 'Stamp',
  age: 4
};

const printName = ({ name }) => {
  console.log(name);
}

printName(pet);

const { name, age } = pet;
console.log(name, age);

const pets = ['Stamp', 'Snow'];
const [stamp, snow] = pets;
console.log(stamp, snow);

