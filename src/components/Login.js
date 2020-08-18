import React, { useState } from "react";
import { useMatch, navigate } from "@reach/router";
import { auth } from "../firebase.util";

export default function Login() {
  // const match = useMatch(`login`);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.log(error.message);
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Email:</label>
        <input
          className='form-control'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password:</label>
        <input
          type='password'
          className='form-control'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className='btn btn-danger' onClick={navigate("dashboard")}>
          Submit
        </button>
      </form>
    </div>
  );
}
