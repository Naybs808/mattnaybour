import React from "react";
import "./TagLine.css";

interface TagLineProps {
  text: string;
  paddingTop: string;
}

export default function TagLine(props: TagLineProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: props.paddingTop,
      }}
    >
      <div className="tagline">{props.text}</div>
    </div>
  );
}
