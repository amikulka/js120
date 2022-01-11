const wakMixin = {
  walk() {
    return "Let's go for a walk!";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

Object.assign(Cat.prototype, wakMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());