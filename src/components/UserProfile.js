import React from "react";
import LionPurple from "../profileImages/lion-purple.png";
import { Image, Media } from "react-bootstrap";

export default function UserProfile() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className='display-4'> Ashley Buschhorn </h1>
      <div className='align-self-center mr-3'>
        <Image
          style={{ marginBottom: "10px" }}
          src='https://firebasestorage.googleapis.com/v0/b/lion-link-6800a.appspot.com/o/lion-blue.png?alt=media&token=5f6bd5f9-d8d8-4593-a70d-98c7e28ac971'
          height='60'
          width='60'
        />
        <p>
          Major: Computer Science Minor: Math Interest: Photography Religion:
          Christian Sexuality: Gay Politics: Democrat Astrology: Cancer Diet:
          Omnivore Instagram: @abuschhorn_19
        </p>
      </div>
    </div>
  );
}
