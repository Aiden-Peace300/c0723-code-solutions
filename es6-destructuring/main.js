const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353,
};

// Destructuring the object
const { title, author, libraryID } = book1;

console.log(
  'The title of the book is',
  title,
  ', the author is',
  author,
  'and the library id is',
  libraryID
);

// Creating the object literal
const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345,
};

// Destructuring the object with aliasing
const {
  title: bookTitle,
  author: bookAuthor,
  libraryID: bookLibraryID,
} = book2;

console.log(
  'The title of the book is',
  bookTitle,
  ', the author is',
  bookAuthor,
  'and the library id is',
  bookLibraryID
);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233,
  },
];

const [book3, book4, book5] = library;

console.log('Book3:', book3);
console.log('Book4:', book4);
console.log('Book5:', book5);

const [, , , book6] = library;

console.log('Book6:', book6);
