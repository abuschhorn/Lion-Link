import React from "react";
import { auth } from "../firebase.util";
import { useNavigate } from "@reach/router";

export default function SignOut() {
  const navigate = useNavigate();
  console.log("user", auth.currentUser);
  return (
    <div>
      <h1>Are you sure you want to sign out?</h1>
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
        Yes
      </button>
    </div>
  );
}
