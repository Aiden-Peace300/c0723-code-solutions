import takeAChance from './take-a-chance.js';

takeAChance('Aiden')
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });
