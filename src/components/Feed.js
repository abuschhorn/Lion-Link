import React, {useState} from "react";
import FeedForm from "./FeedForm" 

export default function Feed({profiles}) {
  const[statuses, setStatuses] = useState([
    {
      userName: "Troy", 
      message: "jgirnkjsklfgkglwkwkdjdksl",
      createdAt: new Date()
    }

  ])

  const addStatus = (status) => {
    const tempStatus = [status, ...statuses]
    setStatuses(tempStatus)
  }



  return (
    <div>
    <FeedForm addStatus = {addStatus}/>
  <ul className="list-unstyled">
    {statuses && statuses.map((status) =>
    (<li className="media">
        <div class="media-body">
      <h5 class="mt-0 mb-1">{status.userName}</h5>
      {status.createdAt.toDateString()} {status.message}
    </div>

    </li>

    )
    
    )}
  </ul>
</div>

  )
}