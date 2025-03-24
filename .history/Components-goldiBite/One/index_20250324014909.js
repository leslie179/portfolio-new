import React from "react";
import styles from "./One.module.css";

const One = () => {
  return (
    <div className={styles.leftRightContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.h1}>
            1. How it started
        </h1>
        <p className={styles.p1}>
                    So they don’t die from something like a peanut allergy.
        </p>
      </div>
      <div className={styles.rightContent}>yyyy</div>
    </div>
  );
};

export default One;
