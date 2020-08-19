import React from "react";
import bigLogo from "../bigLogo.png";
import Feedback from "./Feedback";
import Login from "./Login";
import { Router, Link, useNavigate } from "@reach/router";
import { signInWithEmailAndPassword, auth } from "../firebase.util";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className='bg-cover'
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 100%,rgba(255,255,255,0.9) 100%), url(${bigLogo})`,
        }}
      >
        {/* <div className='container homepage'>
          <button
            className='btn btn-danger login'
            onClick={() => navigate(`/login`)}
          >
            LOGIN
          </button>
          <span className='glyphicon glyphicon-edit' aria-hidden='true'></span>
          <button
            className='btn btn-danger signUp'
            onClick={() => navigate(`/sign-up`)}
          >
            CREATE PROFILE
          </button>
        </div> */}
      </div>
      <Feedback />
    </div>
  );
}

// className='btn btn-danger margin-left'
//             id='signUpBtn'
//             isEmailSignIn
//             onClick={signInWithEmailAndPassword}
