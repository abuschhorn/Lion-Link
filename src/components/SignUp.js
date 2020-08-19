import React, { useState } from "react";
import { useMatch, useNavigate } from "@reach/router";
import { firestore, auth } from "../firebase.util";

export default function SignUp() {
  //   const match = useMatch(`sign-up`);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (!auth) {
          return;
        }
        const userRef = firestore.doc(`users/${auth.user.uid}`);
        userRef.get().then((doc) => {
          if (!doc.exists) {
            userRef.set({ name, email, password });
            navigate("/create-profile");
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Display Name(Full Name):</label>
        <input
          className='form-control'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
        <button className='btn btn-danger'>Submit</button>
      </form>
    </div>
  );
}
