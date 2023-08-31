import { useState } from 'react';
import './RegistrationFormUncontrolled.css';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('state:', { username, password });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="usernameInput"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="usersPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
}
