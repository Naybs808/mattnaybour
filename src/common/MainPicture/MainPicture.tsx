import React from "react";
import styles from "./MainPicture.module.scss";

interface MainPictureProps {
  image: any;
}

export default function MainPicture(props: MainPictureProps) {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.pictureFrame} src={props.image} alt={"Me"}></img>
    </div>
  );
}
