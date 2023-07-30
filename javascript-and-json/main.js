const books = [
  {
    isbn: '523452908958',
    title: 'Cracking the coding interview',
    author: 'Gayle Laakmann McDowell',
  },
  {
    isbn: '1537713949',
    title: "Elements of Programming Interviews in Python: The Insiders' Guide",
    author: 'Adnan Aziz',
  },
  {
    isbn: '22654654734',
    title:
      "Elements of Programming Interviews in Java: The Insiders' Guide' Guide",
    author: 'Adnan Aziz',
  },
];

console.log('books: ', books);
console.log('typeof books: ', typeof books);

const booksJSON = JSON.stringify(books);

// converts a JavaScript value to a JSON string
console.log('booksJSON: ', booksJSON);
console.log('typeof booksJSON: ', typeof booksJSON);

const studentJSON = '{"id":2186514,"name":"Aiden Peace"}';

console.log('studentJSON: ', studentJSON);
console.log('typeof studentJSON: ', typeof studentJSON);

const student = JSON.parse(studentJSON);

console.log('student: ', student);
console.log('typeof student: ', typeof student);
