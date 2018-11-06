const pet = {
  name: 'Stamp',
  age: 4,
  info() {
    console.log(this.name + ' is ' + this.age + ' years');
  }
}

pet.info();