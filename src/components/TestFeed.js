import React, { useState, useEffect } from "react";
import FeedForm from "./FeedForm";
import { firestore } from "../firebase.util";
import moment from "moment";

export default function Feed({ profiles }) {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    firestore
      .collection("statuses")
      .orderBy("createdAt", "desc")
      .get()
      .then(function (querySnapshot) {
        let statusData = [];
        querySnapshot.forEach(function (doc) {
          statusData.push({ id: doc.id, ...doc.data() });
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        setStatuses(statusData);
      });
  }, []);

  const addStatus = (status) => {
    const tempStatus = [status, ...statuses];
    setStatuses(tempStatus);
  };

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
    <div>
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
      <ul className='list-unstyled'>
        {statuses &&
          statuses.map((status) => (
            <li className='media'>
              <div class='media-body card'>
                <h5 class='mt-0 mb-1'>{status.userName}</h5>
                <div className='status-date'>
                  {moment(status.createdAt.toDate()).fromNow()}
                </div>
                {status.message}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
