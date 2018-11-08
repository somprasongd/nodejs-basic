# JavaScript Refresher

- Core Syntax
- if-else
- let & const
- Template Literals
- Named Fucntion
- Arrow Fucntion
- Object
- Array
- Rest & Spread Operator
- Destructuring
- Async Code
- Error Handling

## Core Syntax

```javascript
var name = "Stamp";
var age = 4;
var isSterilized = true;
function petInfo(petName, petAge, petIsSterilized) {
  return (
    "Pet name is " +
    petName +
    ", age is " +
    petAge +
    " and pet is sterilized: " +
    petIsSterilized
  );
}
console.log(petInfo(name, age, isSterilized));
```

## if-else

```javascript
function petInfo(petName, petAge, petIsSterilized) {
  var sterilized = "";
  if (petIsSterilized) {
    sterilized = "Yes";
  } else {
    sterilized = "False";
  }
  return (
    "Pet name is " +
    petName +
    ", age is " +
    petAge +
    " and pet is sterilized: " +
    sterilized
  );
}
```

## let & const

```javascript
const name = "Stamp";
let age = 4;
const isSterilized = true;
// name = 'Snow';
age = 5;
function petInfo(petName, petAge, petIsSterilized) {
  let sterilized = "";
}
```

## Template Literals

```javascript
function petInfo(petName, petAge, petIsSterilized) {
  return `Pet name is ${petName}, age is ${petAge} and pet is sterilized: ${sterilized}`;
}
```

## Named Fucntion

```javascript
const petInfo = function(petName, petAge, petIsSterilized) {};
```

## Arrow Fucntion

```javascript
const petInfo = (petName, petAge, petIsSterilized) => {};
console.log(petInfo(name, age, isSterilized));

// other style
const add = (a, b) => a + b;
console.log(add(1, 2));
const addOne = a => a + 1;
console.log(addOne(1));
const addRandom = () => 1 + 3;
console.log(addRandom());
```

## Object

```javascript
const pet = {
  name: "Stamp",
  age: 4,
  info() {
    console.log(this.name + " is " + this.age + " years");
  }
};
pet.info();
```

## Array

```javascript
const pets = ["Stamp", "Snow"];
pets.push("Slim");
console.log(pets);
for (let pet of pets) {
  console.log(pet);
}

console.log(pets.map(pet => "Name: " + pet));
console.log(pets);
console.log(pets.filter(pet => pet.length > 4));
console.log(pets);
console.log(pets.reduce((prev, curr) => prev + ", " + curr));
console.log(pets);
```

## Rest & Spread Operator

```javascript
const pets = ["Stamp", "Snow"];
// spread array
const copiedArray = [...pets];
console.log(copiedArray);
// spread object
const pet = {
  name: "Stamp",
  age: 4
};
const copiesObject = { ...pet };
console.log(copiesObject);
// rest array
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4, 5));
```

## Destructuring

```javascript
const pet = {
  name: "Stamp",
  age: 4
};

const printName = ({ name }) => {
  console.log(name);
};

printName(pet);

const { name, age } = pet;
console.log(name, age);
const pets = ["Stamp", "Snow"];
const [stamp, snow] = pets;
console.log(stamp, snow);
```

## Async Code

```javascript
console.log("Start");
// // callback
// const fetchData = callback => {
//   setTimeout(() => {
//     callback('Done!');
//   }, 1000);
// }
// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData(text => {
//     console.log(text);
//   })
// }, 2000);
// promise
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 2000);
  });
  return promise;
};
// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData()
//     .then(text => {
//       console.log(text);
//       return fetchData();
//     })
//     .then(text2 => {
//       console.log(text2);
//     });
// }, 2000);
setTimeout(async () => {
  console.log("Timer is done!");
  const text = await fetchData();
  console.log(text);
  const text2 = await fetchData();
  console.log(text2);
}, 2000);
console.log("End");
```

## Error Handling

```javascript
console.log("Start");
setTimeout(async () => {
  try {
    const result = await Promise.reject(new Error("Test error"));
  } catch (ex) {
    console.log(ex);
  }
  console.log("Completed!");
}, 1000);

console.log("End");
```
