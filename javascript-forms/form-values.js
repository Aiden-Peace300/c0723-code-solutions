// the querySelector method of the document object calls one argument a string assigns it to the constant variable '$contactForm'
const $contactForm = document.querySelector('#contact-form');

// the addEventListener method of the '$contactForm' object calls two arguments a type string and 'handleSubmit' function
$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const name = $contactForm.elements.name.value;
  const email = $contactForm.elements.email.value;
  const message = $contactForm.elements.email.value;

  const messageData = {
    name,
    email,
    message,
  };

  console.log('messageData:', messageData);

  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
