import React from "react";
import Logo from "../NavBarLogo.png";
import { Link, navigate } from "@reach/router";
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
        <li className='nav-item login'>
          <Link to='login' className='nav-link'>
            Login
          </Link>
        </li>
        <li className='nav-item signUp'>
          <Link to='sign-up' className='nav-link'>
            Create Account
          </Link>
        </li>
      </ul>

      <button
        className='btn btn-danger'
        onClick={() => {
          auth
            .signOut()
            .then(() => {
              navigate("/");
            })
            .catch(() => {
              return;
            });
        }}
      >
        Sign Out
      </button>
    </nav>
  );
}
