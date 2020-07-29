import React from "react";
import Logo from "../logo.png";
import { Link } from "@reach/router";

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-brand'>
        <img src={Logo} width='88' height='88' alt='' loading='lazy' />
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
