import React from "react";
import LionPurple from "../profileImages/lion-purple.png";
import { Image, Media } from "react-bootstrap";

export default function UserProfile() {
  return (
    <div>
      <h1 className='display-4'> John Doe </h1>
      <Media className='align-self-center mr-3'>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-blue.png?alt=media&token=5f6bd5f9-d8d8-4593-a70d-98c7e28ac971'
          height='60'
          width='60'
        />
        <Media.Body>
          Major: Math Minor: CS Interest: Sushi Religion: Catholic Sexuality:
          Straight Politics: Conservative Astrology: Scorpio Diet: Omnivore
          Instagram: @johnny.doe
        </Media.Body>
      </Media>
    </div>
  );
}
