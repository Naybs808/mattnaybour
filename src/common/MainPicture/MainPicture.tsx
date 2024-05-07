import React from "react";
import "./MainPicture.css";

interface MainPictureProps {
  image: any;
}

export default function MainPicture(props: MainPictureProps) {
  return (
    <div className="image-container">
      <img className="picture-frame" src={props.image} alt={"Me"}></img>
    </div>
  );
}
