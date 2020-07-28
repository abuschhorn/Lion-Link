import React from "react";
import Profiles from "./Profiles";
import UserProfile from "./UserProfile";

export default function Dashboard({ profiles }) {
  return (
    <div className='row'>
      <div className='col-sm-3'>
        <UserProfile />
      </div>
      <div className='col-sm-9'>
        <Profiles profiles={profiles} />
      </div>
    </div>
  );
}
