import React, { useEffect, useState } from "react";
import { useMatch } from "@reach/router";
import { Spinner } from "react-bootstrap";
import { firestore } from "../firebase.util";
import { Image } from "react-bootstrap";

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
          //   console.log(doc.data());
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
        <div>
          <div className='row'>
            <h1 className='display-4'>{user.name}</h1>
          </div>
          <div className='row profile-image'>
            <Image src={user.avatar} height='100' width='100' />
          </div>
        </div>
        <ul>
          <hr />
          <div className='card-text profile-text'>
            <li>{user.pronouns}</li>
            <li>
              {user.city}, {user.state} {user.country}
            </li>
            <li>Major: {user.major}</li>
            <li>Minor: {user.minor}</li>
            <li>Religion: {user.religion}</li>
            <li>Sexuality: {user.sexuality}</li>
            <li>Politics: {user.politic}</li>
            <li>Astrology: {user.astr}</li>
            <li>Diet: {user.diet}</li>
            <li>Instagram: {user.instagram}</li>
            <hr />
          </div>
        </ul>
      </div>
    </div>
  );
}
