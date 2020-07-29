import React, { useState } from "react";
import FeedForm from "./FeedForm";

export default function Feed({ profiles }) {
  const [statuses, setStatuses] = useState([
    {
      userName: "Troy",
      message:
        "this is a message this is a message this is a message this is a messagethis is a message this is a message",
      createdAt: new Date(),
    },
  ]);

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
            <li className='media'>
              <div class='media-body card'>
                <h5 class='mt-0 mb-1'>{status.userName}</h5>
                <div className='status-date'>
                  {status.createdAt.toDateString()}
                </div>
                {status.message}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
