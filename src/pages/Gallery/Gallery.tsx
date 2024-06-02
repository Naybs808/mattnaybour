import { Stack } from "@mui/material";
import React, { useState } from "react";
import NavigationBar from "../../common/NavigationBar/NavigationBar.tsx";
import Title from "../../common/Title/Title.tsx";
import TagLine from "../../common/TagLine/TagLine.tsx";

import apple from "../../images/drawings/apple.jpg";
import best from "../../images/drawings/best.jpg";
import chess from "../../images/drawings/chess.jpg";
import hand1 from "../../images/drawings/hand_1.jpg";
import hand2 from "../../images/drawings/hand_2.jpg";
import hand3 from "../../images/drawings/hand_3.jpg";
import lamp from "../../images/drawings/lamp.jpg";
import nz from "../../images/drawings/nz.jpg";
import olly from "../../images/drawings/olly.jpg";

import styles from "./gallery.module.scss";
import Drawings from "./Drawings.tsx";
import Photographs from "./Photographs.tsx";

export default function Gallery() {
  const [showDrawings, setShowDrawings] = useState(true);
  return (
    <>
      <Stack direction="column">
        <NavigationBar />

        <Title title="Gallery" />

        <TagLine
          text={"A collection of drawings and photos."}
          paddingTop="20px"
        />
        <div style={{ height: "40px" }} />
        <div style={{ paddingRight: "5%", marginLeft: "5%" }}>
          {showDrawings && <Drawings />}
          {!showDrawings && <Photographs />}
        </div>
      </Stack>

      <br></br>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          paddingBottom: "30px",
          columnGap: "40%",
        }}
      >
        <div
          className={styles.navigationText}
          onClick={() => {
            setShowDrawings(true);
          }}
        >
          Drawings
        </div>
        <div
          className={styles.navigationText}
          onClick={() => {
            setShowDrawings(false);
          }}
        >
          Photography
        </div>
      </div>
    </>
  );
}
