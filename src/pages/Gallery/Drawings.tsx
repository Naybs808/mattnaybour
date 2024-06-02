import React from "react";
import apple from "../../images/drawings/apple.jpg";
import best from "../../images/drawings/best.jpg";
import chess from "../../images/drawings/chess.jpg";
import hand1 from "../../images/drawings/hand_1.jpg";
import hand2 from "../../images/drawings/hand_2.jpg";
import hand3 from "../../images/drawings/hand_3.jpg";
import lamp from "../../images/drawings/lamp.jpg";
import nz from "../../images/drawings/nz.jpg";
import olly from "../../images/drawings/olly.jpg";

export default function Drawings() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: "5%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            rowGap: "40px",
          }}
        >
          {" "}
          <img src={apple} alt={"apple"} style={{ width: "inherit" }}></img>
          <img src={best} alt={"best"} style={{ width: "inherit" }}></img>
          <img src={chess} alt={"best"} style={{ width: "inherit" }}></img>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            width: "100%",
            rowGap: "40px",
          }}
        >
          <img src={hand1} alt={"best"} style={{ width: "inherit" }}></img>

          <img src={hand2} alt={"best"} style={{ width: "inherit" }}></img>

          <img src={hand3} alt={"best"} style={{ width: "inherit" }}></img>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            width: "100%",
            rowGap: "40px",
          }}
        >
          <img src={lamp} alt={"best"} style={{ width: "inherit" }}></img>

          <img src={nz} alt={"best"} style={{ width: "inherit" }}></img>

          <img src={olly} alt={"best"} style={{ width: "inherit" }}></img>
        </div>
      </div>
    </>
  );
}
