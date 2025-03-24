import React from "react";
import styles from "./One.module.css";

const One = () => {
  return (
    <div className={styles.leftRightContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.h1}>
            We made an app to help people identify red-flag and green-flag foods,
            making food allergies/intolerances a little safer.
        </h1>
      </div>
      <div className={styles.rightContent}>yyyy</div>
    </div>
  );
};

export default One;
