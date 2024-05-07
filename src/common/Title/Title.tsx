import React from "react";

import "./Title.css";

interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps) {
  return <div className="title"> {props.title} </div>;
}
