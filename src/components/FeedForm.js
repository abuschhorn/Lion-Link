import React, { useState } from "react";

export default function FeedForm({ addStatus }) {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addStatus({ userName, createdAt: new Date(), message });
    setUserName("");
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='form-control'
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder='username here'
        />
        <input
          className='form-control'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder='Write here'
        />

        <button className='btn btn-outline-danger' onClick={handleSubmit}>
          Update Status
        </button>
      </form>
    </div>
  );
}
