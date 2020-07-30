import React from "react";
import { Media, Image } from "react-bootstrap";
import Ashley from "../profileImages/aboutImages/ashley.png";
import Troy from "../profileImages/aboutImages/troy.png";
import Lauren from "../profileImages/aboutImages/lauren.png";

export default function AboutPage() {
  return (
    <div>
      <div>
        <div className='card about-info'>
          <h1 className='display-4'> about our vision: </h1>
          <p className='lead'>
            {" "}
            “Lion-Link” is a virtual platform where incoming LMU students can
            connect with one another based on similar interests and
            commonalities. This will provide a safe space for people of many
            communities to connect and communicate with one another. The goal is
            to create an avenue for communication based on common interests and
            not based on physical appearance to help limit unconscious biases.
          </p>
        </div>
      </div>
      <div class='row'>
        <div class='col-sm'>
          <div className='card about'>
            <Media className='align-self-center mr-3'>
              <Image src={Ashley} width='100' roundedCircle />
            </Media>
            <Media.Body className='about-bio'>
              <h5>Ashley Buschorn</h5>
              <p>Cras sit amet nibh libero,</p>
            </Media.Body>
          </div>
        </div>

        <div class='col-sm'>
          <div className='card about'>
            <Media className='align-self-center mr-3'>
              <Image src={Troy} width='100' roundedCircle />
            </Media>
            <Media.Body className='about-bio'>
              <h5>Troy Womack-Henderson</h5>
              <p>Cras sit amet nibh libero,</p>
            </Media.Body>
          </div>
        </div>

        <div class='col-sm'>
          <div className='card about'>
            <Media className='align-self-center mr-3'>
              <Image src={Lauren} width='100' roundedCircle />
            </Media>
            <Media.Body className='about-bio'>
              <h5>Lauren Amparo</h5>
              <p>Cras sit amet nibh libero,</p>
            </Media.Body>
          </div>
        </div>
      </div>
    </div>
  );
}
