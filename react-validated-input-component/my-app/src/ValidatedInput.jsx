import { FaCheck } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import './ValidatedInput.css';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form values:', { password });
  }

  let passwordErrorMessage;
  let setShowCheckIcon = false;
  if (password.length === 0) {
    passwordErrorMessage = 'A password is required';
    setShowCheckIcon = false;
  } else if (password.length >= 1 && password.length <= 7) {
    passwordErrorMessage = 'Your password is too short';
    setShowCheckIcon = false;
  } else {
    passwordErrorMessage = '';
    setShowCheckIcon = true;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Password
          <br />
          <input
            type="password"
            name="usersPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {setShowCheckIcon ? (
            <FaCheck style={{ margin: '1rem', color: 'green' }} />
          ) : (
            <AiOutlineClose style={{ margin: '1rem', color: 'red' }} />
          )}
          <div
            style={{ color: 'red' }}
            id="passwordHelpBlock"
            className="form-text">
            {passwordErrorMessage}
          </div>
        </label>
        <br />
      </form>
    </>
  );
}
