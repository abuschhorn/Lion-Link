import React, { useEffect, useState } from "react";
import { useMatch } from "@reach/router";
import { Spinner } from "react-bootstrap";
import { firestore } from "../firebase.util";

export default function Profile() {
  const match = useMatch("/users/:userId");
  const [user, setUser] = useState(null);
  useEffect(() => {
    firestore
      .collection("users")
      .doc(match.userId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          setUser(doc.data());
        }
      });
  }, [match.userId, setUser]);

  if (!user) {
    return (
      <div className='spinner'>
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <div>
      <div className='row'>
        {user.avatar}
        <h1 className='display-4'>
          {user.fName} {user.lName}
        </h1>
      </div>
      {user.pronouns}
      {user.city} {user.state} {user.major} {user.minor} {user.interests}
      {user.schedule} {user.religion} {user.sexuality} {user.politic}
      {user.astr} {user.diet} {user.instagram}
    </div>
  );
}
