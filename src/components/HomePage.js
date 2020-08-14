import React from "react";
import bigLogo from "../bigLogo.png";
import Feedback from "./Feedback";

export default function HomePage() {
  return (
    <div>
      <div
        className='bg-cover'
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 100%,rgba(255,255,255,0.9) 100%), url(${bigLogo})`,
        }}
      >
        <div className='container homepage'>
          <button className='btn btn-danger'>LOGIN</button>
          <span class='glyphicon glyphicon-edit' aria-hidden='true'></span>
          <button className='btn btn-danger margin-left'>CREATE PROFILE</button>
        </div>
      </div>
      <Feedback />
    </div>
  );
}
