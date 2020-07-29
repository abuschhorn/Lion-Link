import React, { useState, useEffect } from "react";
import FeedForm from "./FeedForm";
import moment from "moment";
import { firestore } from "../firebase.util";

export default function Feed({ profiles }) {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    firestore
      .collection("statuses")
      .orderBy("createdAt", "desc")
      .onSnapshot(function (querySnapshot) {
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

  return (
    <div>
      <FeedForm addStatus={addStatus} />
      <ul className='list-unstyled'>
        {statuses &&
          statuses.map((status) => (
            <li className='media card'>
              <div class='media-body card-body'>
                <h5 class='mt-0 mb-1 card-title'>{status.userName}</h5>
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
