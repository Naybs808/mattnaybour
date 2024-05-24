import React from "react";

import styles from "./NavigationBar.module.scss";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navigationBar}>
        <div
          className={styles.navigationOption}
          onClick={() => {
            navigate("/");
          }}
        >
          <p className={styles.navigationText}>Home</p>
        </div>
        <div className={styles.filler}></div>
        <div
          className={styles.endNavigationOption}
          onClick={() => {
            navigate("/publications");
          }}
        >
          <p className={styles.navigationText}>Research</p>
        </div>
        <div
          className={styles.endNavigationOption}
          onClick={() => {
            navigate("/about");
          }}
        >
          <p className={styles.navigationText}>About</p>
        </div>
        <div className={styles.endNavigationOption}>
          <p className={styles.navigationText}>Visual</p>
        </div>
      </div>

      <div className={styles.line} />
    </>
  );
}
