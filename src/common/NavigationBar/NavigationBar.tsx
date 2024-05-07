import React from "react";

import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <>
      <div className="navigation-bar">
        <div className="navigation-option">
          <p className="navigation-text">Home</p>
        </div>
        <div className="filler"></div>
        <div className="end-navigation-option">
          <p className="navigation-text">Research</p>
        </div>
        <div className="end-navigation-option">
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
