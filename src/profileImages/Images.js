import React from "react";
import LionRed from "./lion-red.png";
import LionOrange from "./lion-orange.png";
import LionYellow from "./lion-yellow.png";
import LionGreen from "./lion-green.png";
import LionTeal from "./lion-teal.png";
import LionBlue from "./lion-blue.png";
import LionPurple from "./lion-purple.png";
import LionPink from "./lion-pink.png";

export const Images = () => {
  let images = [];

  images.push(
    <img src={LionRed} width='70' height='70' alt='' loading='lazy' />
  );
  images.push(
    <img src={LionOrange} width='70' height='70' alt='' loading='lazy' />
  );
  images.push(
    <img src={LionYellow} width='70' height='70' alt='' loading='lazy' />
  );
  images.push(
    <img src={LionGreen} width='70' height='70' alt='' loading='lazy' />
  );
  images.push(
    <img src={LionTeal} width='70' height='70' alt='' loading='lazy' />
  );
  images.push(
    <img src={LionBlue} width='70' height='70' alt='' loading='lazy' />
  );
  images.push(
    <img src={LionPurple} width='70' height='70' alt='' loading='lazy' />
  );
  images.push(
    <img src={LionPink} width='70' height='70' alt='' loading='lazy' />
  );
  return (
    <div>
      {images &&
        images.map((image) => {
          return <option>{image}</option>;
        })}
    </div>
  );
};
