var nameVar = 'Oscar';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Juan';
nameLet = 'Pepe';
console.log('nameLet', nameLet);

const nameConst = 'Julia';
console.log('nameConst', nameConst);

// block scoping
var fullName = 'Juan Perez';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);