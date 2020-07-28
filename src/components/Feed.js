import React, {useState} from "react";
import FeedForm from "./FeedForm" 

export default function Feed({profiles}) {
  const[statuses, setStatuses] = useState([
    {
      userName: "Troy", 
      message: "jgirnkjsklfgkglwkwkdjdksl",
    }

  ])
  const addStatus = (status) => {
    const tempStatus = [...statuses, status]
    setStatuses(tempStatus)
  }

  return (
    <div>
    <FeedForm addStatus = {addStatus}/>
  <div className="media">
  <div className="media-body">
   <h5 className="mt-0">{profiles[0].fName}</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
</div>

  )
}