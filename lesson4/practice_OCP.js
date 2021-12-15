//1)
/*function createPet(animal, name) {
  return {
    animal: animal,
    name: name,
    sleep() {
      console.log('I am sleeping');
    },
    wake() {
      console.log('I am awake');
    },
  };
}
let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake
*/

//2)
let PetPrototype = {
  sleep: function() {
    console.log('I am sleeping');
  },

  wake: function() {
    console.log('I am awake');
  },

  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },
};

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake


//3)
// The OOLO way creates an object prototype from which the animals inherit
// their methods. the first way duplicates the methods with each animal.