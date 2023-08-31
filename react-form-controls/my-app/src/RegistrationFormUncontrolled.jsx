import './RegistrationFormUncontrolled.css';

export default function RegistrationFormUncontrolled() {
  function handleSubmit() {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);

    const { usernameInput, userPassword } = formValues;
    console.log('state:', { username: usernameInput, password: userPassword });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username <input type="text" name="usernameInput" />
        </label>
        <label>
          Password <input type="password" name="usersPassword" />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
}
