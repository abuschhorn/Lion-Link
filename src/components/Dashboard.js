import React from "react";
import Profiles from "./Profiles";
import UserProfile from "./UserProfile";

export default function Dashboard({ profiles }) {
  return (
    <div className='row'>
      <div className='col-sm-6 col-md-4 col-lg-4 col-xl-3'>
        <UserProfile />
      </div>
      <div className='col-sm-6 col-md-8 col-lg-8 col-xl-9'>
        <Profiles profiles={profiles} />
      </div>
    </div>
  );
}
