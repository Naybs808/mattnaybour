import React from "react";

import "./NavigationBar.css";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navigation-bar">
        <div
          className="navigation-option"
          onClick={() => {
            navigate("/");
          }}
        >
          <p className="navigation-text">Home</p>
        </div>
        <div className="filler"></div>
        <div
          className="end-navigation-option"
          onClick={() => {
            navigate("/publications");
          }}
        >
          <p className="navigation-text">Research</p>
        </div>
        <div
          className="end-navigation-option"
          onClick={() => {
            navigate("/about");
          }}
        >
          <p className="navigation-text">About</p>
        </div>
        <div className="end-navigation-option">
          <p className="navigation-text">Visual</p>
        </div>
      </div>

      <div className="line" />
    </>
  );
}
