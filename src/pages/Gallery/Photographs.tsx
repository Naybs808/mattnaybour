import React from "react";
import face from "../../images/dublin/face.jpg";
import castle from "../../images/dublin/castle.jpg";
import front from "../../images/dublin/front.jpg";
import tower from "../../images/dublin/tower.jpg";
import TagLine from "../../common/TagLine/TagLine.tsx";

import blossom from "../../images/attenborough/blossom.jpg";
import bridge from "../../images/attenborough/bridge.jpg";
import canal from "../../images/attenborough/canal.jpg";
import station from "../../images/attenborough/station.jpg";

export default function Photographs() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
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
          <img src={face} alt={"apple"} style={{ width: "inherit" }}></img>
          <img src={castle} alt={"best"} style={{ width: "inherit" }}></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            rowGap: "40px",
          }}
        >
          {" "}
          <img src={front} alt={"best"} style={{ width: "inherit" }}></img>
          <img src={tower} alt={"best"} style={{ width: "inherit" }}></img>
        </div>
      </div>
      <div style={{ height: "40px" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
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
          <img src={blossom} alt={"apple"} style={{ width: "inherit" }}></img>
          <img src={bridge} alt={"best"} style={{ width: "inherit" }}></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            rowGap: "40px",
          }}
        >
          {" "}
          <img src={canal} alt={"best"} style={{ width: "inherit" }}></img>
          <img src={station} alt={"best"} style={{ width: "inherit" }}></img>
        </div>
      </div>
    </>
  );
}
