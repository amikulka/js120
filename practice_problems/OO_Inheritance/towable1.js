const towMixin = {
  tow() {
    console.log("I can tow a trailer!");
  }
}

class Truck {}

class Car {}

Object.assign(Truck.prototype, towMixin);

let truck = new Truck();
truck.tow();