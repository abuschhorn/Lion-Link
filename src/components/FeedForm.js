import React, { useState } from "react";
import { firestore } from "../firebase.util";

export default function FeedForm({ addStatus }) {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // addStatus({ userName, createdAt: new Date(), message });
    // Add a new document in collection "cities"
    firestore
      .collection("statuses")
      .add({
        userName: userName,
        message: message,
        createdAt: new Date(),
      })
      .then(function () {
        console.log("Document successfully written!");
        setUserName("");
        setMessage("");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };
  return (
    <div className='card feedform'>
      <form onSubmit={handleSubmit}>
        <input
          className='form-control'
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder='Username'
        />
        <input
          className='form-control'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="What's on you mind?"
        />

        <button className='btn btn-outline-danger' onClick={handleSubmit}>
          Update Status
        </button>
      </form>
    </div>
  );
}
