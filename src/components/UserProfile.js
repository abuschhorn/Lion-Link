import React from "react";
import LionPurple from "../profileImages/lion-purple.png";
import { Image } from "react-bootstrap";

export default function UserProfile() {
  return (
    <div>
      <h1> Name: </h1>
      <Image
        src='https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-blue.png?alt=media&token=5f6bd5f9-d8d8-4593-a70d-98c7e28ac971'
        height='60'
        width='60'
      />
    </div>
  );
}
