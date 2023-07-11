// on line 1 a new object literal is being assigned to student variable
const student = {
  firstName: 'Aiden', // a sting is being assigned to firstName property
  lastName: 'Peace',
  age: 23,
};

student.livesInIrvine = true; // 'true' is being assigned to the property 'livesInIrvine' in the 'student' object
student.previousOccupation = 'student'; // 'student' is being assigned to the property 'previousOccupation' in the 'student' object
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName); // the log method of the console object is being called with one argument a concatented string
console.log('value of student.livesInIrvine:', student.livesInIrvine); // the log method of the console object is being called with two arguments a string and 'student.livesInIrvine'
console.log('value of student.previousOccupation:', student.previousOccupation); // the log method of the console object is being called with two arguments a string and 'student.previousOccupation'
console.log('value of student:', student); // the log method of the console object is being called with two arguments a string and 'student' object

const vehicle = {
  make: 'Mercedes-Benz',
  model: 'AMG',
  year: 2023,
};

vehicle['isConvertible'] = true; // 'true' is being assigned to the property 'isConvertible' in the 'vehicle' object
vehicle['color'] = 'gray'; // 'gray' is being assigned to the property 'color' in the 'vehicle' object
console.log("value of vehicle['color']:", vehicle['color']); // the log method of the console object is being called with two arguments a string and 'vehicle['color']'
console.log("value of vehicle['isConvertible']", vehicle['isConvertible']); // the log method of the console object is being called with two arguments a string and 'vehicle['isConvertible']'
console.log('value of vehicle:', vehicle); // the log method of the console object is being called with two arguments a string and 'vehicle' object

const pet = {
  name: 'toki',
  type: 'American Eskimo',
};

delete pet.name; // the property 'name' in the 'pet' object is being deleted
delete pet['type']; // the property 'type' in the 'pet' object is being deleted

console.log('value of pet:', pet); // the log method of the console object is being called with two arguments a string and 'pet' object
