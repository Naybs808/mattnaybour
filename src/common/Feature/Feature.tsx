import { Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";

import styles from "./Feature.module.scss";

import stage from "../../images/StageScan.jpg";
import { openInNewTab } from "../OpenInNewTab.tsx";

interface FeatureProps {
  image: any;
  imageLeft: boolean;
  title: string;
  subText: string;
  link: string;
}

export default function Feature(props: FeatureProps) {
  let imageNode = (
    <div className={styles.imageContainer}>
      <img
        className={styles.pictureFrame}
        src={props.image}
        alt={"Stage"}
      ></img>
    </div>
  );

  let textNode = (
    <div
      id="MyDiv"
      style={{
        height: "360px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "80%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1> {props.title}</h1>
        <h2> {props.subText}</h2>
        <div
          className={styles.seeMoreButton}
          onClick={() => {
            openInNewTab(props.link);
          }}
        >
          See More
        </div>
      </div>
    </div>
  );

  let firstPart: ReactNode;
  let secondPart: ReactNode;

  if (props.imageLeft) {
    firstPart = imageNode;
    secondPart = textNode;
  } else {
    secondPart = imageNode;
    firstPart = textNode;
  }

  return (
    <div
      style={{
        paddingLeft: "5%",
        paddingTop: "100px",
        paddingRight: "5%",
      }}
    >
      <Grid container columns={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
        <Grid item lg={1} md={0} sm={0} xs={0}></Grid>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          {firstPart}
        </Grid>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          {secondPart}
        </Grid>
        <Grid item lg={1} md={0} sm={0} xs={0}></Grid>
      </Grid>
    </div>
  );
}
