function ExampleConstructor() {}

console.log('ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log(
  'Type of ExampleConstructor.prototype: ',
  typeof ExampleConstructor.prototype
);

console.log('new ExampleConstructor() :', new ExampleConstructor());

const auto = new ExampleConstructor();
console.log(
  'instanceof ExampleConstructor :',
  auto instanceof ExampleConstructor
);
