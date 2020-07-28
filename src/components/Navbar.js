import React from "react";
import Logo from "../logo.png";

export default function Navbar() {
  return (
    <nav class='navbar navbar-light bg-light'>
      <a class='navbar-brand' href='#'>
        <img
          src={Logo}
          width='88'
          height='88'
          alt=''
          loading='lazy'
        />
      </a>
    </nav>
  );
}
