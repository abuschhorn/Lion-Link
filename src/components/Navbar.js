import React from "react";
import Logo from "../NavBarLogo.png";
import { Link } from "@reach/router";

export default function Navbar() {
  return (
    <nav className='navbar navbar-light'>
      <Link to='/' className='navbar-brand'>
        <img src={Logo} height='70' alt='' loading='lazy' />
      </Link>

      <ul className='justify-content-end nav'>
        <li className='nav-item'>
          <Link to='about' className='nav-link'>
            About
          </Link>
        </li>
        {/* <li className='nav-item'>
          <Link to='create-profile' className='nav-link'>
            Create Profile
          </Link>
        </li> */}
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
