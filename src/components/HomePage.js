import React from "react";
import bigLogo from "../bigLogo.png";

export default function HomePage() {
  return (
    <div>
      <div
        className='jumbotron bg-cover'
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url(${bigLogo})`,
        }}>
        <div className='container'>
          <h1> Hello, use our webapp </h1>
        </div>
      </div>
    </div>
  );
}
