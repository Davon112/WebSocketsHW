import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Username:', username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
