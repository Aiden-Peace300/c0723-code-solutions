console.log('hello, world');

const heading = document.querySelector('h1');
console.log('$heading: ', heading);
console.dir(heading);

const explanation = document.querySelector('p#explanation');
console.log('$explanation: ', explanation);
console.dir(explanation);

const hint = document.querySelector('p.hint');
console.log('$hint: ', hint);
console.dir(hint);

const paragraph = document.querySelectorAll('p');
console.log('$paragraph: ', paragraph);
console.dir(paragraph);

const links = document.querySelectorAll('a.example-link');
console.log('$links: ', links);
console.dir(links);
