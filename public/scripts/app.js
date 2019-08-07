"use strict";

var add = function add(a, b) {
  // console.log(arguments) // Not aviable in ES6
  return a + b;
};

console.log(add(4, 8));
var user = {
  name: "Oscar",
  cities: ["Philadelphia", "New York", "Kansas"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};
user.printPlacesLived();
var multiplier = {
  // numbers - arrat of numbers
  // multiplyBy - single number
  // multiply method return a new array where teh numbers have been multiplied
  numbers: [4, 3, 5],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return _this2.multiplyBy * number;
    });
  }
};
console.log(multiplier.multiply());
