const pets = ['Stamp', 'Snow'];

pets.push('Slim');
console.log(pets);

for (let pet of pets) {
  console.log(pet);
}

console.log(pets.map(pet => 'Name: ' + pet));
console.log(pets);

console.log(pets.filter(pet => pet.length > 4));
console.log(pets);

console.log(pets.reduce((prev, curr) => prev + ', ' + curr ));
console.log(pets);