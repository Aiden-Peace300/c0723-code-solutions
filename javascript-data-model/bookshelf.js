const bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];

const secondBookAuthor = bookshelf[1].author; // assinging the value of the 'author' property that is in the 'bookshelf' array at index one to 'secondBookAuthor'
const firstBookIsbn = bookshelf[0].isbn; // assinging the value of the 'isbn' property that is in the 'bookshelf' array at index one to 'firstBookIsbn'
const thirdBookTitle = bookshelf[2].title; // assinging the value of the 'title' property that is in the 'bookshelf' array at index one to 'thirdBookTitle'
console.log('value of bookshelf[1].author:', secondBookAuthor); // the log method of the console object is being called with one arguments a concatnated string
console.log('value of bookshelf[0].isbn:', firstBookIsbn); // the log method of the console object is being called with one arguments a concatnated string
console.log('value of bookshelf[2].title:', thirdBookTitle); // the log method of the console object is being called with one arguments a concatnated string
