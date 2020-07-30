import React from "react";
import bigLogo from "../bigLogo.png";

export default function HomePage() {
  return (
    <div>
      <div
        className='bg-cover'
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 100%,rgba(255,255,255,0.9) 100%), url(${bigLogo})`,
        }}>
        <div className='container homepage'>
          <h1 className='display-4'> about </h1>
          <p className='lead'> text goes here </p>
        </div>
      </div>
    </div>
  );
}
