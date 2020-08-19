import React from "react";
import Logo from "../NavBarLogo.png";
import { Link } from "@reach/router";
import { auth } from "../firebase.util";

export default function Navbar() {
  console.log(auth.currentUser);
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
        {/* {auth && auth.currentUser ? ( */}
        <li className='nav-item'>
          <Link to='login' className='nav-link'>
            Login
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='sign-up' className='nav-link'>
            Create Account
          </Link>
        </li>
        <li className='nave-item'>
          <Link to='sign-out' className='nav-link'>
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
