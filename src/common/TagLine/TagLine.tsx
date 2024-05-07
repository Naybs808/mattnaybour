import React from "react";
import "./TagLine.css";

interface TagLineProps {
  text: string;
}

export default function TagLine(props: TagLineProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      <div className="tagline">{props.text}</div>
    </div>
  );
}
