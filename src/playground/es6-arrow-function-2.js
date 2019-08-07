const add = function(a, b) {
  // console.log(arguments) // Not aviable in ES6
  return a + b;
};

console.log(add(4, 8));

const user = {
  name: "Oscar",
  cities: ["Philadelphia", "New York", "Kansas"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};

user.printPlacesLived();

const multiplier = {
  // numbers - arrat of numbers
  // multiplyBy - single number
  // multiply method return a new array where teh numbers have been multiplied
  numbers: [4, 3, 5],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
