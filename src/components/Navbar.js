import React from "react";
import Logo from "../NavBarLogo.png";
import { Link } from "@reach/router";

export default function Navbar() {
  return (
    <nav className='navbar navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        <img src={Logo} width='180' height='70' alt='' loading='lazy' />
      </Link>

      <ul className='justify-content-end nav'>
        <li className='nav-item'>
          <Link to='feed' className='nav-link'>
            Feed
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='dashboard' className='nav-link'>
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
