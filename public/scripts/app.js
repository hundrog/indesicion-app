"use strict";

var nameVar = 'Oscar';
nameVar = 'Mike';
console.log('nameVar', nameVar);
var nameLet = 'Juan';
nameLet = 'Pepe';
console.log('nameLet', nameLet);
var nameConst = 'Julia';
console.log('nameConst', nameConst); // block scoping

var fullName = 'Juan Perez';
var firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
