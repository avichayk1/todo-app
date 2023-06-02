import React, { useState } from 'react';
import usersData from './users.json';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const users = [];
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const val = localStorage.getItem(key);
      users.push(JSON.parse(val));
    }
  }

  const handleSubmit = (e) => {
    const uniqueKey = Date.now();
    if (!users.some((user) => user.email.email === email)) {
      localStorage.setItem(
        uniqueKey,
        JSON.stringify({
          name: { name },
          email: { email },
          password: { password },
        })
      );
    }
    // users.forEach((user) => {
    //   if (email != user.email) {
    //     localStorage.setItem(
    //       uniqueKey,
    //       JSON.stringify({
    //         name: { name },
    //         email: { email },
    //         password: { password },
    //       })
    //     );
    //   }
    // });
  };

  return (
    <React.Fragment>
      <div className="d-grid gap-1 col-1 mx-auto">
        <h1
          className="display-1"
          color="Green"
        >
          Register
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group input-group-lg mb-3">
          <label
            className="input-group-text"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="name"
            placeholder="your Full name here"
            id="name"
            name="name"
          ></input>
        </div>
        <br />
        <div className="input-group input-group-lg mb-3">
          <label
            className="input-group-text"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="your email here"
            id="email"
            name="email"
          ></input>
        </div>
        <br />
        <div className="input-group input-group-lg mb-3">
          <label
            className="input-group-text"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            type="password"
            placeholder="your password here"
            id="password"
            name="password"
          ></input>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
          >
            Register
          </button>
        </div>
      </form>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => props.onFormSwitch()}
        >
          Already have an account? Login here
        </button>
      </div>
    </React.Fragment>
  );
};

export default Register;
