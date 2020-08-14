import React, { useState } from "react";
import { firestore } from "../firebase.util";

export default function Feedback() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    firestore
      .collection("feedback")
      .add({
        name: name,
        subject: subject,
        feedback: feedback,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        setName("");
        setSubject("");
        setFeedback("");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className='feedback'>
      <h2>Feedback: </h2>
      <p>
        Since this application is student run we appreciate any feedback you can
        provide about the functionality of the app or any issues that may arise.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name: </label>
          <input
            required
            className='form-control'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Subject: </label>
          <input
            required
            className='form-control'
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </div>
        <div>
          <label>Feedback: </label>
          <input
            required
            className='form-control'
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
          />
        </div>
        <div>
          <button className='btn btn-danger' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
